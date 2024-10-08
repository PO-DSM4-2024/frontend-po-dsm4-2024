import './TeacherMenu.css';
import icons from '../../../assets/images/icons/icons';
import logos from '../../../assets/images/logos/logos';


const Menu = ({ studentName }) => {
  return (
    <div className="menu_container">
      <div className="menu_logo">
        <img src={logos.white.src} id="white-logo" alt={logos.white.alt} />
      </div>
      <div className="menu_user_info">
        <div id="user-image"></div>
        <h4>{studentName}</h4>
        <h6>Professora</h6>
      </div>
      <div className="menu_consult">
        <div className="consult_title">
          <p>Inicio</p>
          <div id="string"></div>
        </div>
        <div className="consult_actions">
        <div className="consult_itens">
            <img src={icons.students.src} alt={icons.students.alt} />
            <p>Alunos</p>
          </div>
          <div className="consult_itens">
            <img src={icons.notas.src} alt={icons.notas.alt} />
            <p>Notas</p>
          </div>
          <div className="consult_itens">
            <img src={icons.book.src} alt={icons.book.alt} />
            <p>Planejamento</p>
          </div>
          <div className="consult_itens">
            <img src={icons.book.src} alt={icons.book.alt} />
            <p>Conteúdos</p>
          </div>
          <div className="consult_itens">
            <img src={icons.calendar.src} alt={icons.calendar.alt} />
            <p>Calendário</p>
          </div>
        </div>
      </div>
      <div id="string2"></div>
      <div className="menu_actions">
        <div className="menu_actions_img">
          <img src={icons.gear.src} alt={icons.gear.alt} />
          <p>Configurações</p>
        </div>
        <div className="menu_actions_img">
          <img src={icons.quit.src} alt={icons.quit.alt} />
          <p>Sair</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
