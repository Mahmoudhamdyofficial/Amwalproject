// import React from 'react';
import './header.css';
import Logo from './../../assets/Logo.svg';
// import { CiGlobe } from "react-icons/ci";
import { useContext } from 'react';
import { LanguageContext } from '../../context/translationcontext';
import { NationalityContext } from '../../context/nationalityContext';


const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { nationality, setNationality } = useContext(NationalityContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  const changeNation = (nation) => {
    setNationality(nation);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Amwal Logo" />
      </div>

      <div className="navbar-options">
        <select className="navbar-select"
          value={nationality == 'iraq' ? 'iraq' : 'notiraq'}
          onChange={(e) => changeNation(e.target.value)}>
          <option disabled>Nationality</option>
          <option value="iraq" onSelect={() => changeNation("iraq")}>Applying For Iraqis</option>
          <option value="notiraq" onSelect={() => changeNation("notiraq")}>Applying For Non Iraqis</option>
        </select>

        <select className="navbar-select" id="lang1"
          value={language == 'ar' ? 'ar' : 'en'}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option label='English' value="en" onSelect={() => changeLanguage("en")}>English</option>
          <option value="ar" onSelect={() => changeLanguage("ar")}>Arabic</option>
        </select>
        <a target='_blank' href="https://amwalps.iq/" className="navbar-link">Go to Home </a>
        <a target='_blank' href="https://amwalps.iq/" className="navbar-link">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;