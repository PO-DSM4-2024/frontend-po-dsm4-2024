import Menu from '../../components/Menu/Menu';
import Panel from '../../components/Panel/Panel';
import iconUser from '../../assets/img/icons/user-icon.png';
import iconCalendar from '../../assets/img/icons/calendar-icon.png';
import iconArrow from '../../assets/img/icons/arrow-right.png';
import '../Home/Home.css';

const Home = () => {
  return (
    <div className="home_container">
      <Menu studentName={'Ana Clara'} />
      <div className="home_side_content">
        <Panel pageName="Painel do Aluno" section="Início" color="#F66B0E" />
        <div className="home_info_top">
          <div className="home_profile_student">
            <div className="card_title">
              <img src={iconUser} alt="user" />
              <p>Perfil do aluno</p>
            </div>
            <div>
              <div className="student_info">
                <p>Ana luíza de Lara Pupo</p>
                <p>4º sem</p>
              </div>
              <p>000000000000000</p>
              <p>123456789</p>
            </div>
            <div>
              <p>Média Geral: 8.79</p>
            </div>
          </div>
          <div className="home_calendar">
            <div className="card_title">
              <img src={iconCalendar} alt="calendar icon" />
              <p>Calendário</p>
              <img src={iconArrow} alt="arrow icon" />
            </div>
            <div>
              <p>30/09/2024</p>
              <p>Reunião importante</p>
            </div>
            <div>
              <p>27/10/2024</p>
              <p>Provas</p>
            </div>
            <div className="view_all">
              <p>ver tudo</p>
            </div>
          </div>
        </div>
        <div className="home_info_below">
          <div className="home_section">
            <div className="card_title">
              <img src={iconCalendar} alt="calendar icon" />
              <p>Visão Geral</p>
              <img src={iconArrow} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
