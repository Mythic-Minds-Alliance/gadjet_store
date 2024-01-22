import './Footer.scss';
import Logo from '../../images/Logo.png';
import ArrowUp from '../../images/Slider_button.png';

export const Footer = () => (
  <footer className="footerContainer">
    <a href="/" className="footerLogoLink">
      <img
        src={Logo}
        alt="Logotype of company"
        className="footerLogo"
      />
    </a>

    <div className="footerLinks">
      <a href="/" className="footerLinkItem">Github</a>
      <a href="/" className="footerLinkItem">Contacts</a>
      <a href="/" className="footerLinkItem">Rights</a>
    </div>

    <div className="footerGoUp">
      <p className="goUpText">Back to top</p>
      <a href="/" className="goUpLink">
        <img
          src={ArrowUp}
          alt="Arrow Up"
          className="goUpBtn"
        />
      </a>
    </div>
  </footer>
);
