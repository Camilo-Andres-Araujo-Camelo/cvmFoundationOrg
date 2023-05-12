import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: 'url(/img/footer.png)' }}
    >
      <div className="socialNetworks">
        <img src="/img/facebook.png" alt="facebook" />
        <img src="/img/twitter.png" alt="twitter" />
        <img src="/img/instagram.png" alt="instagram" />
      </div>
      <div>
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div>
        <span>Desarrollado por Camilo Araujo Dev</span>
      </div>
    </footer>
  );
};

export default Footer;
