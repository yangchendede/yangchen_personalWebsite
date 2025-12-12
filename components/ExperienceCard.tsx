import React from 'react';
import { ExperienceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  item: ExperienceItem;
  onClick: (item: ExperienceItem) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, onClick }) => {
  return (
    <div 
      onClick={() => onClick(item)}
      className="group relative flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[420px] cursor-pointer bg-white ring-1 ring-slate-100"
    >
      {/* Top Color Section */}
      <div className={`${item.bgColor} h-[45%] flex items-center justify-center p-8 relative overflow-hidden transition-all duration-500 group-hover:h-[50%]`}>
        {/* Abstract background shape */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-black opacity-5 rounded-full blur-xl"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <img 
            src={item.logo} 
            alt={`${item.company} Logo`}
            className={`h-16 md:h-20 w-auto object-contain drop-shadow-md transform group-hover:scale-110 transition-transform duration-500 ${item.logoClassName || ''}`}
          />
          <div className={`mt-4 font-semibold text-lg ${item.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 absolute bottom-4`}>
            点击查看详情
          </div>
        </div>

        {/* Floating Date Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
          {item.date}
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex-1 p-8 flex flex-col relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {item.company}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
        </div>
        
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
          {item.role}
        </h4>
        
        <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="px-2 py-1 text-slate-400 text-xs rounded-md font-medium">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;