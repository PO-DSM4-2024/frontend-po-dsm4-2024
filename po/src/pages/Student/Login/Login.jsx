import './Login.css';
import { Link } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import general from '../../../assets/images/general/general';
import logos from '../../../assets/images/logos/logos';
import icons from '../../../assets/images/icons/icons';

const schema = z.object({
  email: z.string().email('Invalid Email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  console.log('errors', errors);

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logos.blueHalf.src} alt={logos.blueHalf.alt} id="mini-logo" />
        <div className="login_left_title">
          <h1>Portal do Aluno</h1>
          <p>Faça o login para acessar a sua conta</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            {errors.email && errors.password && (
              <p style={{ color: 'red', textWrap: 'nowrap' }}>Email ou senha incorreto. Tente novamente!</p>
            )}
            <img src={errors.email ? icons.emailRed.src : icons.email.src} alt={icons.email.alt} className='img-inputs' />
            <input type="text" {...register('email')} className={errors.email ? 'input-error' : 'input-form-student'} placeholder="E-mail Institucional" required />
          </div>
          <div className="input-group">
            <img src={errors.password ? icons.lockRed.src : icons.lock.src} className='img-inputs'/>
            <input type="password" {...register('password')} className={errors.password ? 'input-error' : 'input-form-student'} placeholder="Senha" required />
          </div>

          <button type="submit" className="login-button-student">
            Entrar
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="login_left_bottom">
            <Link className="forgot-link-student" to={'/professor/teacherLogin'}>
              Sou funcionário
            </Link>
          </div>
        </form>
      </div>
      <div className="login-right">
        <div className="login-logo">
          <img src={logos.white.src} alt={logos.white.alt} />
        </div>
        <img src={general.banner.src} alt={general.banner.alt} className="login-image" />
      </div>
    </div>
  );
};

export default Login;
