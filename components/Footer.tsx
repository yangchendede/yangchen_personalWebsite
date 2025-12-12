import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">LULU.</span>
          <p className="text-slate-500 text-sm mt-1">© 2024 Capybara Design Inc. Stay Chill.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Twitter</a>
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;