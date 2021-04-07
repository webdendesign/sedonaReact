import React from 'react';
import Navigation from '../navigation/navigation.jsx';

const Header = () => {
  return (
    <header className="main-header">
      <a className="logo">
        <img src="img/logo.png" width="138" height="70" alt="Логотип города Седона" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
