import React from 'react';
import { useTranslation } from 'react-i18next';
import './Body.css';

const Body = () => {
  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <main>
      {/* <div className="language-switcher">
        <button onClick={() => changeLanguage('de')}>DE</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div> */}
    <div className='body-section'>
      <div className="body-container">
        <h1>{t('title')}</h1>
        <h3>{t('subtitle')}</h3>
        <p>{t('description')}</p>
        <address>
          {t('address.street')}<br />
          {t('address.city')}<br />
          {t('address.phone')}
        </address>
      </div>

      <div className="image-section">
        <img src="/images/Ellipse1.png" alt="" aria-hidden="true" className="corner-image" />
        <img src="/images/Ellipse2.png" alt="" aria-hidden="true" className="corner-image1" />
        <img src="/images/Ellipse3.png" alt="" aria-hidden="true" className="corner-image2" />
      </div>
      </div>
    </main>
  );
};

export default Body;
