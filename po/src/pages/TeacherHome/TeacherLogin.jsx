import { Link } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './TeacherLogin.css';
import Logo from '../../assets/img/logo-branca.png';
import miniLogo from '../../assets/img/logo-azul 1.png';
import Lock from '../../assets/img/icon-lock.png';
import Email from '../../assets/img/icon-email.png';
import Hat from '../../assets/img/icon-hat.png';

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
          <h1>Portal do Professor</h1>
          <p>Faça o login para acessar a sua conta</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            {errors.email && errors.password && (
              <p style={{ color: 'red', textWrap: 'nowrap' }}>Email ou senha incorreto. Tente novamente!</p>
            )}
            <img src={Email} className="icon" alt="Email icon" />
            <input type="text" {...register('email')} placeholder="E-mail Institucional" required />
          </div>
          <div className="input-group">
            <img src={Lock} alt="Lock icon" />
            <input type="password" {...register('password')} placeholder="Senha" required />
          </div>

          <div className="input-group">
            <img src={Hat} alt="Hat icon" />
            <select className="select-container">
              <option value="Instituição de Ensino">Instituição de Ensino</option>
              <option value="FATEC Americana">FATEC Americana</option>
              <option value="FATEC Araçatuba">FATEC Araçatuba</option>
              <option value="FATEC Araraquara">FATEC Araraquara</option>
              <option value="FATEC Barueri">FATEC Barueri</option>
              <option value="FATEC Bauru">FATEC Bauru</option>
              <option value="FATEC Botucatu">FATEC Botucatu</option>
              <option value="FATEC Carapicuíba">FATEC Carapicuíba</option>
              <option value="FATEC Diadema">FATEC Diadema</option>
              <option value="FATEC Franca">FATEC Franca</option>
              <option value="FATEC Garça">FATEC Garça</option>
              <option value="FATEC Guaratinguetá">FATEC Guaratinguetá</option>
              <option value="FATEC Registro">FATEC Registro</option>
              <option value="FATEC Ribeirão Preto">FATEC Ribeirão Preto</option>
              <option value="FATEC São Bernardo do Campo">FATEC São Bernardo do Campo</option>
              <option value="FATEC São Paulo">FATEC São Paulo</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="login_left_bottom">
            <Link className="forgot-link" to={'/'}>
              Sou Aluno
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
