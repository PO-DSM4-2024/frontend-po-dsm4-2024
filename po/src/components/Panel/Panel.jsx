import './Panel.css';
import logos from '../../assets/images/logos/logos';

const Panel = ({ pageName, section, color }) => {
  return (
    <div className="home_header" style={{ borderBottom: `10px solid ${color}` }}>
      <div className="home_header_text">
        <h1>{pageName}</h1>
        <p className='sec'>{section}</p>
      </div>
      <img className='home_logo' src={logos.banner.src} alt={logos.banner.alt} />
    </div>
  );
};

export default Panel;
