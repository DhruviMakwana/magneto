"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/hero-mall-light.png",
  "/hero-mall.png",
  "/luxury_coffee.png",
];

export default function HeroImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 2600);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="hero-showcase">
      <div className="hero-showcase__main">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Magneto Mall luxury atrium"
            fill
            sizes="(max-width: 968px) 100vw, 50vw"
            priority={index === 0}
            className={`hero-showcase__main-image ${index === activeIndex ? "is-active" : ""}`}
          />
        ))}
        <div className="hero-showcase__statbar">
          <div className="hero-showcase__stat">
            <strong>120+</strong>
            <span>Stores</span>
          </div>
          <div className="hero-showcase__stat">
            <strong>30+</strong>
            <span>Dining Spots</span>
          </div>
          <div className="hero-showcase__stat">
            <strong>4K</strong>
            <span>Cinemaplex</span>
          </div>
        </div>
      </div>
    </div>
  );
}
