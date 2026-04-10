"use client";

import React, { useState, useEffect } from 'react';
import './dining-carousel.css';

const diningData = [
  {
    id: 1,
    title: 'Le Petit Château',
    tag: 'Signature Dining',
    desc: 'Experience ultra-luxury French cuisine in a romantic bistro setting, featuring exquisite dishes and world-class wines.',
    img: '/french_bistro.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Sora Sushi',
    tag: 'Zen Culinary',
    desc: 'High-end minimalist Japanese sushi bar offering a serene luxury dining experience.',
    img: '/japanese_sushi.png',
    link: '#',
  },
  {
    id: 3,
    title: 'The Gilded Bean',
    tag: 'Premium Café',
    desc: 'A modern chic patisserie with colorful pastries and elegant gold-accented seating.',
    img: '/luxury_coffee.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Veranda Grill',
    tag: 'Coastal Vibe',
    desc: 'Lush Mediterranean terrace providing sunset views and fresh, vibrant coastal dishes.',
    img: '/mediterranean_grill.png',
    link: '#',
  }
];

export default function DiningCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % diningData.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = diningData[activeIndex];

  return (
    <section className="dining-interactive-section">
      <div className="dining-layout">
        
        {/* LEFT COMPONENT - DYNAMIC MAIN IMAGE */}
        <div className="dining-main-display">
          <img 
            key={activeItem.id} // Force remount for transition effect
            src={activeItem.img} 
            alt={activeItem.title} 
            className="dining-main-img fade-in-animation" 
          />
          <div className="dining-main-overlay"></div>
          <div className="dining-main-content fade-in-up-animation">
            <span className="dining-tag">{activeItem.tag}</span>
            <h3 className="dining-title">{activeItem.title}</h3>
            <p className="dining-desc">{activeItem.desc}</p>
            <a href={activeItem.link} className="dining-link">View Menu</a>
          </div>
        </div>

        {/* RIGHT COMPONENT - STATIC TEXT & CAROUSEL */}
        <div className="dining-right-panel">
          
          {/* Top Text Block */}
          <div className="dining-header-block">
            <h2 className="dining-section-title">Culinary delights</h2>
            <p className="dining-section-desc">From quick bites to gourmet meals, discover something for every palate.</p>
            <a href="#" className="view-all-link">View All</a>
          </div>

          {/* Bottom Carousel Track */}
          <div 
            className="dining-cards-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="dining-cards-track">
              {/* Render items twice for infinite loop effect in CSS, but manage active state manually */}
              {[...diningData, ...diningData].map((item, index) => {
                const actualIndex = index % diningData.length;
                const isActive = actualIndex === activeIndex;
                
                return (
                  <div 
                    key={index} 
                    className={`small-dining-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveIndex(actualIndex)}
                  >
                    <div className="small-card-img-wrapper">
                      <img src={item.img} alt={item.title} className="small-card-img" />
                    </div>
                    <div className="small-card-info">
                      <div className="small-card-logo">🍽️</div>
                      <span className="small-card-title">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
