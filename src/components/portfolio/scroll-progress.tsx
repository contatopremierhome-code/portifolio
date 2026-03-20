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
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center pointer-events-none hidden md:flex">
      {/* Rótulo Vertical - Posicionado com margem inferior para evitar sobreposição */}
      <div className="mb-24 rotate-[-90deg] whitespace-nowrap">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] drop-shadow-lg">
          Status da Obra
        </span>
      </div>

      {/* Barra Vertical de Progresso */}
      <div className="h-64 w-2 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl relative">
        <div 
          className="absolute bottom-0 left-0 w-full bg-primary transition-all duration-150 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Porcentagem de Progresso */}
      <div className="mt-6">
        <span className="text-[12px] font-black text-primary tabular-nums drop-shadow-lg">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
