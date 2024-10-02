import Menu from '../../components/Menu/Menu'
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="home_container">
        <Menu studentName={'Ana Pupo'}/>
        <div className="home_side_content">
        <div className="home_header">
            <div className="home_header_text">
            <h1>Painel do Aluno</h1>
            <p>Início</p>
            </div>
        </div>
        <div className="home_info_top">
        <div className="home_profile_student">
            <div className="card_title"><p>Perfil do Aluno</p></div>
            <div>
                <p>Ana luíza de Lara Pupo</p>
                <p>000000000000000</p>
                <p>123456789</p>
            </div>
            <div>
                <p>Média Geral: 8.79</p>
            </div>
        </div>
        <div className="home_calendar">
            <div className="card_title"><p>Calendar</p></div>
            <p>30/09/2024</p>
            <p>Reunião importante</p>
            <p>27/10/2024</p>
            <p>Provas</p>
            <p>ver tudo</p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home