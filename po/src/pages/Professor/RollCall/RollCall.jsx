import './RollCall.css';
import { TeacherMenu } from '../../../components/Professor';
import Panel from '../../../components/Panel/Panel';
import icons from '../../../assets/images/icons/icons';



const RollCall = () => {
  return (
    <div className="rollcall-container">
      <TeacherMenu studentName={'Sandra'} />
      <div className="rollcall_side_contents">
        <Panel pageName="Portal do Professor" section="Início/Alunos/Presença" color="#F66B0E" />
        <h3 className="unit_identify">Unidade de Ensino: Nome da Instituição</h3>
        <div className="rollcall_info">
          <div className="rollcall_info_top">
            <div className="filters">
            <label>Turma</label>
            <select className="class_select">
              <option value="Selecione a Turma">Turma 1</option>
            </select>
            <label>Disciplina</label>
            <select className="class_select">
              <option value="Selecione a Disciplina">Programação Web</option>
            </select>
            </div>
            <div className="search-bar">
              <input type="search" placeholder="Pesquisar aluno" />
            </div>
          </div>
        <table className="attendance-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>1º</th>
            <th>2º</th>
            <th>3º</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td className="student-info">
            <img src={icons.user.src} alt={icons.user.alt} className="avatar" />
            <span>Nome Completo</span>
            </td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        </tbody>
        </table>
        <button className="update-button">Atualizar</button>
        </div>
      </div>
    </div>
  );
};

export default RollCall;
