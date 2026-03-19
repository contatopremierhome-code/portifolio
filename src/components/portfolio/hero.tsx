import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-industrial-gradient">
      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full border-2 border-primary/20 p-2 bg-card">
            <div className="relative h-full w-full rounded-full overflow-hidden">
              <Image
                src="https://imgur.com/J5gtnyg.jpg"
                alt="Estagiário de Engenharia Civil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
            Disponível para Estágio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Estagiário de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Engenharia Civil</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Consultoria e Gestão de Obras | Foco em Eficiência e Prazos
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground pt-2">
            <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Universidade Nove de Julho</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link href="https://wa.me/5511919854675?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade." target="_blank" className="flex-1">
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-7 text-lg rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 font-bold">
              <MessageCircle className="mr-2 h-6 w-6" />
              Contratar para Estágio
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
