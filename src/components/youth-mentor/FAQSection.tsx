
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              {t('faq.title')}
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">{t('faq.therapy')}</h3>
              <p className="text-gray-600">
                {t('faq.therapy.answer')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">{t('faq.age')}</h3>
              <p className="text-gray-600">
                {t('faq.age.answer')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">{t('faq.swedish')}</h3>
              <p className="text-gray-600">
                {t('faq.swedish.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">{t('faq.privacy')}</h3>
              <p className="text-gray-600">
                {t('faq.privacy.answer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
