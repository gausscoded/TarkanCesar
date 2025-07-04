import React from "react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
    const { t } = useTranslation();

    return (
        <div className="privacy-page">
            <h1>{t('privacyPage.title')}</h1>
            <h3>{t('privacyPage.subtitle')}</h3>
            <p>{t('privacyPage.description')}</p>
        </div>
    );
};

export default Privacy;