import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CraftsmanshipSection() {
  const features = [
    {
      number: "01",
      title: "PRECISION",
      description: "Engineered for effortless movement.",
    },
    {
      number: "02",
      title: "MATERIALS",
      description: "Selected for strength, texture and longevity.",
    },
    {
      number: "03",
      title: "DETAIL",
      description: "Designed down to the smallest element.",
    },
  ];

  return (
    <section
      id="craft"
      className="bg-[#F6F4EE] text-[#1A1A1A] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
        {/* Left Column: Texture Image */}
        <ScrollReveal direction="left" className="lg:col-span-5">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/craft.png"
              alt="Close-up of stitched brown leather texture"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-8 md:space-y-10">
          {/* Header Area */}
          <div className="space-y-4">
            <ScrollReveal direction="right">
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
                Craftsmanship
              </span>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
                <span className="block text-[#1A1A1A]">Every detail</span>
                <span className="block italic text-[#1A1A1A] font-serif">
                  has a purpose.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-[#555555] text-sm md:text-base font-light leading-relaxed max-w-xl pt-2">
                From precision-engineered structures to carefully selected
                materials, every LUXURY LUGGAGES piece is created with intention.
              </p>
            </ScrollReveal>
          </div>

          {/* Features List */}
          <div className="divide-y divide-[#E2DED5]">
            {features.map((item, i) => (
              <ScrollReveal
                key={item.number}
                direction="right"
                delay={0.15 * (i + 1)}
              >
                <div className="py-4 md:py-5 flex items-start space-x-6">
                  <span className="font-serif italic text-sm text-[#B5986C] w-6 pt-0.5">
                    {item.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-xs sm:text-sm font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
