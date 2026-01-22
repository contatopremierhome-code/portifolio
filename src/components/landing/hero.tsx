import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-person-smiling');

  return (
    <section className="relative h-[80vh] min-h-[550px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-end px-4 pb-20 text-center md:px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Enxergue o melhor da vida em 2 horas.
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
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
