import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  { name: "Mariana S.", initial: "MS", review: "Atendimento impecável! Fiz o exame e saí com o óculos pronto em menos de 2 horas como prometido." },
  { name: "Ricardo M.", initial: "RM", review: "Melhor preço do Centro de SP. Armações modernas e muita variedade." },
  { name: "Carla F.", initial: "CF", review: "Fui muito bem atendida. O exame de vista foi super detalhado." },
  { name: "João P.", initial: "JP", review: "Rapidez incrível. Precisava do óculos para uma viagem e me salvaram!" },
  { name: "Beatriz L.", initial: "BL", review: "Loja linda e ambiente muito agradável. Recomendo a Br Óculos para todos." },
  { name: "Marcos V.", initial: "MV", review: "Preço justo e entrega relâmpago. Nota 10!" },
];

function renderStars(count: number) {
  return Array(count).fill(0).map((_, i) => (
    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
  ));
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Confiança e satisfação a cada olhar.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="flex h-full flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-1">{renderStars(5)}</div>
                        <p className="mt-4 text-foreground">"{review.review}"</p>
                      </div>
                      <div className="mt-6 flex items-center gap-3 pt-4 border-t">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/20 text-primary font-bold">{review.initial}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-primary">{review.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
