"use client";
import Image from "next/image";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "The Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Craftsmanship", href: "#craft" },
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen bg-[#EFECE6] font-sans text-[#2D2D2D]"
    >
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Luxury Luggage"
          width={564}
          height={444}
          priority
          className="w-12 sm:w-16 h-auto"
        />

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right Nav Link */}
        <div className="flex items-center">
          <a
            href="#collection"
            className="hidden md:flex items-center space-x-2 text-xs tracking-widest uppercase font-medium hover:text-black transition-colors"
          >
            <span>DISCOVER LUXURY</span>
            <span>&rarr;</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-[#2D2D2D] transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#2D2D2D] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#2D2D2D] transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#EFECE6] border-t border-stone-300 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-widest uppercase font-medium text-[#2D2D2D] hover:text-black transition-colors"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setMenuOpen(false)}
            className="block text-sm tracking-widest uppercase font-medium text-[#2D2D2D] hover:text-black transition-colors"
          >
            Discover Luxury &rarr;
          </a>
        </div>
      )}

      {/* Hero Content Wrapper */}
      <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-88px)] flex flex-col justify-center px-4 sm:px-6 md:px-8 pb-12">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
          <Image
            src="/hero.jpg"
            alt="Traveler with luxury luggage"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Text Overlay Layer */}
        <div className="relative z-10 max-w-lg text-white space-y-5 md:space-y-6">
          <ScrollReveal direction="left" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-sm">
              Travel,
              <br />
              <span className="italic">Refined.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.25}>
            <p className="text-stone-200 text-base md:text-xl font-light max-w-sm drop-shadow-sm">
              Exceptional luggage designed for journeys that deserve more.
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <a
                href="#collection"
                className="bg-white text-stone-900 px-6 py-3.5 rounded-sm text-xs tracking-wider uppercase font-medium flex items-center space-x-3 hover:bg-stone-100 transition-colors shadow-sm"
              >
                <span>DISCOVER THE COLLECTION</span>
                <span>&rarr;</span>
              </a>

              <a
                href="#story"
                className="text-xs tracking-wider uppercase font-medium text-white hover:text-stone-200 transition-colors drop-shadow-sm"
              >
                OUR STORY
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
