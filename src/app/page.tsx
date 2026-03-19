import HeroSection from '@/components/portfolio/hero';
import AboutSection from '@/components/portfolio/about';
import SkillsSection from '@/components/portfolio/skills';
import ExperienceSection from '@/components/portfolio/experience';
import CertificationsSection from '@/components/portfolio/certifications';
import ContactSection from '@/components/portfolio/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}