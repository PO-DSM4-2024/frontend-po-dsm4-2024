import './Menu.css';
import Logo from '../../assets/img/logo-branca.png';
import iconNo from '../../assets/img/icon-no.png';
import iconClock from '../../assets/img/icon-clock.png';
import iconStar from '../../assets/img/icon-star.png';
import iconHistory from '../../assets/img/icon-history.png';
import iconDanger from '../../assets/img/icon-danger.png';
import iconClass from '../../assets/img/icon-class.png';
import iconGear from '../../assets/img/icon-gear.png';
import iconQuit from '../../assets/img/icon-quit.png';

const Menu = ({ studentName }) => {
  return (
    <div className="menu_container">
      <div className="menu_logo">
        <img src={Logo} id="white-logo" alt="" />
      </div>
      <div className="menu_user_info">
        <div id="user-image"></div>
        <p>{studentName}</p>
      </div>
      <div className="menu_consult">
        <div className="consult_title">
          <p>Consultas</p>
          <div id="string"></div>
        </div>
        <div className="consult_actions">
          <div className="consult_itens">
            <img src={iconNo} alt="no" />
            <p>Faltas</p>
          </div>
          <div className="consult_itens">
            <img src={iconStar} alt="no" />
            <p>Notas</p>
          </div>
          <div className="consult_itens">
            <img src={iconClock} alt="no" />
            <p>Aulas</p>
          </div>
          <div className="consult_itens">
            <img src={iconHistory} alt="no" />
            <p>Histórico</p>
          </div>
        </div>
      </div>
      <div className="menu_registration">
        <div className="registry_title">
          <p>Matrícula</p>
          <div id="string"></div>
        </div>
        <div className="registry_actions">
          <div className="registry_itens">
            <img src={iconClass} alt="no" />
            <p>Disciplinas</p>
          </div>
          <div className="registry_itens">
            <img src={iconDanger} alt="no" />
            <p>Pendências</p>
          </div>
        </div>
      </div>
      <div id="string2"></div>
      <div className="menu_actions">
        <div className="menu_actions_img">
          <img src={iconGear} alt="" />
          <p>Configurações</p>
        </div>
        <div className="menu_actions_img">
          <img src={iconQuit} alt="" />
          <p>Sair</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
