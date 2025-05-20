
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          {language === 'sv' ? 'Vad gör Youth Mentor speciell' : 'What makes Youth Mentor special'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">🧠</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">
              {language === 'sv' ? 'Evidensbaserad' : 'Evidence-Based'}
            </h3>
            <p className="text-gray-600">
              {language === 'sv' 
                ? 'Utformad med hjälp av validerade psykologiska ramverk som Self-Determination Theory och Kognitiv Beteendeterapi.'
                : 'Designed using validated psychological frameworks like Self-Determination Theory and Cognitive Behavioral Therapy.'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">🔒</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">
              {language === 'sv' ? 'Privat & Säker' : 'Private & Safe'}
            </h3>
            <p className="text-gray-600">
              {language === 'sv' 
                ? 'Helt konfidentiella konversationer med integritetsskydd och åldersanpassade innehållsriktlinjer.'
                : 'Completely confidential conversations with privacy safeguards and age-appropriate content guidelines.'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">💬</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">
              {language === 'sv' ? 'Relaterbar & Engagerande' : 'Relatable & Engaging'}
            </h3>
            <p className="text-gray-600">
              {language === 'sv' 
                ? 'Kommunicerar i en vänlig, relaterbar ton med lämpligt språk för unga, vilket gör vägledning lättillgänglig.'
                : 'Communicates in a friendly, relatable tone with appropriate language for young people, making guidance feel accessible.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
