import './Query.css';
import Menu from '../../components/Menu/Menu';
import ArrowLeft from '../../assets/img/arrow-left.png';
import Panel from '../../components/Panel/Panel';

const Query = () => {
  return (
    <div className="query_container">
      <Menu studentName={'Ana Pupo'} />
      <div className="query_side_content">
        <Panel pageName="Painel do Aluno" section="Consultas" color="#677C91" />
        <div className="query_info">
          <div className="query_title">
            <p className="query_title_text">Consultas</p>
          </div>
          <div className="query_card">
            <div className="card_title">
              <p>Faltas</p>
              <img src={ArrowLeft} alt="" />
            </div>
            <div className="card_content">
              <p>Cheque suas faltas durante o semestre ou toda sua jornada acadêmica.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_title">
              <p>Notas</p>
              <img src={ArrowLeft} alt="" />
            </div>
            <div className="card_content">
              <p>Cheque suas notas durante o semestre ou toda sua jornada acadêmica.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_title">
              <p>Aulas</p>
              <img src={ArrowLeft} alt="" />
            </div>
            <div className="card_content">
              <p>Cheque suas aulas de todo o curso e todo seu histórico de matérias.</p>
            </div>
          </div>
          <div className="query_card">
            <div className="card_title">
              <p>Histórico</p>
              <img src={ArrowLeft} alt="" />
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
