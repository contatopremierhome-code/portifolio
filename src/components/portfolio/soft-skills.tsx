'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, BookOpen, ClipboardList, Zap } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";

const softSkills = [
  {
    name: "Comprometimento",
    description: "Foco em realizar as tarefas com dedicação e responsabilidade no dia a dia.",
    icon: <CheckCircle className="h-10 w-10" />,
  },
  {
    name: "Vontade de Aprender",
    description: "Aberto a novos conhecimentos, ferramentas e pronto para aprender com a equipe.",
    icon: <BookOpen className="h-10 w-10" />,
  },
  {
    name: "Trabalho em Equipe",
    description: "Facilidade em colaborar e manter um bom relacionamento com os colegas.",
    icon: <Users className="h-10 w-10" />,
  },
  {
    name: "Organização",
    description: "Cuidado com a organização das atividades e pontualidade com prazos.",
    icon: <ClipboardList className="h-10 w-10" />,
  },
];

export default function SoftSkillsSection() {
  const { playSound } = useAudio();

  return (
    <section id="soft-skills" className="py-20 md:py-40 relative bg-black/60 overflow-hidden">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-16 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
            Diferenciais
          </div>
          <h2 className="text-4xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic leading-none">SOFT SKILLS</h2>
          <div className="h-2 md:h-3 w-24 md:w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="glass-card group hover:border-primary/40 transition-all duration-700 hover:-translate-y-4 border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden"
              onMouseEnter={() => playSound('hover')}
            >
              <CardContent className="p-10 md:p-12 flex flex-col items-center text-center gap-6 md:gap-8 relative">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:text-primary group-hover:opacity-10 transition-all duration-700">
                  <Zap size={100} />
                </div>
                
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-2xl transform group-hover:rotate-12">
                  {skill.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase italic tracking-tighter">{skill.name}</h3>
                  <p className="text-white leading-relaxed text-base font-bold drop-shadow-md">
                    {skill.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}