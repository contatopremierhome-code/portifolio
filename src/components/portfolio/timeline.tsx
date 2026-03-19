'use client';

const steps = [
  {
    year: "2014",
    title: "Especialização em AutoCAD (SENAC)",
    description: "Contratação imediata em escritório técnico devido ao alto desempenho acadêmico.",
    color: "from-red-500 to-red-700",
    glow: "shadow-red-500/20"
  },
  {
    year: "2015 - 2018",
    title: "Início da Graduação",
    description: "Formação sólida em fundamentos de engenharia, física aplicada e cálculos estruturais.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/20"
  },
  {
    year: "2019 - 2024",
    title: "Gestão Autônoma & E-commerce",
    description: "Desenvolvimento de competências críticas de autogestão, logística e planejamento estratégico.",
    color: "from-green-500 to-green-700",
    glow: "shadow-green-500/20"
  },
  {
    year: "2025",
    title: "Retomada UNINOVE",
    description: "Foco total em tecnologia BIM, inovação no setor da construção e gestão moderna de obras.",
    color: "from-primary to-blue-400",
    glow: "shadow-primary/20"
  },
  {
    year: "2026",
    title: "Formação em Engenharia Civil",
    description: "Conclusão da jornada acadêmica e ingresso pleno no mercado como engenheiro graduado.",
    color: "from-yellow-400 to-yellow-600",
    glow: "shadow-yellow-500/20"
  }
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">Trajetória Profissional</h2>
          <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-bold">A Evolução de um Especialista</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary via-blue-500 to-transparent animate-scan-line"></div>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] group perspective-1000`}>
                  <div className={`glass-card p-8 rounded-[2rem] border-white/5 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:translate-y-[-10px] shadow-2xl ${step.glow}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-black text-white bg-gradient-to-r ${step.color} shadow-lg tracking-tighter`}>
                        {step.year}
                      </span>
                      <div className="h-px flex-1 bg-white/10 group-hover:bg-primary/30 transition-colors"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>

                {/* Center Node with Pulse Effect */}
                <div className="absolute left-4 md:left-1/2 h-6 w-6 md:h-8 md:w-8 rounded-full bg-[#121212] border-4 border-primary md:-translate-x-1/2 z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-125">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary animate-pulse"></div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20"></div>
                </div>

                {/* Year label for desktop (side opposite to card) */}
                <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left pr-12' : 'text-right pl-12'}`}>
                  <span className="text-6xl font-black text-white/5 select-none transition-all duration-700 group-hover:text-primary/10">
                    {step.year.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan-line {
          animation: scan-line 4s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
