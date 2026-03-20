'use client';

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useAudio } from "@/hooks/use-audio";

const items = [
  {
    title: "Projeto Integrador",
    category: "Acadêmico",
    image: "https://i.imgur.com/G1IMRC2.jpg",
    description: "Trabalho realizado em grupo com fins estritamente didáticos para estudo e aprendizado das disciplinas da faculdade.",
    link: "https://drive.google.com/file/d/1rlikXIKjR4LoG6p62k_ZfJpquRQye_fy/preview"
  },
  {
    title: "Projetos AutoCAD",
    category: "Planta Técnica",
    image: "https://picsum.photos/seed/autocad8/800/600",
    description: "Prática em desenhos de plantas baixas e cortes técnicos, focando em precisão e normas básicas."
  },
  {
    title: "Noções de Obra",
    category: "Estudo",
    image: "https://picsum.photos/seed/const1/800/600",
    description: "Acompanhamento acadêmico de processos de execução e materiais usados no dia a dia da construção."
  },
  {
    title: "Logística Mercado Livre",
    category: "Experiência",
    image: "https://picsum.photos/seed/logis2/800/600",
    description: "Trabalho contínuo com processos de entrega e controle de prazos para o cumprimento do serviço."
  }
];

export default function ProjectsCarousel() {
  const { playSound } = useAudio();
  const [selectedPdf, setSelectedPdf] = React.useState<string | null>(null);

  const handleCardClick = (item: typeof items[0]) => {
    playSound('click');
    if (item.link) {
      setSelectedPdf(item.link);
    }
  };

  return (
    <section id="projects" className="py-32 bg-white/5">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">TRABALHOS & ESTUDOS</h2>
          <p className="text-white/70 uppercase tracking-[0.3em] text-sm font-bold">Prática e Aprendizado</p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card 
                  className="glass-card h-full overflow-hidden group cursor-pointer flex flex-col border-white/10 hover:border-primary/40 transition-all duration-500"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-tighter shadow-xl border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase italic tracking-tighter">{item.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed flex-1 mb-6 font-medium">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-500 text-[10px] font-black uppercase tracking-[0.2em] h-12 rounded-2xl border border-white/10"
                      >
                        Ver Detalhes
                        <Eye size={16} className="group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious 
              className="bg-white/5 border-white/10 text-white hover:bg-primary hover:border-primary transition-all" 
              onClick={() => playSound('click')}
            />
            <CarouselNext 
              className="bg-white/5 border-white/10 text-white hover:bg-primary hover:border-primary transition-all" 
              onClick={() => playSound('click')}
            />
          </div>
        </Carousel>

        {/* Modal de Visualização de PDF */}
        <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
          <DialogContent className="max-w-[80vw] w-[80vw] h-[85vh] p-0 bg-black border-white/10 overflow-hidden flex flex-col">
            <DialogTitle className="sr-only">Visualização de Documento</DialogTitle>
            <DialogDescription className="sr-only">
              Visualizador de documento PDF para estudos acadêmicos.
            </DialogDescription>
            {selectedPdf && (
              <div className="w-full h-full relative">
                <iframe
                  src={selectedPdf}
                  className="w-full h-full border-none"
                  allow="autoplay"
                  title="Visualização de PDF"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
