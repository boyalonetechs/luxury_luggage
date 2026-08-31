import AboutSection from "@/components/About";
import CollectionGridSection from "@/components/Collection";
import ContactCtaSection from "@/components/Contact";
import CraftsmanshipSection from "@/components/Craft";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Header";
import PhilosophySection from "@/components/Philosophy";
import QuoteBannerSection from "@/components/Qoute";
import StorySection from "@/components/Story";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CollectionGridSection />
      <CraftsmanshipSection />
      <QuoteBannerSection />
      <PhilosophySection />
      <StorySection />
      <ContactCtaSection />
      <FooterSection />
    </main>
  );
}
