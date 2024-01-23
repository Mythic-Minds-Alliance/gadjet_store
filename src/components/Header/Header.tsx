/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../App';

import './Header.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { BurgerMenuOpened } from '../BurgerMenuOpened';
import logo from '../../images/Logo.png';
import favoriteImg from '../../images/Favourites.png';
import ordersLogo from '../../images/ShoppingBag.png';
import burgerMenu from '../../images/Menu.png';
import close from '../../images/Close.png';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    cart,
    favorites,
  } = useContext(DataContext);

  return (
    <header className="header">
      <div className="container">
        <div className="links">
          <NavLink
            to="/"
            className="logo-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Nice Gadgets logo"
              className="header__logo"
            />
          </NavLink>

          {!isMenuOpen && (
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
          )}
        </div>

        <div className="links">
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

            <div className={classNames('headerCounter')}>
              <HeaderCounter productsCount={favorites.length} />
            </div>
          </NavLink>

          <NavLink
            to="/cart"
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

            <div className={classNames('headerCounter')}>
              <HeaderCounter productsCount={cart.length} />
            </div>
          </NavLink>
        </div>

        <button
          type="button"
          className={classNames(
            'burger_btn',
            { 'burger_btn-active': isMenuOpen },
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? close : burgerMenu}
            alt={isMenuOpen ? 'close button' : 'menu button'}
            className={classNames('burger_btn_img')}
          />
        </button>
      </div>

      <BurgerMenuOpened
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cart={cart.length}
        favorites={favorites.length}
      />
    </header>
  );
};
