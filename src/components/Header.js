import React from "react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#EFECE6] font-sans text-[#2D2D2D]">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <img src="/logo.png" alt="Luxury Luggage" className="w-16 h-auto" />

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium text-stone-700">
          <a href="#" className="hover:text-black transition-colors">
            THE COLLECTION
          </a>
          <a href="#" className="hover:text-black transition-colors">
            OUR STORY
          </a>
          <a href="#" className="hover:text-black transition-colors">
            CRAFTSMANSHIP
          </a>
        </div>

        {/* Right Nav Link */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center space-x-2 text-xs tracking-widest uppercase font-medium hover:text-black transition-colors"
          >
            <span>DISCOVER LUXURY</span>
            <span>&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Hero Content Wrapper */}
      <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-88px)] flex flex-col justify-center px-8 pb-12">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
          <img
            src="/hero.jpg"
            alt="Traveler with luxury luggage"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Text Overlay Layer */}
        <div className="relative z-10 max-w-lg text-white space-y-6">
          <h1 className="font-serif text-6xl md:text-7xl font-normal leading-tight tracking-tight drop-shadow-sm">
            Travel,
            <br />
            <span className="italic">Refined.</span>
          </h1>

          <p className="text-stone-200 text-lg md:text-xl font-light max-w-sm drop-shadow-sm">
            Exceptional luggage designed for journeys that deserve more.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6 pt-4">
            <a
              href="#"
              className="bg-white text-stone-900 px-6 py-3.5 rounded-sm text-xs tracking-wider uppercase font-medium flex items-center space-x-3 hover:bg-stone-100 transition-colors shadow-sm"
            >
              <span>DISCOVER THE COLLECTION</span>
              <span>&rarr;</span>
            </a>

            <a
              href="#"
              className="text-xs tracking-wider uppercase font-medium text-white hover:text-stone-200 transition-colors drop-shadow-sm"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
