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
    <div className="fixed left-8 bottom-10 z-[60] flex flex-col gap-2 pointer-events-none hidden md:flex">
      {/* Rótulo Superior */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] drop-shadow-lg opacity-80">
          Status da Obra
        </span>
        <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/5">
          <span className="text-[12px] font-black text-primary tabular-nums drop-shadow-lg">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Barra Horizontal de Progresso */}
      <div className="w-48 h-2.5 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl relative">
        <div 
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
