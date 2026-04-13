"use client";

import { useEffect, useState, useCallback } from "react";

const SLIDER_SLIDES = [
  {
    src: "/images/ab-v2-s1.jpg",
    alt: "Curated retail gallery with warm lighting",
    caption: "Curated arcades",
    line: "Daylight-driven corridors framed in bronze and stone.",
  },
  {
    src: "/images/ab-v2-s2.jpg",
    alt: "Luxury storefronts along a wide interior avenue",
    caption: "Flagship frontage",
    line: "International maisons presented with museum-grade clarity.",
  },
  {
    src: "/images/ab-v2-s3.jpg",
    alt: "Open office and atrium architecture",
    caption: "Volume & calm",
    line: "Ceiling heights and sightlines designed to slow the pace of browsing.",
  },
  {
    src: "/images/ab-v2-s4.jpg",
    alt: "Contemporary mall interior with sculptural forms",
    caption: "Sculptural core",
    line: "A central spine that connects dining, retail, and entertainment levels.",
  },
];

const PILLARS = [
  {
    image: "/images/ab-v2-f1.jpg",
    title: "Global retail edit",
    text: "Flagship and mono-brand spaces chosen for craft, scarcity, and relevance to our city.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21m9-12V5.25A2.25 2.25 0 0015.75 3h-7.5A2.25 2.25 0 006 5.25V9m12 0H6m12 0h1.5m-15 0H3m15 0v6.75A2.25 2.25 0 0115.75 21h-7.5A2.25 2.25 0 006 15.75V9" />
      </svg>
    ),
  },
  {
    image: "/images/ab-v2-f2.jpg",
    title: "Hospitality woven in",
    text: "Chef-led dining, sommelier bars, and quiet lounges between shopping chapters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    image: "/images/ab-v2-f3.jpg",
    title: "Evenings that extend",
    text: "Cinemas, live stages, and late-night terraces—Magneto after dark feels like a second destination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    image: "/images/ab-v2-f4.jpg",
    title: "Service as standard",
    text: "Concierge, personal shopping, valet, and family amenities—luxury is also how you are treated.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];


export default function About() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".about-io");
    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.07 }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = window.setInterval(() => {
      setSlide((s) => (s + 1) % SLIDER_SLIDES.length);
    }, 5400);
    return () => window.clearInterval(t);
  }, []);

  const goSlide = useCallback((i) => setSlide(i), []);

  return (
    <main className="about-page">
      <section className="about-hero" aria-label="About Magneto Mall">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-hero-scrim" aria-hidden="true" />
        <div className="about-hero-mesh" aria-hidden="true" />
        <div className="about-hero-inner">
          <div className="about-hero-row">
            <span className="about-hero-eyebrow">Since opening</span>
            <span className="about-hero-pill">International · Member ICSC</span>
          </div>
          <h1 className="about-hero-title">
            A destination built for
            <br />
            <span className="about-hero-accent">discerning curiosity</span>
          </h1>
          <p className="about-hero-lead">
            Magneto Mall unites global retail, elevated dining, and cultural programming in architecture conceived as a contemporary gallery—open, luminous, and unmistakably premium.
          </p>
          <div className="about-hero-actions">
            <a href="#about-intro" className="about-hero-btn about-hero-btn--primary">
              Our story
            </a>
            <a href="/contact" className="about-hero-btn about-hero-btn--ghost">
              Partner with us
            </a>
          </div>
        </div>
      </section>

      

      <section className="about-metrics about-io" aria-label="Magneto in numbers">
        <div className="about-container">
          <ul className="about-metrics-grid">
            <li className="about-metric">
              <span className="about-metric-value">200+</span>
              <span className="about-metric-label">Boutiques &amp; brands</span>
            </li>
            <li className="about-metric">
              <span className="about-metric-value">5</span>
              <span className="about-metric-label">Retail levels</span>
            </li>
            <li className="about-metric">
              <span className="about-metric-value">2.4M</span>
              <span className="about-metric-label">Annual visits</span>
            </li>
            <li className="about-metric">
              <span className="about-metric-value">450k</span>
              <span className="about-metric-label">Sq ft of experience</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section" id="about-intro" aria-labelledby="about-intro-heading">
        <div className="about-container">
          <div className="about-split about-io">
            <div className="about-split-copy">
              <span className="about-kicker about-kicker--dark">Introduction</span>
              <h2 id="about-intro-heading">Designed as a living gallery</h2>
              <p>
                Every floorplate was modelled around clarity of movement: wide avenues, resting alcoves, and views that pull you toward discovery. We treat the mall
                not as a corridor of stores but as a curated public interior—where light, material, and sound are composed with the same rigour as a cultural institution.
              </p>
              <p>
                That philosophy extends to partnerships: we work closely with brands on façades, pop-ups, and seasonal narratives so the environment always feels
                intentional, never generic.
              </p>
            </div>
            <figure className="about-split-figure">
              <div className="about-split-frame">
                <img src="/images/ab-v2-split-a.jpg" alt="Bright contemporary interior with open plan and natural light" loading="lazy" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="about-section about-section--muted" aria-labelledby="about-vision-heading">
        <div className="about-container">
          <div className="about-split about-split--reverse about-io">
            <figure className="about-split-figure">
              <div className="about-split-frame">
                <img src="/images/ab-v2-split-b.jpg" alt="Modern building façade with glass and warm evening light" loading="lazy" />
              </div>
            </figure>
            <div className="about-split-copy">
              <span className="about-kicker about-kicker--dark">Vision</span>
              <h2 id="about-vision-heading">Global standards, local soul</h2>
              <p>
                Our benchmark is the world’s leading retail capitals—yet Magneto is rooted in this community. We programme music, art, and family weekends that reflect
                regional talent alongside international touring acts.
              </p>
              <p>
                Sustainability and longevity inform our operations: efficient building systems, waste partnerships with our kitchens, and a continuous refresh of the tenant
                mix so the destination stays relevant for decades, not seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-strip about-io" aria-label="The Magneto experience">
        <div className="about-strip-bg" aria-hidden="true" />
        <div className="about-strip-scrim" aria-hidden="true" />
        <div className="about-container about-strip-inner">
          <span className="about-kicker about-kicker--light">Experience</span>
          <h2 className="about-strip-title">Arrive once, stay through the day</h2>
          <p className="about-strip-text">
            Morning coffee on the terrace, midday appointments in private suites, an afternoon exhibition, dinner with skyline views, and a late screening—Magneto is
            orchestrated so time slows down and every hour has its own texture.
          </p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-highlights-heading">
        <div className="about-container">
          <header className="about-block-head about-io">
            <span className="about-kicker about-kicker--dark">Highlights</span>
            <h2 id="about-highlights-heading">What defines us</h2>
            <p className="about-block-lead">
              Four pillars shape every decision—from leasing to lighting—so your visit feels coherent, generous, and quietly luxurious.
            </p>
          </header>
          <ul className="about-pillars">
            {PILLARS.map((p) => (
              <li key={p.title} className="about-pillar about-io">
                <div className="about-pillar-media">
                  <img src={p.image} alt="" loading="lazy" />
                  <div className="about-pillar-icon" aria-hidden="true">
                    {p.icon}
                  </div>
                </div>
                <div className="about-pillar-body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section about-section--gallery" aria-labelledby="about-gallery-heading">
        <div className="about-container">
          <header className="about-block-head about-block-head--on-light about-io">
            <span className="about-kicker about-kicker--dark">On the ground</span>
            <h2 id="about-gallery-heading">Architectural moments</h2>
            <p className="about-block-lead about-block-lead--on-light">
              A glimpse of the volumes, materials, and terraces that make Magneto a reference project in the region.
            </p>
          </header>
          <div className="about-mosaic about-io">
            <figure className="about-mosaic-item about-mosaic-item--tall">
              <img src="/images/ab-v2-g1.jpg" alt="Minimal interior with sculptural staircase" loading="lazy" />
            </figure>
            <figure className="about-mosaic-item">
              <img src="/images/ab-v2-g2.jpg" alt="Bright open interior with large windows" loading="lazy" />
            </figure>
            <figure className="about-mosaic-item">
              <img src="/images/ab-v2-g3.jpg" alt="Contemporary living space with designer furnishings" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <section className="about-cta about-io" aria-label="Connect with Magneto">
        <div className="about-container about-cta-inner">
          <div className="about-cta-copy">
            <h2>Plan your next chapter with us</h2>
            <p>Leasing, activations, press, and guest services—reach the team that shapes Magneto every day.</p>
          </div>
          <a href="/contact" className="about-cta-btn">
            Contact concierge
          </a>
        </div>
      </section>
    </main>
  );
}
