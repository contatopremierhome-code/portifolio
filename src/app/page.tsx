import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero';
import PromiseSection from '@/components/landing/promise';
import LocationSection from '@/components/landing/location';
import ReviewsSection from '@/components/landing/reviews';
import PageFooter from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PromiseSection />
        <LocationSection />
        <ReviewsSection />
      </main>
      <PageFooter />
    </div>
  );
}
