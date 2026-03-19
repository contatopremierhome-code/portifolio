'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Ruler, HardHat, Building2 } from "lucide-react";

const buildingSteps = [
  {
    title: "Fundação Sólida",
    desc: "Vivência real na Santa Efigênia, desenvolvendo resiliência e dinamismo comercial.",
    icon: <Ruler className="h-6 w-6" />,
    year: "2014"
  },
  {
    title: "Estrutura Técnica",
    desc: "Domínio avançado de AutoCAD e entrada no setor de projetos técnicos.",
    icon: <Hammer className="h-6 w-6" />,
    year: "2015"
  },
  {
    title: "Vigamento de Gestão",
    desc: "Experiência autônoma no Mercado Livre: Logística, fluxos e gestão de prazos.",
    icon: <Building2 className="h-6 w-6" />,
    year: "2019-2024"
  },
  {
    title: "Laje de Especialização",
    desc: "Retomada focada em BIM (Revit), MS-Project e inovação tecnológica.",
    icon: <HardHat className="h-6 w-6" />,
    year: "2025"
  }
];

export default function BuildingAnimation() {
  return (
    <section className="py-32 relative blueprint-grid overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">Construindo o Futuro</h2>
          <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-bold">Cada etapa uma conquista estrutural</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Building Mockup */}
          <div className="relative flex flex-col-reverse items-center gap-2 py-10 reveal">
            {/* Crane Graphic (Simplified) */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10 animate-crane">
              <div className="w-1 h-full bg-primary/40 absolute left-1/2"></div>
              <div className="h-1 w-full bg-primary/40 absolute top-10"></div>
            </div>

            {buildingSteps.map((step, index) => (
              <div 
                key={index} 
                className="w-full max-w-[280px] h-20 bg-primary/5 border-2 border-primary/20 rounded-xl relative flex items-center justify-center group hover:bg-primary/20 hover:border-primary transition-all duration-500 reveal"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-16 text-primary font-black text-xl opacity-20 group-hover:opacity-100 transition-opacity">
                  {step.year}
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-primary">{step.icon}</div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{step.title}</span>
                </div>
                {/* Visual "Construction" lines */}
                <div className="absolute top-0 left-4 w-px h-full bg-white/5"></div>
                <div className="absolute top-0 right-4 w-px h-full bg-white/5"></div>
              </div>
            ))}

            {/* Base */}
            <div className="w-full max-w-[350px] h-10 bg-white/5 border border-white/10 rounded-t-3xl reveal"></div>
          </div>

          {/* Details Side */}
          <div className="space-y-8">
            {buildingSteps.map((step, index) => (
              <Card key={index} className="glass-card border-l-4 border-l-primary reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-mono">{step.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
