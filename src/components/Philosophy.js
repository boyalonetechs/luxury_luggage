import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="bg-[#F6F4EE] text-[#1A1A1A] py-20 md:py-28 px-4 sm:px-6 md:px-8 text-center scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
        {/* Category Label */}
        <ScrollReveal direction="left">
          <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
            LUXURY LUGGAGE PHILOSOPHY
          </span>
        </ScrollReveal>

        {/* Vertical Gold Divider Line */}
        <ScrollReveal direction="zoom" delay={0.1}>
          <div className="w-[1px] h-10 bg-[#B5986C]/60 my-2"></div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="right" delay={0.15}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
            <span className="block text-[#1A1A1A]">Luxury isn’t excess.</span>
            <span className="block italic text-[#B5986C] font-serif font-normal mt-1">
              It’s intention.
            </span>
          </h2>
        </ScrollReveal>

        {/* Body Paragraph */}
        <ScrollReveal direction="up" delay={0.25}>
          <p className="text-[#555555] text-sm md:text-base font-light leading-relaxed tracking-wide max-w-xl pt-2">
            We believe true luxury lives in thoughtful design, enduring materials and experiences that become better with every journey.
          </p>
        </ScrollReveal>

        {/* Bottom Horizontal Accent Line */}
        <ScrollReveal direction="zoom" delay={0.35}>
          <div className="w-16 h-[1px] bg-[#B5986C]/60 pt-4"></div>
        </ScrollReveal>
      </div>
    </section>
  );
}