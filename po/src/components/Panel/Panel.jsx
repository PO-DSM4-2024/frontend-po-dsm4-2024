import './Panel.css';
import Banner from '../../assets/img/banner-logo.png';

const Panel = ({ pageName, section, color }) => {
  return (
    <div className="home_header" style={{ borderBottom: `10px solid ${color}` }}>
      <div className="home_header_text">
        <h1>{pageName}</h1>
        <p>{section}</p>
      </div>
      <img src={Banner} alt="" />
    </div>
  );
};

export default Panel;
