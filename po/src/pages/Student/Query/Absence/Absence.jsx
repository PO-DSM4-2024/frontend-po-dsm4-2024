import './Absence.css';
import { StudentMenu } from '../../../../components/Student';
import Panel from '../../../../components/Panel/Panel';

const Absence = () => {
  return (
    <div className="absence_container">
      <StudentMenu studentName={'Ana Clara'} />
      <div className="absence_side_content">
        <Panel pageName="Painel do Aluno" section="Consultas/Faltas" color="#677C91" />
        <div className="absence_info">
          <div className="absence_card">
            <div className="absence_card_title">
              <p>Faltas</p>
              <hr />
            </div>
            <div className="absence_card_subject">
              <span>Disciplina: </span>
              <select name="subject">
                <option value="disciplina">Selecione uma Disciplina</option>
                <option value="disciplina">disciplina</option>
              </select>
            </div>
            <div className="absence_card_table">
              <div className="absence_card_table_header">
                <div className="absence_header">
                  <h1>Matéria</h1>
                  <h1 className="absence_header_acronym">Sigla</h1>
                  <h1 className="absence_header_total_classes">Total aulas</h1>
                  <h1>Total faltas</h1>
                </div>
              </div>

              <div className="absence_card_table_body">
                <div className="absence_body">
                  <h2>Nome da materia</h2>
                  <h2>Sigla</h2>
                  <h2>18 aulas</h2>
                  <h2>2 faltas</h2>
                </div>

                <hr />

                <div className="absence_body">
                  <h2>Nome da materia</h2>
                  <h2>Sigla</h2>
                  <h2>18 aulas</h2>
                  <h2>2 faltas</h2>
                </div>

                <hr />

                <div className="absence_body">
                  <h2>Nome da materia</h2>
                  <h2>Sigla</h2>
                  <h2>18 aulas</h2>
                  <h2>2 faltas</h2>
                </div>

                <hr />

                <div className="absence_body">
                  <h2>Nome da materia</h2>
                  <h2>Sigla</h2>
                  <h2>18 aulas</h2>
                  <h2>2 faltas</h2>
                </div>

                <hr />

                <div className="absence_body">
                  <h2>Nome da materia</h2>
                  <h2>Sigla</h2>
                  <h2>18 aulas</h2>
                  <h2>2 faltas</h2>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absence;
