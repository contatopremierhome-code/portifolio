'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Ruler, HardHat, Building2 } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";

const buildingSteps = [
  {
    title: "Fundação Comercial",
    desc: "Início na Santa Efigênia: Aprendizado de resiliência, negociação e agilidade em ambiente de alta pressão.",
    icon: <Ruler className="h-8 w-8" />,
    year: "2014"
  },
  {
    title: "Estrutura Projetual",
    desc: "Domínio de AutoCAD e entrada em escritório técnico. Onde a teoria encontrou a prática pela primeira vez.",
    icon: <Hammer className="h-8 w-8" />,
    year: "2015"
  },
  {
    title: "Gestão Logística",
    desc: "Experiência autônoma no Mercado Livre: Gestão de fluxos, estoques e rigor absoluto com prazos de entrega.",
    icon: <Building2 className="h-8 w-8" />,
    year: "2019-2024"
  },
  {
    title: "Acabamento BIM",
    desc: "Retomada acadêmica focada em Revit e MS-Project. Preparação final para o mercado de gestão de obras.",
    icon: <HardHat className="h-8 w-8" />,
    year: "2025"
  }
];

export default function BuildingAnimation() {
  const { playSound } = useAudio();

  return (
    <section className="py-40 relative blueprint-grid overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
            Canteiro de Obras Digital
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic leading-none">CONSTRUINDO</h2>
          <div className="h-3 w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Building Simulation */}
          <div className="relative flex flex-col-reverse items-center gap-4 py-20 reveal">
            {/* Crane Graphic - Simulated with borders */}
            <div className="absolute -top-40 right-0 w-full h-full pointer-events-none opacity-10 animate-float">
              <div className="w-2 h-[150vh] bg-primary/40 absolute left-1/2"></div>
              <div className="h-2 w-full bg-primary/40 absolute top-20"></div>
            </div>

            {buildingSteps.map((step, index) => (
              <div 
                key={index} 
                className="w-full max-w-[320px] h-24 glass-card border-2 border-primary/20 rounded-3xl relative flex items-center justify-center group hover:bg-primary/20 hover:border-primary hover:-translate-y-2 transition-all duration-500 reveal"
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => playSound('hover')}
              >
                <div className="absolute -left-20 text-primary font-black text-3xl opacity-10 group-hover:opacity-100 transition-opacity italic">
                  #{index + 1}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary transform group-hover:scale-125 transition-transform duration-500">{step.icon}</div>
                  <span className="text-xs font-black text-white uppercase tracking-[0.2em]">{step.title}</span>
                </div>
                {/* Structural Ribs */}
                <div className="absolute top-0 left-10 w-px h-full bg-white/5 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute top-0 right-10 w-px h-full bg-white/5 group-hover:bg-primary/20 transition-colors"></div>
              </div>
            ))}

            {/* Foundation Base */}
            <div className="w-full max-w-[450px] h-16 bg-white/10 border-4 border-white/5 rounded-t-[3rem] reveal shadow-[0_-20px_50px_rgba(255,255,255,0.05)]"></div>
          </div>

          {/* Details Side */}
          <div className="space-y-10">
            {buildingSteps.map((step, index) => (
              <Card 
                key={index} 
                className="glass-card border-l-8 border-l-primary reveal rounded-[2.5rem] group hover:bg-primary/5 transition-all duration-500" 
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => playSound('hover')}
              >
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase italic group-hover:text-primary transition-colors">{step.title}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-4 py-1.5 rounded-full font-black tracking-widest border border-primary/30">{step.year}</span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
