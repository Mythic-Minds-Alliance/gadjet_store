import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="NotFoundSection">
    <h1> 404 Page Not Found</h1>

    <NavLink
      to="/"
    >
      Home
    </NavLink>

    <div>
      <img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" alt="" />
    </div>
  </div>
);
