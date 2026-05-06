import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturedVideoSection from '@/components/FeaturedVideoSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="relative bg-black">
      <Hero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  );
}
