import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { NavigationLink } from '../NavigationLink/NavigationLink';

import logo from '../../img/logo.png';
import './Header.scss';
import favoriteImg from '../../img/Favourites.png';
import ordersLogo from '../../img/ShoppingBag.png';
import { BurgerMenuOpened } from '../BurgerMenuOpened';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="links">
          <NavLink to="/">
            <img
              src={logo}
              alt="Nice Gadgets logo"
              className="header__logo"
            />
          </NavLink>

          {!isMenuOpen && (
            <nav className={classNames('nav')}>
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
          )}

          <NavLink
            to="/orders"
            className={({ isActive }) => classNames(
              'service_btn',
              { active: isActive },
            )}
          >
            <img
              src={ordersLogo}
              alt="orders button"
              className="service_btn_img"
            />
          </NavLink>

          <NavLink
            to="/favourites"
            onClick={() => { }}
            className={({ isActive }) => classNames(
              'service_btn',
              { active: isActive },
            )}
          >
            <img
              src={favoriteImg}
              alt="like button"
              className="service_btn_img"
            />
          </NavLink>
        </div>
      </div>

      <BurgerMenuOpened isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
