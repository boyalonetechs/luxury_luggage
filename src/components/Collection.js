import React from "react";

export default function CollectionGridSection() {
  return (
    <section className="bg-[#171717] text-white py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="block text-[11px] uppercase tracking-[0.25em] text-[#B5986C] font-semibold">
            LUXURY LUGGAGE / 01
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
            The Collection
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Left Column: Full Height Portrait Card */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-2xl h-[640px]">
            <img
              src="/images/collection1.png"
              alt="Man in tweed suit with briefcase and luggage"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Middle Column: Two Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-2xl h-[308px]">
              <img
                src="/images/collection2.jpg"
                alt="Man sitting with shoulder duffel and suitcase"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-[308px]">
              <img
                src="/images/collection3.png"
                alt="Man holding yellow and red suitcases"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Two Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-2xl h-[308px]">
              <img
                src="/images/collection4.jpg"
                alt="Couple sitting on train platform with luggage"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-[308px]">
              <img
                src="/images/collection5.jpg"
                alt="Woman walking while pulling a red suitcase"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
