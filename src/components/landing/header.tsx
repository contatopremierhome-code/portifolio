import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Br Óculos</span>
        </Link>
      </div>
    </header>
  );
}
