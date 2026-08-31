import React from "react";

export default function QuoteBannerSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[480px] max-h-[650px] overflow-hidden bg-stone-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/quote.jpg"
          alt="Person carrying two yellow suitcases"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Overlay to boost white text contrast */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Center Text Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <blockquote className="max-w-2xl">
          <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight tracking-tight drop-shadow-md">
            “Wherever you go,
            <span className="block italic font-serif mt-1">
              go beautifully.”
            </span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
