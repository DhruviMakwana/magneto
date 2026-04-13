"use client";

import { useEffect } from "react";

const highlights = [
  {
    id: "h1",
    eyebrow: "Limited offer",
    title: "Weekend valet & lounge access",
    subtitle: "Complimentary priority parking when you RSVP to any April headline event.",
    cta: "Claim offer",
    href: "/contact",
    image: "/images/ev-highlight-01.jpg",
  },
  {
    id: "h2",
    eyebrow: "Members only",
    title: "Double rewards on festival nights",
    subtitle: "Earn twice the points on dining and retail when you check in after 6 PM.",
    cta: "Join the club",
    href: "/contact",
    image: "/images/ev-highlight-02.jpg",
  },
];

const featured = [
  {
    id: 101,
    title: "Magneto Spring Gala",
    tag: "Gala · Atrium",
    day: "22",
    month: "Apr",
    time: "7:00 PM onwards",
    desc: "Black-tie optional, live orchestra, and a chef’s table preview of summer menus from twelve signature restaurants.",
    image: "/images/ev-feature-01.jpg",
  },
  {
    id: 102,
    title: "Neon Nights Runway",
    tag: "Fashion · Live",
    day: "05",
    month: "May",
    time: "8:30 PM",
    desc: "Regional couture meets global streetwear—closing show with a drone light sequence above the central dome.",
    image: "/images/ev-feature-02.jpg",
  },
];

const upcoming = [
  {
    id: 1,
    title: "Spring Runway Live",
    day: "18",
    month: "Apr",
    tag: "Fashion",
    image: "/images/ev-upcoming-01.jpg",
    desc: "Front-row energy with regional designers, live styling, and limited pop-up capsules.",
  },
  {
    id: 2,
    title: "Jazz Under the Dome",
    day: "25",
    month: "Apr",
    tag: "Music",
    image: "/images/ev-upcoming-02.jpg",
    desc: "An intimate evening of acoustic jazz, sparkling lights, and chef-curated small plates.",
  },
  {
    id: 3,
    title: "Design & Tech Salon",
    day: "28",
    month: "Apr",
    tag: "Culture",
    image: "/images/ev-upcoming-03.jpg",
    desc: "Panel talks, AR installations, and meet-the-maker demos across Level 2 galleries.",
  },
  {
    id: 4,
    title: "Family Fest Weekend",
    day: "02",
    month: "May",
    tag: "Kids & family",
    image: "/images/ev-upcoming-04.jpg",
    desc: "Interactive workshops, character parades, and safe play zones across the central atrium.",
  },
  {
    id: 5,
    title: "Night Market Luxe",
    day: "10",
    month: "May",
    tag: "Lifestyle",
    image: "/images/ev-upcoming-05.jpg",
    desc: "Artisan makers, gourmet bites, and late-night shopping with live DJs until midnight.",
  },
  {
    id: 6,
    title: "Summer Wine Walk",
    day: "17",
    month: "May",
    tag: "Dining",
    image: "/images/ev-upcoming-06.jpg",
    desc: "Guided tasting route with sommelier notes and small plates from Magneto’s wine partners.",
  },
];

export default function EventsPage() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".events-io");
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
    <main className="events-page">
      <section className="events-hero" aria-label="Events at Magneto Mall">
        <div className="events-hero-bg" aria-hidden="true" />
        <div className="events-hero-scrim" aria-hidden="true" />
        <div className="events-hero-bokeh" aria-hidden="true" />
        <div className="events-hero-inner">
          <div className="events-hero-pills">
            <span className="events-hero-season">Spring season 2026</span>
            <span className="events-hero-dot" aria-hidden="true" />
            <span className="events-hero-live">Live · Limited seats</span>
          </div>
          <span className="events-hero-eyebrow">Festivals &amp; experiences</span>
          <h1 className="events-hero-title">The city&apos;s stage, under our dome</h1>
          <p className="events-hero-lead">
            International-calibre productions, brand-first activations, and family weekends—curated so every visit feels like opening night.
          </p>
          <div className="events-hero-actions">
            <a href="#events-featured" className="events-hero-btn events-hero-btn--primary">
              Featured events
            </a>
            <a href="#events-upcoming-heading" className="events-hero-btn events-hero-btn--ghost">
              Full calendar
            </a>
          </div>
        </div>
      </section>

      <section className="events-highlights events-io" aria-label="Offers and promotions">
        <div className="events-container">
          <ul className="events-highlight-grid">
            {highlights.map((h) => (
              <li key={h.id} className="events-highlight-card">
                <div className="events-highlight-media">
                  <img src={h.image} alt="" width={1200} height={600} loading="lazy" />
                  <div className="events-highlight-scrim" aria-hidden="true" />
                </div>
                <div className="events-highlight-body">
                  <span className="events-highlight-eyebrow">{h.eyebrow}</span>
                  <h2 className="events-highlight-title">{h.title}</h2>
                  <p className="events-highlight-sub">{h.subtitle}</p>
                  <a href={h.href} className="events-highlight-cta">
                    {h.cta} →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="events-body" aria-labelledby="events-featured-heading">
        <div className="events-container">
          <header className="events-section-head events-io" id="events-featured">
            <span className="events-kicker">Headline calendar</span>
            <h2 id="events-featured-heading">Featured events</h2>
            <p>Reserved seating and hospitality add-ons for our signature evenings—book early as capacity is intentionally limited.</p>
          </header>

          <ul className="events-featured-list">
            {featured.map((f, i) => (
              <li key={f.id} className={`events-feature-card events-io events-feature-card--${i === 0 ? "a" : "b"}`}>
                <div className="events-feature-media">
                  <img src={f.image} alt="" width={1000} height={667} loading="lazy" />
                  <div className="events-feature-date" aria-hidden="true">
                    <span className="day">{f.day}</span>
                    <span className="mon">{f.month}</span>
                  </div>
                </div>
                <div className="events-feature-content">
                  <span className="events-feature-tag">{f.tag}</span>
                  <h3 className="events-feature-title">{f.title}</h3>
                  <p className="events-feature-time">{f.time}</p>
                  <p className="events-feature-desc">{f.desc}</p>
                  <div className="events-feature-actions">
                    <a href="/contact" className="events-btn-primary">
                      Book now
                    </a>
                    <a href="#events-upcoming-heading" className="events-btn-ghost">
                      More dates
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <header className="events-section-head events-section-head--spaced events-io">
            <span className="events-kicker">Save the date</span>
            <h2 id="events-upcoming-heading">Upcoming at Magneto</h2>
            <p>Six curated experiences this season—swipe on mobile or explore the grid on desktop.</p>
          </header>
        </div>

        <div className="events-scroll-wrap">
          <div className="events-upcoming-grid" role="list">
            {upcoming.map((e) => (
              <article key={e.id} className="event-card events-io" role="listitem">
                <div className="event-card-image">
                  <img src={e.image} alt={`${e.title} event`} width={800} height={1000} loading="lazy" />
                </div>
                <div className="event-card-overlay" aria-hidden="true" />
                <div className="event-card-date">
                  <span className="day">{e.day}</span>
                  <span className="mon">{e.month}</span>
                </div>
                <div className="event-card-body">
                  <span className="event-card-tag">{e.tag}</span>
                  <h3 className="event-card-title">{e.title}</h3>
                  <p className="event-card-desc">{e.desc}</p>
                  <a href="/contact" className="event-card-cta">
                    Reserve access →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        
      </section>
    </main>
  );
}
