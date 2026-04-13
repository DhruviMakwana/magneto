"use client";

import { useEffect } from "react";

const SUITES = [
  {
    title: "Skyline executive suites",
    text: "Corner glass, acoustic ceilings, and furnished pantries—ideal for HQs bridging retail and back-office teams.",
    image: "/images/offices-suite.jpg",
  },
  {
    title: "Gallery studios",
    text: "Single-floor creative plates with critique walls, cyclorama-ready power, and direct lift access to loading docks.",
    image: "/images/offices-meeting.jpg",
  },
  {
    title: "Concierge lobby arrival",
    text: "Double-height reception, art programme refreshed quarterly, and visitor routing that never crosses retail peak flows.",
    image: "/images/offices-lobby.jpg",
  },
  {
    title: "Hot-desk collaboration wing",
    text: "Acoustic pods, writable walls, and bookable focus rooms for hybrid teams—one badge for office, mall, and parking.",
    image: "/images/offices-feature-cowork.jpg",
  },
  {
    title: "Board & signing suite",
    text: "Private lift, 16-seat table, simultaneous translation feeds, and a green room wired for broadcast-quality recordings.",
    image: "/images/offices-feature-reception.jpg",
  },
  {
    title: "Wellness & recovery floor",
    text: "Daylight gym, physiotherapy partners, mothers' suites, and nap cabins with HEPA—booked through the tenant app.",
    image: "/images/offices-wellness.jpg",
  },
];

const SERVICES = [
  {
    title: "Engineering desk",
    text: "24/7 BMS, fault ticketing, and preventative maintenance aligned with mall operations—one SLA for HVAC, lifts, and power.",
  },
  {
    title: "Connectivity",
    text: "Diverse fibre paths, meet-me rooms, and optional SD-WAN handoffs—pre-cabled to 40 G ready risers on trophy floors.",
  },
  {
    title: "Security & access",
    text: "Turnstile analytics, visitor pre-registration, and retail-event coordination so tenant badges always reflect live risk posture.",
  },
  {
    title: "Sustainability",
    text: "Real-time energy dashboards, EV fleet charging allocation, and waste partnerships shared with Magneto kitchens below.",
  },
];

export default function OfficesPage() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".offices-io");
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.07 }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="offices-page">
      <section className="offices-hero" aria-label="Magneto Offices">
        <div className="offices-hero-bg" aria-hidden="true" />
        <div className="offices-hero-scrim" aria-hidden="true" />
        <div className="offices-hero-inner">
          <span className="offices-kicker">Work above the plaza</span>
          <h1 className="offices-hero-title">Offices at Magneto</h1>
          <p className="offices-hero-lead">
            Grade-A workspace with mall-grade resilience—N+1 power, 24/7 security, tenant clubs, and arrival experiences that feel corporate, not
            borrowed from retail signage.
          </p>
          <div className="offices-hero-actions">
            <a href="/contact" className="offices-btn offices-btn--primary">
              Schedule a tour
            </a>
            <a href="#offices-spec" className="offices-btn offices-btn--ghost">
              View specifications
            </a>
          </div>
        </div>
      </section>

      <section className="offices-stats" aria-label="Office highlights">
        <div className="offices-container">
          <ul className="offices-stats-grid offices-io">
            <li className="offices-stat">
              <strong>32</strong>
              <span>Storeys of workspace</span>
            </li>
            <li className="offices-stat">
              <strong>LEED</strong>
              <span>Gold-target core &amp; shell</span>
            </li>
            <li className="offices-stat">
              <strong>1:8k</strong>
              <span>Raised floor loading</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="offices-section" id="offices-spec" aria-labelledby="offices-spec-heading">
        <div className="offices-container">
          <div className="offices-split offices-io">
            <div className="offices-split-copy">
              <span className="offices-kicker">Specification</span>
              <h2 id="offices-spec-heading">Infrastructure without theatre</h2>
              <p>
                Dual telecom meet-me rooms, N+1 chillers, and floor-by-floor air quality dashboards—everything is monitored from a single Magneto
                engineering desk shared with the mall, so faults never bounce between vendors.
              </p>
              <p>
                Typical plates range from 12,000 to 28,000 sq ft clear span with 3.1 m finished ceilings, low-VOC finishes, and shading fins tuned for
                afternoon glare on south-west faces.
              </p>
            </div>
            <figure className="offices-split-figure">
              <div className="offices-split-frame">
                <img
                  src="/images/offices-split-spec.jpg"
                  alt="Open office floor with desks and natural light"
                  loading="lazy"
                  width={900}
                  height={600}
                />
              </div>
            </figure>
          </div>

          <div className="offices-split offices-split--reverse offices-io">
            <div className="offices-split-copy">
              <span className="offices-kicker">Amenities</span>
              <h2>Tenant life on the podium</h2>
              <p>
                Members&apos; salon, parent rooms, podcast suites, and a rooftop track—all badge-integrated with the retail loyalty programme for
                cross-promotions and guest parking validation.
              </p>
              <p>
                Dedicated shuttles sync with cinema and Club Room peaks so teams can entertain clients without leaving the district; private dining
                holds route through Magneto concierge.
              </p>
            </div>
            <figure className="offices-split-figure">
              <div className="offices-split-frame">
                <img
                  src="/images/offices-split-amenity.jpg"
                  alt="Building amenity space for office tenants"
                  loading="lazy"
                  width={900}
                  height={600}
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="offices-services" aria-labelledby="offices-services-heading">
        <div className="offices-container">
          <header className="fun-section-head offices-services-head offices-io">
            <span className="offices-kicker">Operations</span>
            <h2 id="offices-services-heading">One command layer for the tower</h2>
            <p>Facilities, IT handoffs, and crisis playbooks are written for a mixed-use asset—so your workplace team inherits clarity on day one.</p>
          </header>
          <div className="offices-services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="offices-service-pill offices-io">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offices-section" aria-labelledby="offices-suites-heading">
        <div className="offices-container">
          <header className="fun-section-head offices-io">
            <span className="offices-kicker">Inventory</span>
            <h2 id="offices-suites-heading">Staged suites &amp; floor plates</h2>
            <p>
              Six reference configurations for tours—each with a distinct visual story, furniture palette co-selected with Magneto retail partners, and
              load charts ready for your fit-out architect.
            </p>
          </header>
          <ul className="offices-feature-grid">
            {SUITES.map((s) => (
              <li key={s.title} className="offices-feature-card offices-io">
                <div className="offices-feature-media">
                  <img src={s.image} alt="" width={800} height={600} loading="lazy" />
                </div>
                <div className="offices-feature-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="offices-cta" aria-label="Leasing enquiry">
        <div className="offices-container offices-cta-box offices-io">
          <div>
            <h2>Talk to the Magneto workplace studio</h2>
            <p>
              Brokers, occupiers, and architect teams—request stacking plans, load charts, test-fit overlays, and a same-week walkthrough with engineering
              on the line.
            </p>
          </div>
          <a href="/contact" className="offices-btn offices-btn--primary">
            Email leasing
          </a>
        </div>
      </section>
    </main>
  );
}
