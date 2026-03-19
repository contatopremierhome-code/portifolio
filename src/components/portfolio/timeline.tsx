'use client';

const steps = [
  {
    year: "2014",
    title: "Especialização em AutoCAD (SENAC)",
    description: "Contratação imediata em escritório técnico devido ao alto desempenho acadêmico.",
    color: "from-red-500 to-red-700"
  },
  {
    year: "2015 - 2018",
    title: "Início da Graduação",
    description: "Formação em fundamentos, física e cálculos estruturais avançados.",
    color: "from-blue-500 to-blue-700"
  },
  {
    year: "2019 - 2024",
    title: "Gestão Autônoma & E-commerce",
    description: "Desenvolvimento de competências de autogestão, logística e planejamento financeiro.",
    color: "from-green-500 to-green-700"
  },
  {
    year: "2025",
    title: "Retomada UNINOVE",
    description: "Foco total em tecnologia, inovação no setor da construção e gestão de obras.",
    color: "from-primary to-blue-400"
  },
  {
    year: "2026",
    title: "Formação em Engenharia Civil",
    description: "Conclusão da jornada acadêmica e ingresso pleno no mercado de engenharia.",
    color: "from-yellow-400 to-yellow-600"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-32 bg-black/20">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase">Linha do Tempo</h2>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm font-bold">Evolução Profissional</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-[45%] group">
                  <div className="glass-card p-8 rounded-3xl border-white/5 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white mb-4 bg-gradient-to-r ${step.color} shadow-lg`}>
                      {step.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#121212] md:-translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-150"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
