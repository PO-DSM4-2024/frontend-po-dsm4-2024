import { StudentMenu } from '../../../components/Student';
import Panel from '../../../components/Panel/Panel';
import icons from '../../../assets/images/icons/icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home_container">
      <StudentMenu studentName={'Ana Clara'} />
      <div className="home_side_contents">
        <Panel pageName="Painel do Aluno" section="Início" color="#F66B0E" />
        <div className="home_info">
        <div className="home_info_top">
          <div className="home_profile_student">
            <div className="card_title">
              <img src={icons.user.src} alt={icons.user.alt} />
              <p>Perfil do aluno</p>
            </div>
            <div>
              <div className="student_info">
                <p>Ana Clara</p>
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
              <img src={icons.calendar.src} alt={icons.calendar.alt} />
              <p>Calendário</p>
              <img src={icons.arrowRight.src} alt={icons.arrowRight.alt} />
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
              <img src={icons.calendar.src} alt={icons.calendar.alt} />
              <p>Visão Geral</p>
              <img src={icons.arrowRight.src} alt={icons.arrowRight.alt} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
