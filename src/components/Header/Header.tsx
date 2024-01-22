import { NavLink } from 'react-router-dom';
import { NavigationLink } from '../NavigationLink/NavigationLink';

// import './Header.module.scss';
import logo from '../../img/logo.png';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="links">
        <NavLink to="/" onClick={() => { }}>
          <img
            src={logo}
            alt="Nice Gadgets logo"
            className="header__logo"
          />
        </NavLink>

        <nav className="nav">
          <NavigationLink
            to="/"
            linkText="Home"
            onClick={() => { }}
          />
          <NavigationLink
            to="/phones"
            linkText="Phones"
            onClick={() => { }}
          />
          <NavigationLink
            to="/tablets"
            linkText="Tablets"
            onClick={() => { }}
          />
          <NavigationLink
            to="/accessories"
            linkText="Accessories"
            onClick={() => { }}
          />
        </nav>
      </div>
    </div>
  </header>
);
