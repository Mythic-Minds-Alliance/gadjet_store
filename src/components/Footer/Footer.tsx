import FooterStyle from './Footer.module.scss';
import Logo from '../../images/Logo.png';
import ArrowUp from '../../images/Slider_button.png';

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
      <a href="/" className={FooterStyle.footerLinkItem}>Github</a>
      <a href="/" className={FooterStyle.footerLinkItem}>Contacts</a>
      <a href="/" className={FooterStyle.footerLinkItem}>Rights</a>
    </div>

    <div className={FooterStyle.footerGoUp}>
      <p className={FooterStyle.goUpText}>Back to top</p>
      <a href="/" className={FooterStyle.goUpLink}>
        <img
          src={ArrowUp}
          alt="Arrow Up"
          className={FooterStyle.goUpBtn}
        />
      </a>
    </div>
  </footer>
);
