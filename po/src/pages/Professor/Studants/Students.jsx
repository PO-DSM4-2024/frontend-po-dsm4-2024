import useAuthStore from '../../../store/useAuthStore.js'; 
import './Students.css';

const Students = () => {
  const { students } = useAuthStore();

  return (
    <div className="students-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="user_image_url" alt="Profile" />
          <p>Nome dado:</p>
        </div>
        <nav className="menu">
          <ul>
            <li>Alunos</li>
            <li>Notas</li>
            <li>Planejamento</li>
            <li>Conteúdos</li>
            <li>Calendário</li>
          </ul>
        </nav>
        <div className="settings">
          <p>Configurações</p>
          <p>Sair</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Portal do Professor</h1>
          <div className="filters">
            <div>
              <label>Turma:</label>
              <select>
                <option>Selecione uma Turma</option>
              </select>
            </div>
            <div>
              <label>Disciplina:</label>
              <select>
                <option>Selecione uma Disciplina</option>
              </select>
            </div>
          </div>
          <div className="actions">
            <input type="text" placeholder="Pesquisar aluno" />
            <button>Chamada</button>
          </div>
        </header>

        <section className="student-list">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Situação</th>
                <th>Frequência</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.status}</td>
                  <td>
                    <div className={`progress ${student.status === 'Ativo' ? 'active' : 'inactive'}`} style={{ width: student.frequency }}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Students;
