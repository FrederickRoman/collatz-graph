import HeroBanner from "@/components/banner/HeroBanner";
import CollatzDemoSection from "@/components/calculator/CollatzDemoSection";
import SiteIntro from "@/components/content/home/SiteIntro";

function Home(): JSX.Element {
  return (
    <>
      <HeroBanner />
      <SiteIntro />
      <CollatzDemoSection />
    </>
  );
}

export default Home;
