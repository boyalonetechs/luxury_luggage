import AboutSection from "@/components/About";
import CollectionGridSection from "@/components/Collection";
import ContactCtaSection from "@/components/Contact";
import CraftsmanshipSection from "@/components/Craft";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Header";
import PhilosophySection from "@/components/Philosophy";
import QuoteBannerSection from "@/components/Qoute";
import ScrollReveal from "@/components/ScrollReveal";
import StorySection from "@/components/Story";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollReveal direction="up">
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <CollectionGridSection />
      </ScrollReveal>
      <ScrollReveal direction="down">
        <CraftsmanshipSection />
      </ScrollReveal>
      <ScrollReveal direction="zoom">
        <QuoteBannerSection />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <PhilosophySection />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <StorySection />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <ContactCtaSection />
      </ScrollReveal>
      <FooterSection />
    </main>
  );
}
