'use client';

import Image from 'next/image';
import { MapPin, GraduationCap, User, Milestone, HardHat, Ruler } from 'lucide-react';
import { useAudio } from '@/hooks/use-audio';

export default function HeroSection() {
  const { playSound } = useAudio();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden blueprint-grid">
      {/* Elementos de Decoração Industrial */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/5 rotate-12 animate-float">
          <Ruler size={300} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 right-10 text-primary/5 -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
          <HardHat size={300} strokeWidth={0.5} />
        </div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
        
        {/* Foto de Perfil com Efeito de "Construção" */}
        <div className="relative group perspective-1000 animate-construct">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-56 w-52 md:h-72 md:w-64 rounded-3xl border-2 border-white/10 p-1 bg-card/50 backdrop-blur-md overflow-hidden transform group-hover:rotate-y-6 transition-transform duration-500 shadow-2xl">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="https://i.imgur.com/J5gtnyg.jpg"
                alt="Jeovane de Oliveira"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Overlay de Scan */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-1/2 w-full animate-scan opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          {/* Tag de Status */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-xl border border-white/20 whitespace-nowrap">
            Disponível para Estágio
          </div>
        </div>

        <div className="space-y-6 animate-construct" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none uppercase">
            JEOVANE <br/> 
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              DE OLIVEIRA
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 rounded-full blur-sm"></span>
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light tracking-widest uppercase">
            Estudante de Engenharia Civil
          </p>

          <div className="max-w-2xl mx-auto p-8 rounded-[2.5rem] glass-card border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Perfil Profissional</h2>
            <p className="text-white text-xl font-bold leading-tight italic">
              "Dedicado, Analítico e Orientado a Resultados."
            </p>
            <p className="text-white/80 mt-4 leading-relaxed text-lg">
              Mais do que um estudante de Engenharia Civil, sou um profissional formado pela prática e pela superação. Minha trajetória é pautada pelo compromisso com a excelência técnica e pela capacidade de autogestão.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <div 
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => playSound('click')}
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-white/90">Campos Elíseos - São Paulo SP</span>
            </div>
            <div 
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => playSound('click')}
            >
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-white/90">UNINOVE</span>
            </div>
            <div 
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => playSound('click')}
            >
              <User className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-white/90">29 Anos</span>
            </div>
            <div 
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => playSound('click')}
            >
              <Milestone className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-white/90">9° Semestre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
