import './Grade.css';
import { StudentMenu } from '../../../../components/Student';
import icons from '../../../../assets/images/icons/icons';
import Panel from '../../../../components/Panel/Panel';

const Grades = () => {
  return (
    <div className="grades_container">
      <StudentMenu studentName={'Ana Clara'} />
      <div className="grades_side_content">
        <Panel pageName="Painel do Aluno" section="Consultas/Notas" color="#677C91" />

        <div className="grades_info">
          <div className="grades_card">
            <div className="grades_card_title">
              <p>Notas</p>
              <hr />
            </div>

            <div className="grades_card_table">
              <div className="grades_card_table_header">
                <div className="grades_header">
                  <span>Média</span>
                  <span>Atividade</span>
                  <span>Nota</span>
                </div>
              </div>

              <div className="grades_card_table_body">
                <div className="grades_body">
                  <div className="grades_dropdown_body">
                    <span>Nome da materia</span>
                    <span>Geral</span>
                    <span>9.5</span>
                    <img src={icons.arrowDown.src} alt={icons.arrowDown.src} />
                  </div>

                  <div className="grades_dropdown_body">
                    <span>Nome da materia</span>
                    <span>Geral</span>
                    <span>9.5</span>
                    <img src={icons.arrowDown.src} alt={icons.arrowDown.src} />
                  </div>

                  <div className="grades_dropdown_body">
                    <span>Nome da materia</span>
                    <span>Geral</span>
                    <span>9.5</span>
                    <img src={icons.arrowDown.src} alt={icons.arrowDown.src} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
