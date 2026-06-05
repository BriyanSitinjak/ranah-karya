import CompanyProfileSection from '@/components/sections/CompanyProfileSection';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-brand-cream">
      <HeroSection />
      <ServicesSection />
      <CompanyProfileSection />
    </div>
  );
}
