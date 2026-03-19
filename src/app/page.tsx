'use client';

import HeroSection from '@/components/portfolio/hero';
import AboutSection from '@/components/portfolio/about';
import TimelineSection from '@/components/portfolio/timeline';
import SkillsSection from '@/components/portfolio/skills';
import ProjectsCarousel from '@/components/portfolio/projects-carousel';
import ContactSection from '@/components/portfolio/contact';
import ParticleBackground from '@/components/portfolio/particle-background';
import { useReveal } from '@/hooks/use-reveal';

export default function Home() {
  useReveal(); // Ativa as animações de scroll

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-foreground selection:bg-primary/30 font-sans">
      <ParticleBackground />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsCarousel />
        <ContactSection />
      </main>
    </div>
  );
}
