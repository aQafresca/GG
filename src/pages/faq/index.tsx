import { FaqSection } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero';
import { heroSectionCfg } from '@/shared/lib/config/heroSection.config.ts';

const FaqPage = () => {
  return (
    <>
      <HeroSection title={heroSectionCfg.FAQ.title} slogan={heroSectionCfg.FAQ.slogan} />
      <FaqSection />
    </>
  );
};

export default FaqPage;
