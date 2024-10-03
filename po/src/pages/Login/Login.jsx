import { Link } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Login.css';
import Logo from '../../assets/img/logo-branca.png';
import miniLogo from '../../assets/img/logo-azul 1.png';
import Lock from '../../assets/img/icon-lock.png';
import Email from '../../assets/img/icon-email.png';

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
        <img src={miniLogo} alt="" id="mini-logo" />
        <div className="login_left_title">
          <h1>Portal do Aluno</h1>
          <p>Faça o login para acessar a sua conta</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            {errors.email && errors.password && (
              <p style={{ color: 'red', textWrap: 'nowrap' }}>Email ou senha incorreto. Tente novamente!</p>
            )}
            <img src={Email} alt="Email icon" />
            <input type="text" {...register('email')} placeholder="E-mail Institucional" required />
          </div>
          <div className="input-group">
            <img src={Lock} alt="Lock icon" />
            <input type="password" {...register('password')} placeholder="Senha" required />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="login_left_bottom">
            <Link className="forgot-link" to={'/teacherLogin'}>
              Sou funcionário
            </Link>
          </div>
        </form>
      </div>
      <div className="login-right">
        <div className="login-logo">
          <img src={Logo} alt="" />
        </div>
        <img src="src/assets/img/image.png" alt="Student" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
