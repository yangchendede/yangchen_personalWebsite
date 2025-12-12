import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Tag } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExperienceItem | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className={`${item.bgColor} p-8 text-white relative flex-shrink-0`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center p-2 shadow-lg">
              <img 
                src={item.logo} 
                alt={item.company} 
                className={`w-full h-full object-contain ${item.logoClassName}`} 
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{item.company}</h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-white/90 text-sm">
                <span className="font-semibold text-lg bg-white/20 px-3 py-0.5 rounded-md">{item.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-wrap gap-6 mb-8 text-sm text-slate-500 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{item.date}</span>
            </div>
            {item.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                主要工作与成就
              </h3>
              <ul className="space-y-3">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex gap-3 text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-500" />
                技术栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right flex-shrink-0">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
          >
            关闭详情
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;