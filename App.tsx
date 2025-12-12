import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation - Minimal */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-10 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase hover:text-slate-900 transition-colors cursor-default">
            Yang Chen | Resume
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
      </main>

      <Footer />
    </div>
  );
};

export default App;