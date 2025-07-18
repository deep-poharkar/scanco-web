import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
  highlighted?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, tags, highlighted = false }) => {
  return (
    <div className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] ${
      highlighted 
        ? 'bg-red-500/5 border-red-400/20 shadow-lg shadow-red-500/10' 
        : 'bg-gray-900/30 border-gray-700/40 hover:border-gray-600/50 hover:bg-gray-900/40'
    }`}>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-sm">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-xs rounded-lg border ${
                highlighted
                  ? 'bg-red-500/10 border-red-400/20 text-red-300'
                  : 'bg-gray-800/50 border-gray-600/40 text-gray-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;