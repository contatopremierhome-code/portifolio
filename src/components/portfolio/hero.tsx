'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10 reveal">
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative h-48 w-44 md:h-56 md:w-52 rounded-2xl border-2 border-white/10 p-1 bg-card/50 backdrop-blur-md">
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src="https://imgur.com/J5gtnyg.jpg"
                alt="Jeovane de Oliveira Costa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
            Disponível para Estágio
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
            JEOVANE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">COSTA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Estudante de Engenharia Civil | Consultoria e Gestão de Obras
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground pt-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm">29 Anos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">São Paulo - SP</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link href="https://wa.me/5511919854675" target="_blank" className="flex-1">
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 text-lg rounded-2xl shadow-2xl transition-all hover:scale-[1.02] active:scale-95 font-bold uppercase tracking-wider animate-pulse-whatsapp">
              <MessageCircle className="mr-2 h-6 w-6" />
              Contratar para Estágio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
