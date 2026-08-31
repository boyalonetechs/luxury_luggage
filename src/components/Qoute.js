import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function QuoteBannerSection() {
  return (
    <section
      id="quote"
      className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] max-h-[650px] overflow-hidden bg-stone-900 scroll-mt-20"
    >
      {/* Background Image Container */}
      <ScrollReveal direction="left" className="absolute inset-0 z-0" duration={1.2}>
        <div className="absolute inset-0">
          <Image
            src="/quote.jpg"
            alt="Person carrying two yellow suitcases"
            fill
            className="object-cover object-center"
          />
          {/* Subtle Dark Overlay to boost white text contrast */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
      </ScrollReveal>

      {/* Center Text Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 text-center">
        <ScrollReveal direction="right" delay={0.2}>
          <blockquote className="max-w-2xl">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight drop-shadow-md">
              “Wherever you go,
              <span className="block italic font-serif mt-1">
                go beautifully.”
              </span>
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
