import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import { GoogleGenAI } from "@google/genai";
import { RefreshCw, Download } from 'lucide-react';

const CACHE_KEY = "spongebob_avatar_v1";

const Hero: React.FC = () => {
  // Initialize state from localStorage if available
  const [heroImage, setHeroImage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(CACHE_KEY) || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
  });
  
  const [isGenerating, setIsGenerating] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem(CACHE_KEY);
    }
    return true;
  });

  const generatePortrait = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A high-quality 3D render of SpongeBob SquarePants wearing a professional business suit and tie, round glasses, looking like a smart data scientist, confident smile, clean bright minimalist office background, soft cinematic lighting, 8k resolution',
            },
          ],
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          setHeroImage(imageUrl);
          try {
            localStorage.setItem(CACHE_KEY, imageUrl);
          } catch (e) {
            console.warn("Failed to cache image to localStorage", e);
          }
          break;
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (isGenerating && !localStorage.getItem(CACHE_KEY)) {
      generatePortrait();
    }
  }, []);

  const handleRegenerate = (e: React.MouseEvent) => {
    e.preventDefault();
    generatePortrait();
  };

  const headlines = [
    "浙江大学结构工程硕士",
    "慕尼黑工业大学交换生",
    "数据分析与风险策略专家",
    "Python & 机器学习开发者"
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 md:pr-12">
        <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">
          RESUME
        </h3>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
          杨晨 <br />
          <span className="text-3xl md:text-5xl text-slate-400 font-light mt-2 block">Yang Chen</span>
          <span className="block mt-4 min-h-[1.2em] text-2xl md:text-3xl text-blue-600">
            <Typewriter phrases={headlines} className="block" typingSpeed={100} />
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mt-6">
          作为浙江大学的优秀研究生，我拥有扎实的数理基础与工程背景。
          在<b>快手</b>与<b>DolphinDB</b>的实习经历，让我精通于将数据洞察转化为商业价值。
          我热衷于探索机器学习在非传统领域的应用，是一个在严谨逻辑与创新思维之间寻找平衡的终身学习者。
        </p>

        <div className="pt-6 flex gap-4">
          <a href="#experience" className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200">
            浏览我的经历
          </a>
          <button className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-slate-400 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            下载简历 PDF
          </button>
        </div>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-blue-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-200">
          <img 
            src={heroImage} 
            alt="杨晨 Yang Chen" 
            className={`w-full h-full object-cover transform transition-all duration-1000 ${isGenerating ? 'blur-sm grayscale scale-105' : 'scale-100 group-hover:scale-105'}`}
          />
          
          {isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/30 backdrop-blur-[2px] z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-slate-200 border-t-blue-500 mb-3"></div>
              <span className="text-xs font-bold tracking-widest text-slate-800 uppercase bg-white/80 px-2 py-1 rounded-full">Generating...</span>
            </div>
          )}

          {!isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
               <button 
                onClick={handleRegenerate}
                className="bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
                title="重新生成照片"
               >
                 <RefreshCw className="w-5 h-5" />
               </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;