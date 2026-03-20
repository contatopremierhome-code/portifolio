import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ScrollProgress from '@/components/portfolio/scroll-progress';
import Navbar from '@/components/portfolio/navbar';

export const metadata: Metadata = {
  title: 'Jeovane de Oliveira | Engenharia Civil',
  description: 'Portfólio de Jeovane de Oliveira - Estudante de Engenharia Civil.',
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
        <Navbar />
        {children}
        <Toaster />
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Floating WhatsApp Pulsing Button */}
        <Link 
          href="https://wa.me/5511919854675?text=Olá%20Jeovane,%20vim%20através%20do%20seu%20Portifólio%20!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="absolute -inset-4 bg-[#25D366] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <Button 
            className="h-16 w-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#22c55e] transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-whatsapp border-none p-0 overflow-hidden"
            aria-label="Conversar no WhatsApp"
          >
            <Image 
              src="https://i.imgur.com/Hr6SCB8.png" 
              alt="WhatsApp" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </Button>
        </Link>
      </body>
    </html>
  );
}
