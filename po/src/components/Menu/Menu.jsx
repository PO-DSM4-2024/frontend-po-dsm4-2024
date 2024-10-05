import './Menu.css';
import icons from '../../assets/images/icons/icons';
import logos from '../../assets/images/logos/logos';
import { Link } from 'react-router-dom';

const Menu = ({ studentName }) => {
  return (
    <div className="menu_container">
      <div className="menu_logo">
        <img src={logos.white} id="white-logo" alt="" />
      </div>
      <div className="menu_user_info">
        <div id="user-image"></div>
        <p>{studentName}</p>
      </div>
      <div className="menu_consult">
        <div className="consult_title">
        <Link id="title" to={'/query'}><p>Consultas</p></Link>
          <div id="string"></div>
        </div>
        <div className="consult_actions">
          <div className="consult_itens">
            <img src={icons.no} alt="no" />
            <Link id="itens" to={'/query/absence'}><p>Faltas</p></Link>
          </div>
          <div className="consult_itens">
            <img src={icons.star} alt="no" />
            <p>Notas</p>
          </div>
          <div className="consult_itens">
            <img src={icons.clock} alt="no" />
            <p>Aulas</p>
          </div>
          <div className="consult_itens">
            <img src={icons.history} alt="no" />
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
            <img src={icons.book} alt="no" />
            <p>Disciplinas</p>
          </div>
          <div className="registry_itens">
            <img src={icons.danger} alt="no" />
            <p>Pendências</p>
          </div>
        </div>
      </div>
      <div id="string2"></div>
      <div className="menu_actions">
        <div className="menu_actions_img">
          <img src={icons.gear} alt="" />
          <p>Configurações</p>
        </div>
        <div className="menu_actions_img">
          <img src={icons.quit} alt="" />
          <p>Sair</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
