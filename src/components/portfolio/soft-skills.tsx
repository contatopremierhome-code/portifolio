'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Workflow, ShieldCheck, MessagesSquare, CalendarClock } from "lucide-react";

const softSkills = [
  {
    name: "Autogestão",
    description: "Capacidade de liderar o próprio fluxo de trabalho, priorizando tarefas com autonomia e eficácia.",
    icon: <Workflow className="h-8 w-8" />,
  },
  {
    name: "Resiliência",
    description: "Adaptação estratégica a desafios complexos e mudanças de cenário, mantendo a produtividade sob pressão.",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
  {
    name: "Comunicação Assertiva",
    description: "Experiência sólida em negociação e atendimento, transmitindo informações técnicas de forma clara e profissional.",
    icon: <MessagesSquare className="h-8 w-8" />,
  },
  {
    name: "Disciplina com Prazos",
    description: "Foco absoluto no cumprimento rigoroso de cronogramas e marcos de entrega em todos os projetos.",
    icon: <CalendarClock className="h-8 w-8" />,
  },
];

export default function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="py-32 bg-black/40">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">Diferenciais Interpessoais</h2>
          <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-bold">Soft Skills e Postura Profissional</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card key={index} className="glass-card group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 border-white/5">
              <CardContent className="p-10 flex flex-col items-center text-center gap-6">
                <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                  {skill.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
