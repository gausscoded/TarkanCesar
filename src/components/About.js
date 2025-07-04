import React from "react";
import "./About.css"; // Assuming you have a CSS file for styling
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
  return (
     <div className="about-page">
      <h1>{t('aboutPage.title')}</h1>
      <h3>{t('aboutPage.subtitle')}</h3>
    <div className="about-description-box">
      <p>{t('aboutPage.description')}</p>
    </div>
    </div>
  );
};

export default About;
