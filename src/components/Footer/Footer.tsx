/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import FooterStyle from './Footer.module.scss';
import Logo from '../../images/Logo.png';
import ArrowUp from '../../images/Slider_button.png';
import { scrollToTop } from '../../utils/helpers';

export const Footer = () => (
  <footer className={FooterStyle.footerContainer}>
    <a href="/" className="footerLogoLink">
      <img
        src={Logo}
        alt="Logotype of company"
        className={FooterStyle.footerLogo}
      />
    </a>

    <div className={FooterStyle.footerLinks}>
      <a
        href="https://github.com/Mythic-Minds-Alliance"
        className={FooterStyle.footerLinkItem}
      >
        Github
      </a>
      <Link to="contacts" className={FooterStyle.footerLinkItem}>Contacts</Link>
      <Link to="rights" className={FooterStyle.footerLinkItem}>Rights</Link>
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
