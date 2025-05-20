
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const DisclaimerSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>{t('disclaimer.important')}</strong> {t('disclaimer.text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
