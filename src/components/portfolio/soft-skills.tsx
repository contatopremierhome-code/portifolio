'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Workflow, ShieldCheck, MessagesSquare, CalendarClock, Zap } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";

const softSkills = [
  {
    name: "Liderança Própria",
    description: "Capacidade de conduzir o próprio fluxo de trabalho, priorizando tarefas com independência e eficácia técnica.",
    icon: <Workflow className="h-10 w-10" />,
  },
  {
    name: "Resiliência",
    description: "Adaptação estratégica a desafios complexos, mantendo a produtividade e o foco sob alta pressão.",
    icon: <ShieldCheck className="h-10 w-10" />,
  },
  {
    name: "Comunicação Assertiva",
    description: "Experiência sólida em negociação e atendimento, transmitindo informações de forma clara e profissional.",
    icon: <MessagesSquare className="h-10 w-10" />,
  },
  {
    name: "Disciplina com Prazos",
    description: "Foco absoluto no cumprimento rigoroso de cronogramas e marcos de entrega em todos os projetos.",
    icon: <CalendarClock className="h-10 w-10" />,
  },
];

export default function SoftSkillsSection() {
  const { playSound } = useAudio();

  return (
    <section id="soft-skills" className="py-40 relative bg-black/40 overflow-hidden">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-accent/20">
            Diferenciais Interpessoais
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic">SOFT SKILLS</h2>
          <div className="h-3 w-40 bg-accent mx-auto rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="glass-card group hover:border-accent/50 transition-all duration-700 hover:-translate-y-4 border-white/5 rounded-[3rem] overflow-hidden"
              onMouseEnter={() => playSound('hover')}
            >
              <CardContent className="p-12 flex flex-col items-center text-center gap-8 relative">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:text-accent group-hover:opacity-10 transition-all duration-700">
                  <Zap size={100} />
                </div>
                
                <div className="h-24 w-24 rounded-3xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-2xl shadow-accent/5 transform group-hover:rotate-12">
                  {skill.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors uppercase italic tracking-tighter">{skill.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base font-medium">
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
