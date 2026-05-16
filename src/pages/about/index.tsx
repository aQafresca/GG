import { HeroSection } from '@/components/sections/hero';
import { heroSectionCfg } from '@/shared/lib/config/heroSection.config.ts';

const AboutPage = () => {
  return (
    <div>
      <HeroSection title={heroSectionCfg.ABOUT.title} slogan={heroSectionCfg.ABOUT.slogan} />
    </div>
  );
};

export default AboutPage;
