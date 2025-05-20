
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const DisclaimerSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>{t('disclaimer.not.therapy')}</strong> {
              language === 'sv' 
                ? 'Festkonversation är utformad för underhållning och tillfällig insikt, inte för terapeutiska ändamål. För stöd med mental hälsa, kontakta en licensierad yrkesverksam.'
                : 'Party Conversation is designed for entertainment and casual insight, not for therapeutic purposes. For mental health support, please consult a licensed professional.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
