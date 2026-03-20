'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial check

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-[60] flex flex-col items-end gap-2 w-40 md:w-56 pointer-events-none">
      <div className="flex justify-between w-full px-1">
        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] drop-shadow-md">
          Status da Obra
        </span>
        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] drop-shadow-md">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
