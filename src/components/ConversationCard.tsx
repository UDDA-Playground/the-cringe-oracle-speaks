
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ConversationCardProps {
  title: string;
  description: string;
  gradient: string;
  path: string;
  illustration?: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ 
  title, 
  description, 
  gradient, 
  path,
  illustration
}) => {
  return (
    <div className={`card-hover rounded-2xl overflow-hidden ${gradient} p-0.5 transform transition-all duration-300`}>
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
        {/* Fun decorative element */}
        <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 z-0"></div>
        <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-gradient-to-tl from-white/10 to-white/5 z-0"></div>
        
        <div className="flex items-center gap-4 mb-4">
          {illustration && (
            <div className="w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
              <img src={illustration} alt={title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-cabinet font-bold mb-3 relative z-10">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow relative z-10">{description}</p>
        <Link 
          to={path}
          className="flex items-center font-bold text-udda-green hover:text-udda-coral hover:translate-x-1 transition-all duration-200 group relative z-10"
        >
          Try it now 
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ConversationCard;
