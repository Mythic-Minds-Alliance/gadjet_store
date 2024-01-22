import './Footer.scss';

export const Footer = () => (
  <footer className="footerContainer">
    <a href="/" className="footerLogoLink">
      <img src="img/Logo.png" alt="Logotype of company" />
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
          src="img/Slider_button.png"
          alt="Arrow Up"
          className="goUpBtn"
        />
      </a>
    </div>
  </footer>
);
