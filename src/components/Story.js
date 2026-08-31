import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function StorySection() {
  return (
    <section id="story" className="bg-[#D9D3C7] text-[#1A1A1A] py-24 px-8 md:px-16 lg:px-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Colorful Suitcases Image */}
        <ScrollReveal direction="left" className="lg:col-span-6">
          <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden rounded-lg shadow-sm">
            <Image
              src="/story.jpg"
              alt="Vibrant red, blue, green, and beige suitcases stacked"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-6 space-y-8">
          {/* Sub-tag */}
          <ScrollReveal direction="up">
            <span className="block text-xs uppercase tracking-[0.2em] text-[#A3895B] font-medium">
              Our Story
            </span>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight">
              <span className="block text-[#1A1A1A]">Born from a love</span>
              <span className="block italic text-[#1A1A1A] font-serif font-normal mt-1">
                of travel.
              </span>
            </h2>
          </ScrollReveal>

          {/* Body Text */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#4A4A4A] text-sm md:text-base font-light leading-relaxed tracking-wide max-w-lg">
              LUXURY LUGGAGES was created around a simple idea: travel essentials
              should combine function, beauty and lasting craftsmanship. Founded
              in 2014, we&apos;ve spent a decade perfecting the art of the considered
              journey.
            </p>
          </ScrollReveal>

          {/* CTA Link */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="pt-2">
              <a
                href="#"
                className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#A3895B] hover:text-[#826b43] transition-colors"
              >
                DISCOVER OUR STORY
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
