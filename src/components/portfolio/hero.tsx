import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
        <div className="relative h-40 w-40 rounded-full border-4 border-primary p-1 bg-background shadow-[0_0_20px_rgba(0,71,171,0.3)]">
          <Image
            src="https://picsum.photos/seed/engineer/400/400"
            alt="Foto de Perfil"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Estagiário de <span className="text-primary">Engenharia Civil</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Consultoria e Gestão de Obras
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Universidade Nove de Julho | São Paulo</span>
          </div>
        </div>

        <Link href="https://wa.me/5511919854675" target="_blank">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg rounded-xl shadow-xl transition-all hover:scale-105">
            <MessageCircle className="mr-2 h-6 w-6" />
            Contratar para Estágio
          </Button>
        </Link>
      </div>
    </section>
  );
}