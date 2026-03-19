import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfólio | Estagiário de Engenharia Civil',
  description: 'Estudante de Engenharia Civil da Universidade Nove de Julho focado em consultoria e gestão de obras.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('antialiased')}>
        {children}
        <Toaster />
        <Link
          href="https://wa.me/5511919854675?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            className="h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-2xl hover:bg-accent/90 transform transition-all duration-300 hover:scale-110 animate-float"
            aria-label="Contratar para Estágio (WhatsApp)"
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </Link>
      </body>
    </html>
  );
}