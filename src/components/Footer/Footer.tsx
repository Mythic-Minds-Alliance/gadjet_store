/* eslint-disable react/button-has-type */
import { Link, NavLink } from 'react-router-dom';
import FooterStyle from './Footer.module.scss';
import Logo from '../../icons/Logo.png';
import ArrowUp from '../../icons/Slider_button.png';
import { scrollToTop } from '../../utils/helpers';

export const Footer = () => (
  <footer className={FooterStyle.container}>
    <NavLink
      to="/"
      className={FooterStyle.logo}
      onClick={scrollToTop}
    >
      <img
        src={Logo}
        alt="Logotype of company"
        className={FooterStyle.logo__img}
      />
    </NavLink>

    <div className={FooterStyle.footerLinks}>
      <a
        href="https://github.com/Mythic-Minds-Alliance"
        className={FooterStyle.footerLinkItem}
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <Link
        to="contacts"
        className={FooterStyle.footerLinkItem}
        onClick={scrollToTop}
      >
        Contacts
      </Link>
      <Link
        to="rights"
        className={FooterStyle.footerLinkItem}
        onClick={scrollToTop}
      >
        Rights
      </Link>
    </div>

    <div className={FooterStyle.footerGoUp}>
      <p className={FooterStyle.goUpText}>Back to top</p>
      <button
        className={FooterStyle.goUpLink}
        onClick={scrollToTop}
      >
        <img
          src={ArrowUp}
          alt="Arrow Up"
          className={FooterStyle.goUpBtn}
        />
      </button>
    </div>
  </footer>
);
