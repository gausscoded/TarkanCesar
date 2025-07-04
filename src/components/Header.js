import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ContactF from './ContactF'; 

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [showContact, setShowContact] = useState(false);

  const switchLanguage = (lng) => i18n.changeLanguage(lng);

  // const handleNavClick = (href) => {
  //   if (href === '/') return;
  //   setShowContact(true);
  // };

  // const navLinksLeft = [
  //   { href: '/', label: t('home') },
  //   { href: '/contact', label: t('contact') },
  // ];
  const navLinksLeft = [
  { type: 'link', href: '/', label: t('home') },
  { type: 'popup', label: t('contact') },
  ];
  
  const languages = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
  ];

  return (
    <>
      <header className="header">
        <nav className="nav-menu nav-left">
          {/* {navLinksLeft.map(({ href, label }) => (
            <button key={href} onClick={() => handleNavClick(href)} className="button3 made-color">
              {label}
            </button>
          ))} */}
        {navLinksLeft.map(({ href, label, type }) =>
  type === 'link' ? (
    <Link key={href} to={href} className="button3 made-color">
      {label}
    </Link>
  ) : (
    <button key={label} onClick={() => setShowContact(true)} className="button3 made-color">
      {label}
    </button>
  )
)}
          
        </nav>

        <div className="logo-slogan">
          <a href="/" className="logo-link">
            <img src="/logo.png" alt="Logo" className="logo" />
          </a>
        </div>

        <nav className="nav-menu nav-right">
          <Link to="/career" className='made-color'>{t('career')}</Link>
            <Link to="/about" className='made-color'>{t('about')}</Link>


          <div className="lang-switch">
            <div className="lang-dropdown">
              <button className="lang-btn" aria-label="Switch Language">
                <FaGlobe size={16} />
                <span className="lang-label">
                  {languages.find(lang => lang.code === currentLang)?.label}
                </span>
              </button>

              <div className="lang-options">
                {languages.map(({ code, label }) => (
                  <button
                    key={code}
                    className={`lang-option${currentLang === code ? ' active' : ''}`}
                    onClick={() => switchLanguage(code)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {showContact && <ContactF onClose={() => setShowContact(false)} />}
    </>
  );
};

export default Header;
