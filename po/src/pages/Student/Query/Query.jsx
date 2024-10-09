import './Query.css';
import { StudentMenu } from '../../../components/Student';
import icons from '../../../assets/images/icons/icons';
import Panel from '../../../components/Panel/Panel';

const Query = () => {
  return (
    <div className="query_container">
      <StudentMenu studentName={'Ana Clara'} />
      <div className="query_side_content">
        <Panel pageName="Painel do Aluno" section="Consultas" color="#677C91" />
        <div className="query_info">
          <div className="query_title">
            <p className="query_title_text">Consultas</p>
          </div>
          <div className="query_card">
            <div className="card_titles">
              <p>Faltas</p>
              <img src={icons.arrowLeft.src} alt={icons.arrowLeft.alt} />
            </div>
            <div className="card_content">
              <p>Cheque suas faltas durante o semestre ou toda sua jornada acadêmica.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_titles">
              <p>Notas</p>
              <img src={icons.arrowLeft.src} alt={icons.arrowLeft.alt} />
            </div>
            <div className="card_content">
              <p>Cheque suas notas durante o semestre ou toda sua jornada acadêmica.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_titles">
              <p>Aulas</p>
              <img src={icons.arrowLeft.src} alt={icons.arrowLeft.alt} />
            </div>
            <div className="card_content">
              <p>Cheque suas aulas de todo o curso e todo seu histórico de matérias.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_titles">
              <p>Histórico</p>
              <img src={icons.arrowLeft.src} alt={icons.arrowLeft.alt} />
            </div>
            <div className="card_content">
              <p>Cheque todo seu histórico da faculdade até hoje, de notas e faltas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
