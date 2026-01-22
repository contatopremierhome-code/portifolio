import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Br Óculos - Óculos Prontos em até 2 Horas em São Paulo',
  description: 'Exames de vista no local e seus óculos prontos com rapidez e precisão. Estilo e saúde visual no coração de São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <Link
          href="https://wa.me/5511979984438?text=Olá%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            className="h-16 w-16 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transform transition-transform duration-200 hover:scale-110"
            aria-label="Falar com Atendimento (WhatsApp)"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </Link>
      </body>
    </html>
  );
}
