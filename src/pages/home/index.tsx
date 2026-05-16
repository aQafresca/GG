import { AboutSection } from '@/components/sections/about';
import { DescriptionSection } from '@/components/sections/description';
import { HeroSection } from '@/components/sections/hero';
import { ReviewSection } from '@/components/sections/review';
import { Services } from '@/components/sections/services';
import { heroSectionCfg } from '@/shared/lib/config';

const HomePage = () => {
  return (
    <>
      <HeroSection title={heroSectionCfg.HOME.title} slogan={heroSectionCfg.HOME.slogan} />
      <DescriptionSection />
      <AboutSection />
      <Services />
      <ReviewSection />
    </>
  );
};

export default HomePage;
