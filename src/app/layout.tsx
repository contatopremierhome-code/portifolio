import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jeovane Costa | Engenharia Civil',
  description: 'Portfólio Profissional de Jeovane de Oliveira Costa - Estudante de Engenharia Civil focado em consultoria e gestão de obras.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('antialiased bg-[#121212]')}>
        {children}
        <Toaster />
        
        {/* Floating WhatsApp Pulsing Button */}
        <Link 
          href="https://wa.me/5511919854675" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <Button 
            className="h-16 w-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#22c55e] transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-whatsapp border-none"
            aria-label="Contratar para Estágio (WhatsApp)"
          >
            <MessageCircle className="h-8 w-8 fill-current" />
          </Button>
        </Link>
      </body>
    </html>
  );
}
