import {Link} from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore'
import { useState } from 'react';
import './Login.css';
import Logo from '../../assets/img/logo-branca.png'
import miniLogo from '../../assets/img/logo-azul 1.png'
import Lock from '../../assets/img/icon-lock.png'
import Email from '../../assets/img/icon-email.png'

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const login = useAuthStore((state) => state.login)
  const error = useAuthStore((state) => state.error)

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  };

  return (
    <div className="login-container">
      <div className="login-left">
      <img src={miniLogo} alt="" id='mini-logo' />
      <div className="login_left_title">
        <h1>Portal do Aluno</h1>
        <p>Faça o login para acessar a sua conta</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
          <img src={Email} alt="Email icon" />
            <input
              type="text" 
              onChange={(e) => setEmail(e.target.value)} 
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
          {error && <p style={{color: 'red'}}>{error}</p>}
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