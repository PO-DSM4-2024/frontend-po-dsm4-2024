import './Panel.css'

const Panel = ({pageName, section, color}) => {
    return (
        <div className="home_header" style={{"border-bottom": `10px solid ${color}`}}>
            <div className="home_header_text">
            <h1>{pageName}</h1>
            <p>{section}</p>
            </div>
        </div>
    )
}

export default Panel