import { NavLink, useNavigate } from "react-router-dom";


import './navigation.scss';


  const Navigation = () => {
  const navigate = useNavigate();



  return (
    <div className="navigation-body">
      <img
        className="brand_logo"
        src="./brand_logo.jpg"
        alt="Brand logo"
        onClick={() => navigate('/Unit')}
        />
      <nav className="navigation">
        <ul className="navigation-list">
          <label htmlFor="unit">
            <img id="unit" className="icon" src="./icon/navigation/unit.png" alt="Unit"/>
            <NavLink className="unit item" end to="/Unit">Unit</NavLink>
          </label>
          <label htmlFor="RNP">
            <img id="RNP" className="icon" src="./icon/navigation/RNP.png" alt="RNP"/>
            <NavLink className="RNP item" end to="/RNP">RNP</NavLink>
          </label>
          <label htmlFor="buying">
            <img id="buying" className="icon" src="./icon/navigation/buying.png" alt="Buying"/>
            <NavLink className="buying item" end to="/Buying">Buying</NavLink>
          </label>
          <label htmlFor="analytics">
            <img id="analytics" className="icon" src="./icon/navigation/analytics.png" alt="Analytics"/>
            <NavLink className="analytics item" end to="/Analytics">Analytics</NavLink>
          </label>
          <label htmlFor="partners">
            <img id="partners" className="icon" src="./icon/navigation/partners.png" alt="partners"/>
            <NavLink className="Partners item" end to="/Partners">Partners</NavLink>
          </label>
          <label htmlFor="settings">
            <img id="settings" className="icon" src="./icon/navigation/settings.png" alt="settings"/>
            <NavLink className="Settings item" end to="/Settings">Settings</NavLink>
          </label>
        </ul>
      </nav>
    </div>
            
  );
}
export default Navigation;