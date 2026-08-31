import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="bg-[#171717] text-white py-20 md:py-28 px-4 sm:px-6 md:px-8 text-center scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
        {/* Top Vertical Gold Accent Line */}
        <ScrollReveal direction="zoom">
          <div className="w-[1px] h-14 bg-[#B5986C]/70"></div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="left" delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
            <span className="block text-white">Your next journey</span>
            <span className="block italic text-[#B5986C] font-serif font-normal mt-1">
              begins here.
            </span>
          </h2>
        </ScrollReveal>

        {/* Subtitle / Description */}
        <ScrollReveal direction="right" delay={0.2}>
          <p className="text-stone-300 text-xs sm:text-sm tracking-widest uppercase font-light pt-2">
            Discover the world of LUXURY LUGGAGES.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal direction="zoom" delay={0.3}>
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-[#F6F4EE] text-[#1A1A1A] px-7 py-3.5 rounded-sm text-xs tracking-widest uppercase font-semibold hover:bg-white transition-colors shadow-sm"
            >
              <span>CONTACT US</span>
              <span>&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
