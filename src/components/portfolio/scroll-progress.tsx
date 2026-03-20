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
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-6 pointer-events-none hidden md:flex">
      {/* Rótulo Vertical */}
      <div className="rotate-[-90deg] origin-center whitespace-nowrap">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] drop-shadow-md">
          Status da Obra
        </span>
      </div>

      {/* Barra Vertical */}
      <div className="h-64 w-1.5 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl relative">
        <div 
          className="absolute bottom-0 left-0 w-full bg-primary transition-all duration-150 ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Porcentagem */}
      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] drop-shadow-md">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
