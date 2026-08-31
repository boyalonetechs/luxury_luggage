import Image from "next/image";
import React from "react";

export default function FooterSection() {
  const navLinks = [
    { label: "The Collection", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Craftsmanship", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "WhatsApp", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-[#121212] text-stone-300 pt-20 pb-12 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Luxury Luggage"
              width={564}
              height={444}
              className="w-18 h-auto"
            />

            {/* Tagline */}
            <p className="text-xs text-stone-400 font-light tracking-wide max-w-xs pt-2">
              Luxury luggage for considered journeys.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#B5986C] font-medium">
              Navigate
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-stone-300 font-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#B5986C] font-medium">
              Follow
            </h3>
            <ul className="space-y-3.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-stone-300 font-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#B5986C] font-medium">
              Legal
            </h3>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-stone-300 font-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Divider & Copyright */}
        <div className="space-y-8 pt-4">
          <div className="w-full h-[1px] bg-stone-800"></div>
          <p className="text-[11px] text-stone-400 font-light tracking-wider">
            &copy; 2026 LUXURY LUGGAGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
