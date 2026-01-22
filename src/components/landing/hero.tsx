import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-primary text-primary-foreground">
      <div className="container relative z-10 mx-auto flex h-[60vh] min-h-[450px] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Enxergue o melhor da vida em 2 horas.
          </h1>
          <p className="text-lg text-primary-foreground/90 md:text-xl">
            Exames de vista no local e seus óculos prontos com rapidez e precisão. Estilo e saúde visual no coração de São Paulo.
          </p>
          <Link href="https://wa.me/5511979984438?text=Olá%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform duration-200 hover:scale-105 shadow-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Atendimento (WhatsApp)
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
