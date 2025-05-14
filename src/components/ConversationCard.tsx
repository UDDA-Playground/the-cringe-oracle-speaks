
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ConversationCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  path: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  gradient, 
  path 
}) => {
  return (
    <div className={`card-hover rounded-2xl overflow-hidden ${gradient} p-0.5`}>
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4`}>
          <span className="text-white text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-cabinet font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link 
          to={path}
          className="flex items-center font-bold text-udda-green hover:underline group"
        >
          Try it now 
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ConversationCard;
