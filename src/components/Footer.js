import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy" className="footer-link">{t('privacy')}</Link>
        <span className="footer-separator">|</span>
        <Link to="/impressum" className="footer-link">{t('impressum')}</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Cesar. Alle Rechte vorbehalten.</p>
    </footer>
  );
};

export default Footer;