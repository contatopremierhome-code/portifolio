import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertCircle } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-primary/5 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Venha nos Visitar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos te esperando no coração de São Paulo.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline">Nosso Endereço</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Av. Rio Branco, 278 - Centro Histórico de São Paulo, SP, 01206-000
                </p>
                <Link href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Branco,+278+-+Centro+Histórico+de+São+Paulo,+São+Paulo+-+SP,+01206-000" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform duration-200 hover:scale-105">
                    Abrir no Google Maps
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline">Horário de Funcionamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-lg">
                <div className="flex justify-between"><span>Segunda a Sexta:</span> <span>08:00 - 16:00</span></div>
                <div className="flex justify-between"><span>Sábado:</span> <span>08:00 - 14:00</span></div>
                <div className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></div>
                <div className="!mt-6 flex items-start gap-3 rounded-lg border border-accent/50 bg-accent/10 p-4 text-sm text-accent-foreground/80">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <p>
                    <span className="font-bold">Dica de ouro:</span> Chegue até às 14h de segunda a sábado para garantir seu óculos pronto ainda hoje!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
