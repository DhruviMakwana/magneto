"use client";

import { useEffect } from "react";

const MARQUEE_ITEMS = ["Bottle service", "Guest list", "VIP skyboxes", "Late kitchen", "Craft cocktails", "Sound by night"];

const FEATURED = [
  {
    id: "dj",
    title: "Resident DJ nights",
    tag: "Thu – Sat · Late",
    desc: "House, disco edits, and global club cuts on a Funktion-One stack—tables release at midnight for the dance floor.",
    image: "/images/club-feat-dj.jpg",
  },
  {
    id: "live",
    title: "Live & unplugged",
    tag: "Sundays · 8 PM",
    desc: "Intimate sets, horns, and vocalists in low light—cocktail service pauses only between encores.",
    image: "/images/club-feat-live.jpg",
  },
  {
    id: "party",
    title: "Signature white parties",
    tag: "Seasonal",
    desc: "Confetti cannons, LED rigging, and bottle parades—guest list and dress code announced two weeks ahead.",
    image: "/images/club-feat-party.jpg",
  },
];

const HIGHLIGHTS = [
  {
    title: "Premium pours",
    text: "Champagne, rare agave, and cellar wines poured table-side—ice programs tuned for clarity and slow dilution.",
    image: "/images/club-hl-drinks.jpg",
  },
  {
    title: "Nocturnal ambience",
    text: "Velvet, brass, mirror, and controlled haze—lighting scenes shift every twenty minutes without stealing the room.",
    image: "/images/club-hl-ambience.jpg",
  },
  {
    title: "Booths & skyboxes",
    text: "Semi-private lounges with dedicated hosts, sightlines to the stage, and acoustic treatment you can feel, not hear.",
    image: "/images/club-hl-seat.jpg",
  },
];

const VENUE_SECTIONS = [
  {
    id: "bars",
    kicker: "Bars",
    title: "High-energy pours",
    lead: "Late-night bars with craft cocktails, sparklers, and bartenders who choreograph the room.",
    items: [
      {
        id: "b1",
        name: "Velvet & Quartz",
        vibe: "Electro-luxe · cocktail lab",
        desc: "Neon under quartz bars, rotating gin matrix, and a back-bar library of small-batch bitters.",
        image: "/images/club-ven-01.jpg",
      },
      {
        id: "b2",
        name: "Neon Courtyard",
        vibe: "Open-air · DJ adjacent",
        desc: "Terrace spritz menu, mist fans, and a direct line of sight to the main stage—smoke-friendly zones after eleven.",
        image: "/images/club-ven-05.jpg",
      },
    ],
  },
  {
    id: "wine",
    kicker: "Wine",
    title: "Cellars after dark",
    lead: "Sommelier-led flights, magnums on ice, and low-tempo soundtracks for conversation.",
    items: [
      {
        id: "w1",
        name: "Magneto Reserve",
        vibe: "Old World focus",
        desc: "Burgundy and Piedmont verticals, coravin by the glass, and cheese service until last seating.",
        image: "/images/club-ven-02.jpg",
      },
      {
        id: "w2",
        name: "Cellar Key",
        vibe: "Natural & orange",
        desc: "Low-intervention wall, vinyl-only playlist, and a midnight snack menu from the bakery below.",
        image: "/images/club-ven-06.jpg",
      },
    ],
  },
  
];

export default function ClubroomPage() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".club-io");
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="club-page">
      <section className="club-hero" aria-label="Magneto Club Room">
        <div className="club-hero-bg" aria-hidden="true" />
        <div className="club-hero-scrim" aria-hidden="true" />
        <div className="club-hero-neon club-hero-neon--a" aria-hidden="true" />
        <div className="club-hero-neon club-hero-neon--b" aria-hidden="true" />
        <div className="club-hero-gridlines" aria-hidden="true" />
        <div className="club-hero-inner">
          <div className="club-hero-pills">
            <span className="club-hero-pill">Level 5 · After dark</span>
            <span className="club-hero-dot" aria-hidden="true" />
            <span className="club-hero-pill club-hero-pill--dim">Dress smart · 21+</span>
          </div>
          <h1 className="club-hero-title">
            Magneto <span className="club-hero-glow">Club Room</span>
          </h1>
          <p className="club-hero-lead">
            Bars, wine rooms, a main-floor club, and velvet lounges—one nightlife district with separate doors, shared guest list, and concierge until the last cab line clears.
          </p>
          <div className="club-hero-actions">
            <a href="/contact" className="club-btn club-btn--gold">
              Reserve a table
            </a>
            <a href="#club-featured" className="club-btn club-btn--outline">
              Tonight&apos;s lineup
            </a>
          </div>
        </div>
      </section>

      <section className="club-marquee club-io" aria-label="Nightlife services and amenities">
        <div className="club-marquee-inner">
          <div className="club-marquee-track" role="presentation">
            <span className="club-marquee-group">
              {MARQUEE_ITEMS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
            <span className="club-marquee-group" aria-hidden="true">
              {MARQUEE_ITEMS.map((t) => (
                <span key={`${t}-b`}>{t}</span>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section className="club-featured-wrap" id="club-featured" aria-labelledby="club-featured-heading">
        <div className="club-container">
          <header className="club-section-head club-io">
            <span className="club-kicker">Featured nights</span>
            <h2 id="club-featured-heading">Experiences that own the weekend</h2>
            <p className="club-section-lead">Curated programming with production, hospitality, and sound treated like a touring show—not an add-on.</p>
          </header>
          <ul className="club-featured-grid">
            {FEATURED.map((f) => (
              <li key={f.id} className="club-feature-card club-io">
                <div className="club-feature-media">
                  <img src={f.image} alt="" width={1000} height={667} loading="lazy" />
                  <div className="club-feature-scrim" aria-hidden="true" />
                </div>
                <div className="club-feature-body">
                  <span className="club-feature-tag">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <a href="/contact" className="club-feature-cta">
                    Enquire →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="club-highlights" aria-label="Premium nightlife highlights">
        <div className="club-container">
          <header className="club-section-head club-section-head--tight club-io">
            <span className="club-kicker">The standard</span>
            <h2>Drinks, ambience, seating</h2>
            <p className="club-section-lead">Three reasons guests extend their nights—and return with a new crowd the week after.</p>
          </header>
          <ul className="club-highlight-grid">
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className="club-highlight-card club-io">
                <div className="club-highlight-media">
                  <img src={h.image} alt="" width={900} height={600} loading="lazy" />
                </div>
                <div className="club-highlight-body">
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="club-venues"> 
        {VENUE_SECTIONS.map((sec) => (
          <section key={sec.id} className="club-venue-section" aria-labelledby={`club-${sec.id}-heading`}>
            <div className="club-container">
              <header className="club-venue-head club-io">
                <span className="club-kicker">{sec.kicker}</span>
                <h2 id={`club-${sec.id}-heading`}>{sec.title}</h2>
                <p className="club-venue-lead">{sec.lead}</p>
              </header>
              <ul className={`club-venue-grid club-venue-grid--${sec.items.length}`}>
                {sec.items.map((v) => (
                  <li key={v.id} className="club-venue-card club-io">
                    <div className="club-venue-media">
                      <img src={v.image} alt="" width={800} height={600} loading="lazy" />
                      <div className="club-venue-glow" aria-hidden="true" />
                    </div>
                    <div className="club-venue-body">
                      <span className="club-venue-vibe">{v.vibe}</span>
                      <h3>{v.name}</h3>
                      <p>{v.desc}</p>
                      <a href="/contact" className="club-venue-cta">
                        Book this room
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="club-cta club-io" aria-label="Private events">
        <div className="club-container club-cta-inner">
          <div className="club-cta-copy">
            <h2>Buyouts &amp; brand nights</h2>
            <p>Full-floor takeovers, product launches, and artist after-parties—production, security, and F&amp;B routed through one Magneto nightlife desk.</p>
          </div>
          <a href="/contact" className="club-btn club-btn--gold">
            Plan an event
          </a>
        </div>
      </section>
    </main>
  );
}
