'use client';

import { useAudio } from "@/hooks/use-audio";

const steps = [
  {
    year: "2014",
    title: "Especialização AutoCAD (SENAC)",
    description: "Início da jornada técnica. Contratação imediata por escritório de engenharia devido à excelência nos projetos.",
    color: "from-red-500 to-red-700",
    glow: "shadow-red-500/20"
  },
  {
    year: "2015 - 2018",
    title: "Início da Graduação",
    description: "Foco total em fundamentos, cálculos estruturais e física aplicada na UNINOVE.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20"
  },
  {
    year: "2019 - 2024",
    title: "Gestão Autônoma & Mercado Livre",
    description: "Desenvolvimento de competências críticas de logística, gestão financeira e autogestão de alto nível.",
    color: "from-green-500 to-green-700",
    glow: "shadow-green-500/20"
  },
  {
    year: "2025",
    title: "Retomada UNINOVE",
    description: "Retorno aos estudos com foco em BIM (Revit) e inovação no setor da construção civil.",
    color: "from-primary to-blue-400",
    glow: "shadow-primary/20"
  },
  {
    year: "2026",
    title: "Graduação Completa",
    description: "Formação oficial em Engenharia Civil e ingresso pleno como engenheiro no mercado.",
    color: "from-yellow-400 to-yellow-600",
    glow: "shadow-yellow-500/20"
  }
];

export default function TimelineSection() {
  const { playSound } = useAudio();

  return (
    <section id="timeline" className="py-40 relative overflow-hidden bg-black/20">
      {/* Scan Line Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
            Progressão Estrutural
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic">Evolução</h2>
          <div className="h-3 w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-primary to-transparent animate-scan"></div>
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                onMouseEnter={() => playSound('hover')}
              >
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] group perspective-1000`}>
                  <div className={`glass-card p-10 rounded-[3rem] border-white/5 transition-all duration-700 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:translate-y-[-15px] shadow-2xl relative ${step.glow}`}>
                    {/* Corner Indicators */}
                    <div className="absolute top-8 right-8 text-[10px] font-mono text-primary/30 group-hover:text-primary transition-colors">
                      STP_{index + 1}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <span className={`px-6 py-2 rounded-full text-xs font-black text-white bg-gradient-to-r ${step.color} shadow-xl tracking-tighter border border-white/10`}>
                        {step.year}
                      </span>
                      <div className="h-px flex-1 bg-white/10 group-hover:bg-primary/30 transition-colors"></div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors uppercase italic">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed text-lg font-medium">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 h-8 w-8 md:h-12 md:w-12 rounded-2xl bg-[#121212] border-4 border-primary md:-translate-x-1/2 z-10 flex items-center justify-center transition-all duration-700 group-hover:rotate-45 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  <div className="h-2 w-2 md:h-4 md:w-4 rounded-full bg-primary animate-pulse"></div>
                  <div className="absolute inset-0 rounded-2xl border border-primary animate-ping opacity-20"></div>
                </div>

                {/* Background Year label */}
                <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left pr-20' : 'text-right pl-20'}`}>
                  <span className="text-9xl font-black text-white/[0.02] select-none transition-all duration-1000 group-hover:text-primary/5 italic">
                    {step.year.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
