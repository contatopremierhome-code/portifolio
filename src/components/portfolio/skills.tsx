'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useAudio } from "@/hooks/use-audio";

const skills = [
  { 
    name: "AutoCAD (2D e 3D)", 
    level: "Avançado", 
    color: "#FF0000", 
    class: "glow-autocad",
    logo: "https://cdn.simpleicons.org/autodesk/FF0000",
    desc: "Projetos em 2D e 3D (Mobile e Desktop), plantas e detalhamento estrutural."
  },
  { 
    name: "Excel", 
    level: "Avançado", 
    color: "#217346", 
    class: "glow-excel",
    logo: "https://i.imgur.com/IiTdh12.png",
    desc: "Gestão de dados, fórmulas e cronogramas de trabalho."
  },
  { 
    name: "Revit (BIM)", 
    level: "Básico/Intermediário", 
    color: "#0696D7", 
    class: "glow-revit",
    logo: "https://cdn.simpleicons.org/autodeskrevit/0696D7",
    desc: "Iniciando estudos em modelagem da construção."
  },
  { 
    name: "MS-Project", 
    level: "Básico/Intermediário", 
    color: "#31752F", 
    class: "glow-msproject",
    logo: "https://i.imgur.com/jMT5oMV.png",
    desc: "Conhecimentos iniciais em cronogramas de obra."
  },
];

export default function SkillsSection() {
  const { playSound } = useAudio();

  return (
    <section id="skills" className="py-20 md:py-40 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-16 md:mb-32">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Conhecimentos Técnicos
          </div>
          <h2 className="text-4xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">HARD SKILLS</h2>
          <div className="h-2 md:h-3 w-24 md:w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          <p className="mt-8 text-white/60 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Uso de Ferramentas Técnicas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <Card 
              key={skill.name} 
              className={`glass-card transition-all duration-500 group cursor-pointer rounded-[2rem] md:rounded-[2.5rem] border-white/5 overflow-hidden ${skill.class}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <CardContent className="p-8 md:p-10 flex flex-col items-center justify-center gap-6 md:gap-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-20 w-20 md:h-24 md:w-24 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: skill.color }}></div>
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="h-16 w-16 md:h-20 md:w-20 object-contain relative z-10"
                  />
                </div>
                
                <div className="text-center relative z-10">
                  <h3 className="font-black text-white text-lg md:text-xl mb-2 tracking-tight uppercase">{skill.name}</h3>
                  <div className="inline-block px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg border border-white/10">
                    {skill.level}
                  </div>
                  <p className="text-sm text-white leading-relaxed max-w-[220px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-black drop-shadow-xl">
                    {skill.desc}
                  </p>
                </div>

                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-primary/50 transition-colors"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-primary/50 transition-colors"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
