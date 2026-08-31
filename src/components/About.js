import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F6F4EE] text-[#1A1A1A] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 items-start lg:items-end">
        {/* Left Column: Index & Heading */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Section Sub-tag */}
          <ScrollReveal direction="left">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
              LUXURY LUGGAGE / 01
            </span>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="right" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight">
              <span className="block text-[#1A1A1A]">
                Made for the journey.
              </span>
              <span className="block italic text-[#B5986C] font-serif font-normal mt-1">
                Designed for the destination.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column: Body Copy */}
        <ScrollReveal direction="right" delay={0.2}>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-[#555555] text-sm md:text-base lg:text-[15px] font-light leading-relaxed tracking-wide w-full">
              LUXURY LUGGAGES creates refined travel pieces for those who
              believe the journey should be as considered as the destination.
              Each piece is the result of years of thoughtful design and
              uncompromising material selection.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
