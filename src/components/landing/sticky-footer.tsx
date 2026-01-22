import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, MessageCircle } from 'lucide-react';

export default function StickyFooter() {
  return (
    <div className="sticky bottom-0 z-50 flex w-full border-t bg-background/95 p-2 backdrop-blur-sm md:hidden">
      <div className="grid w-full grid-cols-2 gap-2">
        <Button asChild variant="outline" className="h-12">
          <Link href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Branco,+278+-+Centro+Histórico+de+São+Paulo,+São+Paulo+-+SP,+01206-000" target="_blank" rel="noopener noreferrer">
            <MapPin className="mr-2 h-5 w-5" />
            Como Chegar
          </Link>
        </Button>
        <Button asChild className="h-12 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="https://wa.me/5511979984438?text=Olá%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chamar no Zap
          </Link>
        </Button>
      </div>
    </div>
  );
}
