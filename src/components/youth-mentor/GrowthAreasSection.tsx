
import React from 'react';
import { Heart, Brain, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const GrowthAreasSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              {t('growth.areas.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('growth.areas.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-blue flex items-center justify-center mb-4">
                <Brain className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">
                {language === 'sv' ? 'Psykiskt välbefinnande' : 'Mental Well-being'}
              </h3>
              <p className="text-gray-600">
                {language === 'sv' 
                  ? 'Lär dig strategier för att hantera stress, ångest och känslor med hjälp av evidensbaserade metoder som mindfulness och KBT-tekniker.'
                  : 'Learn strategies for managing stress, anxiety, and emotions using evidence-based approaches like mindfulness and CBT techniques.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-blue flex items-center justify-center mb-4">
                <Heart className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">
                {language === 'sv' ? 'Identitet & Syfte' : 'Identity & Purpose'}
              </h3>
              <p className="text-gray-600">
                {language === 'sv' 
                  ? 'Utforska vem du är, vad du värdesätter och vad som ger ditt liv mening genom vägledda självupptäcktskonversationer.'
                  : 'Explore who you are, what you value, and what gives your life meaning through guided self-discovery conversations.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-blue flex items-center justify-center mb-4">
                <Users className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">
                {language === 'sv' ? 'Relationer' : 'Relationships'}
              </h3>
              <p className="text-gray-600">
                {language === 'sv' 
                  ? 'Utveckla hälsosammare band med vänner, familj och jämnåriga genom att förbättra kommunikationsfärdigheter och sätta gränser.'
                  : 'Develop healthier connections with friends, family and peers by improving communication skills and setting boundaries.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAreasSection;
