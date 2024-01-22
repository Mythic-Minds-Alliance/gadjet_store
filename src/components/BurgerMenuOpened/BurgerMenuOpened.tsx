import { Link, NavLink } from 'react-router-dom';

export const BurgerMenuOpened = () => (
  <div className="burger">
    <div className="">
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/phones">
          Phones
        </NavLink>
        <NavLink to="/tablets">
          Tables
        </NavLink>
        <NavLink to="/accessories">
          Accessories
        </NavLink>
      </nav>
    </div>

    <div className="">
      <Link
        to="/orders"
      >
        Logo
      </Link>
      <Link
        to="/orders"
      >
        Logo
      </Link>
    </div>
  </div>
);
