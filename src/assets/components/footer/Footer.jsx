import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Plantas Aromáticas - Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;