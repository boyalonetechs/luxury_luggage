import React from "react";

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
    <section className="bg-[#F6F4EE] text-[#1A1A1A] py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Texture Image */}
        <div className="lg:col-span-5 h-[520px] rounded-lg overflow-hidden shadow-sm">
          <img
            src="/craft.png"
            alt="Close-up of stitched brown leather texture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-10">
          {/* Header Area */}
          <div className="space-y-4">
            <span className="block text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
              Craftsmanship
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
              <span className="block text-[#1A1A1A]">Every detail</span>
              <span className="block italic text-[#1A1A1A] font-serif">
                has a purpose.
              </span>
            </h2>

            <p className="text-[#555555] text-sm md:text-base font-light leading-relaxed max-w-xl pt-2">
              From precision-engineered structures to carefully selected
              materials, every LUXURY LUGGAGES piece is created with intention.
            </p>
          </div>

          {/* Features List */}
          <div className="divide-y divide-[#E2DED5]">
            {features.map((item) => (
              <div
                key={item.number}
                className="py-5 flex items-start space-x-6"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
