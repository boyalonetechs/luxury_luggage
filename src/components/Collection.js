import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CollectionGridSection() {
  return (
    <section
      id="collection"
      className="bg-[#171717] text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <ScrollReveal direction="left">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
              LUXURY LUGGAGE / 01
            </span>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
              The Collection
            </h2>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Column: Full Height Portrait Card */}
          <ScrollReveal direction="left" delay={0.1} className="md:col-span-2 lg:col-span-4">
            <div className="relative group overflow-hidden rounded-2xl h-[320px] sm:h-[440px] lg:h-[640px]">
              <Image
                src="/images/collection1.png"
                alt="Man in tweed suit with briefcase and luggage"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Middle Column: Two Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative group overflow-hidden rounded-2xl h-[240px] sm:h-[308px]">
                <Image
                  src="/images/collection2.jpg"
                  alt="Man sitting with shoulder duffel and suitcase"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="relative group overflow-hidden rounded-2xl h-[240px] sm:h-[308px]">
                <Image
                  src="/images/collection3.png"
                  alt="Man holding yellow and red suitcases"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Two Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative group overflow-hidden rounded-2xl h-[240px] sm:h-[308px]">
                <Image
                  src="/images/collection4.jpg"
                  alt="Couple sitting on train platform with luggage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative group overflow-hidden rounded-2xl h-[240px] sm:h-[308px]">
                <Image
                  src="/images/collection5.jpg"
                  alt="Woman walking while pulling a red suitcase"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
