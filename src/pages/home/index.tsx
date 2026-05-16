import { AboutSection } from '@/components/sections/about';
import { FaqSection } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero';
import { IntroSection } from '@/components/sections/intro';
import { JoinUsSections } from '@/components/sections/join-us';
import { ReviewSection } from '@/components/sections/review';
import { Services } from '@/components/sections/services';
import { heroSectionCfg } from '@/shared/lib/config';

const HomePage = () => {
  return (
    <>
      <HeroSection title={heroSectionCfg.HOME.title} slogan={heroSectionCfg.HOME.slogan} />
      <IntroSection />
      <AboutSection />
      <Services />
      <ReviewSection />
      <FaqSection />
      <JoinUsSections />
    </>
  );
};

export default HomePage;
