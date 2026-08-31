"use client";

import React, { useEffect, useRef, useState } from "react";

const variants = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  zoom: "scale-95",
  fade: "",
};

const transitions = {
  "ease-out": "cubic-bezier(0.22, 1, 0.36, 1)",
  "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
};

export default function ScrollReveal({
  children,
  as: Tag = "div",
  direction = "up",
  distance = 8,
  delay = 0,
  duration = 0.8,
  easing = "ease-out",
  once = true,
  threshold = 0.15,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const revealClass = `${variants[direction] || variants.up} opacity-0`;

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : revealClass
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: transitions[easing] || transitions["ease-out"],
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
