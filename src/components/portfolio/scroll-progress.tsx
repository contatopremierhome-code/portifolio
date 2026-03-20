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
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] flex flex-row items-center gap-2 pointer-events-none hidden md:flex">
      {/* Rótulo Vertical à Esquerda */}
      <div className="w-10 flex justify-center">
        <div className="rotate-[-90deg] whitespace-nowrap">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] drop-shadow-lg opacity-80">
            Status da Obra
          </span>
        </div>
      </div>

      {/* Container da Barra e Porcentagem */}
      <div className="flex flex-col items-center gap-6">
        {/* Barra Vertical de Progresso */}
        <div className="h-72 w-2.5 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl relative">
          <div 
            className="absolute bottom-0 left-0 w-full bg-primary transition-all duration-150 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Porcentagem de Progresso */}
        <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
          <span className="text-[14px] font-black text-primary tabular-nums drop-shadow-lg">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
