import { FC, MouseEvent } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './NavigationLink.scss';

export interface NavigationLinkProps {
  to: string;
  linkText: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  linkText,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'nav__link',
        { active: isActive },
      )}
      onClick={onClick}
    >
      {linkText}
    </NavLink>
  );
};
