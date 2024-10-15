import './Class.css';
import { StudentMenu } from '../../../../components/Student';
import Panel from '../../../../components/Panel/Panel';

const Class = () => {
  return (
    <div className="classes_container">
      <StudentMenu studentName={'Ana Clara'} />
      <div className="classes_side_content">
        <Panel pageName="Painel do Aluno" section="Consultas/Aulas" color="#677C91" />

        <div className="classes_info">
          <div className="classes_card">
            <div className="classes_card_title">
              <p>Notas</p>
              <hr />
            </div>

            <div className="classes_card_table">
              <div className="classes_card_table_header">
                <div className="classes_header">
                  <span>Segunda</span>
                  <span>Terça</span>
                  <span>Quarta</span>
                  <span>Quinta</span>
                  <span>Sexta</span>
                </div>
              </div>

              <div className="classes_card_table_body">
                <div className="classes_body">
                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Materia 1</span>
                      <p>18h30 - 19h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 1</span>
                      <p>18h30 - 19h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 1</span>
                      <p>18h30 - 19h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 1</span>
                      <p>18h30 - 19h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 1</span>
                      <p>18h30 - 19h20</p>
                    </div>
                  </div>

                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Materia 2</span>
                      <p>19h20 - 20h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 2</span>
                      <p>19h20 - 20h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 2</span>
                      <p>19h20 - 20h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 2</span>
                      <p>19h20 - 20h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 2</span>
                      <p>19h20 - 20h10</p>
                    </div>
                  </div>

                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Materia 3</span>
                      <p>20h10 - 21h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 3</span>
                      <p>20h10 - 21h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 3</span>
                      <p>20h10 - 21h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>20h10 - 21h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 3</span>
                      <p>20h10 - 21h00</p>
                    </div>
                  </div>

                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>21h00 - 21h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>21h00 - 21h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>21h00 - 21h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>21h00 - 21h20</p>
                    </div>
                    <div className="classes_day">
                      <span>Intervalo</span>
                      <p>21h00 - 21h20</p>
                    </div>
                  </div>

                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Materia 4</span>
                      <p>21h20 - 22h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 4</span>
                      <p>21h20 - 22h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 4</span>
                      <p>21h20 - 22h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 4</span>
                      <p>21h20 - 22h10</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 4</span>
                      <p>21h20 - 22h10</p>
                    </div>
                  </div>

                  <div className="classes_weekday_body">
                    <div className="classes_day">
                      <span>Materia 5</span>
                      <p>22h10 - 23h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 5</span>
                      <p>22h10 - 23h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 5</span>
                      <p>22h10 - 23h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 5</span>
                      <p>22h10 - 23h00</p>
                    </div>
                    <div className="classes_day">
                      <span>Materia 5</span>
                      <p>22h10 - 23h00</p>
                    </div>
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

export default Class;
