//------------------------------------------------------------------------------
// Imports

import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import '../css/Header.css';

//------------------------------------------------------------------------------
// Default export

const Header = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.body.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <header id="header">
      <div className="app-name">Explorer demo</div>
      <div className="theme-toggle">
        <FontAwesomeIcon
          icon={dark ? faMoon : faSun}
          className="icon"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

//------------------------------------------------------------------------------

export default Header;
