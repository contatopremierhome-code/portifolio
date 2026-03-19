'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Hammer, HardHat, Ruler } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";
import Image from "next/image";

export default function AboutSection() {
  const { playSound } = useAudio();

  return (
    <section id="about" className="py-40 relative bg-black/40 overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 p-20 opacity-5 select-none pointer-events-none">
        <Hammer size={400} />
      </div>

      <div className="container mx-auto px-4 reveal">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-24 -left-16 text-primary/10 select-none pointer-events-none rotate-12">
            <Quote size={280} />
          </div>
          
          <div className="text-center mb-24 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
              Trajetória Profissional
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic leading-none">Minha História</h2>
            <div className="h-3 w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          </div>

          <Card 
            className="glass-card overflow-hidden rounded-[3rem] border-white/5 group hover:border-primary/20 transition-all duration-700"
            onMouseEnter={() => playSound('hover')}
          >
            <CardContent className="p-0 relative flex flex-col lg:flex-row">
              {/* Foto Pessoal na História */}
              <div className="relative w-full lg:w-1/3 h-[400px] lg:h-auto overflow-hidden">
                <Image 
                  src="https://i.imgur.com/5uj0Oii.jpg"
                  alt="Jeovane em campo"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden lg:block"></div>
              </div>

              <div className="p-12 md:p-20 flex-1 space-y-12">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <HardHat size={40} />
                  </div>
                  <h3 className="text-3xl md:text-5xl text-white font-black tracking-tighter uppercase italic">Futuro Engenheiro Civil</h3>
                </div>
                
                <div className="space-y-8 text-xl md:text-2xl text-white/90 leading-relaxed text-justify font-medium">
                  <p className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    Minha vida profissional começou cedo, enfrentando os desafios do mercado real, onde iniciei trabalhando na <span className="text-white font-black border-b-2 border-primary/30">Santa Efigênia (ambulante)</span>. Essa base foi fundamental para desenvolver o dinamismo e a visão prática que carrego hoje.
                  </p>
                  
                  <p>
                    Em <span className="text-white font-bold">2014</span>, descobri meu gosto para engenharia ao iniciar o curso de AutoCAD no SENAC. Meu desempenho foi tão destacado que recebi o convite do meu professor para integrar a sua empresa. Essa experiência foi vital e me ajudou na escolha da minha carreira.
                  </p>

                  <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 mt-16 relative overflow-hidden group/box">
                    <div className="absolute -top-10 -right-10 text-white/5 group-hover/box:text-primary/10 transition-colors duration-700">
                      <Ruler size={200} />
                    </div>
                    <h4 className="text-primary font-black uppercase text-xs tracking-[0.4em] mb-6">Determinação e Foco</h4>
                    <p className="relative z-10 text-white/90">
                      Em <span className="text-white font-bold">2015</span> iniciei o Curso de Engenharia Civil. Faltando apenas 1 ano para concluir, precisei trancar a faculdade. No <span className="text-primary font-black">segundo semestre de 2025</span> retornei com força total e me formarei em <span className="text-white font-black">2026</span>. Atualmente, trabalho de forma autônoma através do <span className="text-white font-black italic">Mercado Livre</span>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
