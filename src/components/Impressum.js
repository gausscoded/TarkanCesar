import React from "react";
import { useTranslation } from "react-i18next";

const Impressum = () => {
    const { t } = useTranslation();
    
    return (
        <div className="impressum">
            <h1>{t('impressumPage.title')}</h1>
            <h2>{t('impressumPage.subtitle')}</h2>
            <p>{t('impressumPage.description')}</p>
            <address>
                <p>{t('impressumPage.address.street')}</p>
                <p>{t('impressumPage.address.city')}</p>
                <p>{t('impressumPage.address.phone')}</p>
                <p>{t('impressumPage.address.email')}</p>
            </address>
        </div>
    );
    }
export default Impressum;