import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Logo from '../../assets/img/logo-branca.png'
import miniLogo from '../../assets/img/logo-azul 1.png'
import Lock from '../../assets/img/icon-lock.png'
import Email from '../../assets/img/icon-email.png'

const Login = () => {
//   const { user, password, setUser, setPassword } = useLoginStore();

  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post('https://api.example.com/login', {
    //     username: user,
    //     password: password,
    //   });
    //   console.log('Login successful:', response.data);
    // } catch (error) {
    //   console.error('Error logging in:', error);
    // }
  };

  return (
    <div className="login-container">
      <div className="login-left">
      <img src={miniLogo} alt="" id='mini-logo' />
      <div className="login_left_title">
        <h1>Portal do Aluno</h1>
        <p>Faça o login para acessar a sua conta</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
          <img src={Email} alt="Email icon" />
            <input
              type="text" 
              onChange={(e) => setUser(e.target.value)} 
              placeholder="E-mail Institucional" 
              required 
            />
          </div>
          <div className="input-group">
            <img src={Lock} alt="Lock icon" />
            <input 
              type="password"  
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Senha" 
              required 
            />
          </div>
          <Link to={'/home'}><button type="submit" className="login-button">Entrar</button></Link>
        </form>
        <Link className="forgot-link" to={'/home'}>Sou funcionário</Link>
      </div>
      <div className="login-right">
        <div className="login-logo"><img src={Logo} alt="" /></div>
        <img src="src/assets/img/image.png" alt="Student" className="login-image" />
      </div>
    </div>
  );
};

export default Login;