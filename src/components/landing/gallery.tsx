import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const styles = [
  { id: "gallery-acetate", name: "Modern Acetate" },
  { id: "gallery-metal", name: "Classic Metal" },
  { id: "gallery-sports", name: "Sports Edition" },
  { id: "gallery-blue-light", name: "Blue Light Blockers" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-primary/5 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Encontre seu Estilo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Uma variedade de armações para combinar com você.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((style) => {
            const image = PlaceHolderImages.find(p => p.id === style.id);
            return (
              image && (
                <Card key={style.id} className="group overflow-hidden rounded-xl border-none shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 bg-card">
                    <CardTitle className="text-center font-headline text-xl">{style.name}</CardTitle>
                  </CardContent>
                </Card>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}
