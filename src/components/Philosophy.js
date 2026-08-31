import React from 'react';

export default function PhilosophySection() {
  return (
    <section className="bg-[#F6F4EE] text-[#1A1A1A] py-28 px-8 md:px-16 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
        {/* Category Label */}
        <span className="block text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
          LUXURY LUGGAGE PHILOSOPHY
        </span>

        {/* Vertical Gold Divider Line */}
        <div className="w-[1px] h-10 bg-[#B5986C]/60 my-2"></div>

        {/* Main Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
          <span className="block text-[#1A1A1A]">Luxury isn’t excess.</span>
          <span className="block italic text-[#B5986C] font-serif font-normal mt-1">
            It’s intention.
          </span>
        </h2>

        {/* Body Paragraph */}
        <p className="text-[#555555] text-sm md:text-base font-light leading-relaxed tracking-wide max-w-xl pt-2">
          We believe true luxury lives in thoughtful design, enduring materials and experiences that become better with every journey.
        </p>

        {/* Bottom Horizontal Accent Line */}
        <div className="w-16 h-[1px] bg-[#B5986C]/60 pt-4"></div>
      </div>
    </section>
  );
}