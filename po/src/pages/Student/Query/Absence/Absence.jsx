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
            <div className="card_title">
              <p>Faltas</p>
              <hr />
            </div>
            <div className="card_subject">
              <label>Disciplina: </label>
              <select name="subject">
                <option value="disciplina">Selecione uma Disciplina</option>
                <option value="disciplina">disciplina</option>
              </select>
            </div>
            <div className="card_table">
              <table>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: `left`,
                      }}
                    >
                      Matéria
                    </th>
                    <th>Sigla</th>
                    <th>Total aulas</th>
                    <th
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      Total faltas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                  <tr>
                    <td>Nome da materia</td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Sigla
                    </td>
                    <td
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      18 aulas
                    </td>
                    <td
                      style={{
                        textAlign: `right`,
                      }}
                    >
                      2 faltas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absence;
