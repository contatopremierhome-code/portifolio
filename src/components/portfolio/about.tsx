'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Hammer, HardHat, Ruler, ShoppingBag } from "lucide-react";
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
              Minha História
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase italic leading-none">Trajetória</h2>
            <div className="h-3 w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          </div>

          <Card 
            className="glass-card overflow-hidden rounded-[3rem] border-white/5 group hover:border-primary/20 transition-all duration-700"
            onMouseEnter={() => playAudio('hover')}
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
                  <h3 className="text-3xl md:text-5xl text-white font-black tracking-tighter uppercase italic">Trabalho e Estudo</h3>
                </div>
                
                <div className="space-y-8 text-xl md:text-2xl text-white/90 leading-relaxed text-justify font-medium">
                  <p className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    Minha caminhada profissional sempre foi baseada no esforço. Comecei cedo, trabalhando como ambulante, o que me deu uma base forte de dedicação e pé no chão desde o início.
                  </p>
                  
                  <p>
                    Em 2014, fiz o curso de AutoCAD no SENAC e tive experiência na área por 3 meses. Foi meu primeiro contato técnico e um período de muito aprendizado.
                  </p>

                  <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 mt-16 relative overflow-hidden group/box">
                    <div className="absolute -top-10 -right-10 text-white/5 group-hover/box:text-primary/10 transition-colors duration-700">
                      <ShoppingBag size={200} />
                    </div>
                    <h4 className="text-primary font-black uppercase text-xs tracking-[0.4em] mb-6">Dedicação Contínua</h4>
                    <p className="relative z-10 text-white/90">
                      Entre 2015 e 2018, trabalhei como vendedor enquanto iniciava a faculdade. Precisei trancar o curso na época, mas nunca parei de trabalhar. Atuo por conta própria no Mercado Livre desde 2019 até hoje, e em 2025 retornei à universidade para concluir minha formação em 2026, conciliando o trabalho com os estudos.
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

function playAudio(type: 'hover' | 'click') {
  const audio = new Audio(type === 'hover' ? 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3' : 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
  audio.volume = 0.1;
  audio.play().catch(() => {});
}
