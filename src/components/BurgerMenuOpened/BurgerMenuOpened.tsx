import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './BurgerMenuOpened.modules.scss';
import favoriteImg from '../../images/Favourites.png';
import ordersLogo from '../../images/ShoppingBag.png';
import user from '../../icons/User.svg';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  cartCount: number,
  favoriteCount: number,
}

export const BurgerMenuOpened: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  cartCount,
  favoriteCount,
}) => {
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={classNames('burger', { burger_opened: isMenuOpen })}>
      <div className={classNames('burger__links')}>
        <nav className={classNames('burger__nav')}>
          <NavigationLink to="/" linkText="Home" onClick={handleMenuClose} />
          <NavigationLink
            to="/phones"
            linkText="Phones"
            onClick={handleMenuClose}
          />
          <NavigationLink
            to="/tablets"
            linkText="Tablets"
            onClick={handleMenuClose}
          />
          <NavigationLink
            to="/accessories"
            linkText="Accessories"
            onClick={handleMenuClose}
          />
        </nav>
      </div>

      <div className={classNames('burger__service')}>
        <Link
          to="/account"
          className={classNames(
            'service__button',
            'service__like',
            { 'service__button-active': isMenuOpen },
          )}
          onClick={handleMenuClose}
        >
          <div className={classNames('imageContainer')}>
            <img
              src={user}
              alt="user logo"
              className={classNames('like')}
            />

            <HeaderCounter productsCount={cartCount} />
          </div>
        </Link>

        <Link
          to="/favorites"
          className={classNames(
            'service__button',
            'service__like',
            { 'service__button-active': isMenuOpen },
          )}
          onClick={handleMenuClose}
        >
          <div className={classNames('imageContainer')}>
            <img
              src={favoriteImg}
              alt="like button"
              className={classNames('like')}
            />

            <HeaderCounter productsCount={cartCount} />
          </div>
        </Link>

        <Link
          to="/cart"
          className={classNames(
            'service__button',
            'service__orders',
            { 'service__button-active': isMenuOpen },
          )}
          onClick={handleMenuClose}
        >
          <div className={classNames('imageContainer')}>
            <img
              src={ordersLogo}
              alt="orders button"
              className={classNames('service_btn_img')}
            />

            <HeaderCounter productsCount={favoriteCount} />
          </div>
        </Link>
      </div>
    </div>
  );
};
