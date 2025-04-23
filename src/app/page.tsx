import { HeroSection } from '../components/HeroSection';
import { ServiceHighlights } from '../components/ServiceHighlights';
import { CTASection } from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceHighlights />
      <CTASection />
    </main>
  );
}
