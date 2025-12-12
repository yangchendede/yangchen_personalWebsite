import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  phrases, 
  typingSpeed = 150, 
  deletingSpeed = 100,
  pauseDuration = 2000,
  className = ""
}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
        
        // Finished typing phrase
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting
        setText((prev) => currentPhrase.substring(0, prev.length - 1));
        
        // Finished deleting
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, phrases, phraseIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`${className} inline-block`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x bg-300%">
        {text}
      </span>
      <span className="cursor-blink text-slate-800 ml-1">|</span>
    </span>
  );
};

export default Typewriter;