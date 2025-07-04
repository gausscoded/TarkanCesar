import React from 'react';
import { useTranslation } from 'react-i18next';
import './Career.css';

const Career = () => {
  const { t } = useTranslation();
  return (
    <div className="career-page">
      <div className="career-content">
        <h1>{t('careerPage.title')}</h1>
        <h3>{t('careerPage.subtitle')}</h3>
        <p>{t('careerPage.description')}</p>
      </div>
      <img src="/images/14.jpg" alt="Career" className="career-image" />
    </div>
  );
};

export default Career;