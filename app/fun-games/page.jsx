"use client";

import { useEffect } from "react";

const FEATURES = [
  {
    title: "Arcade constellation",
    tag: "Level 3 · East gallery",
    text: "Rhythm cabinets, retro walls, and ticket redemption curated like a design exhibition—host escorts for birthday lanes.",
    image: "/images/fun-games-arcade.jpg",
  },
  {
    title: "VR & simulation bay",
    tag: "Timed sessions",
    text: "Zero-latency headsets, motion platforms, and a concierge desk that stages corporate team rounds in 30-minute blocks.",
    image: "/images/fun-games-vr.jpg",
  },
  {
    title: "Junior discovery lab",
    tag: "Family mornings",
    text: "Soft-play ateliers, tactile science tables, and quiet pods for carers—sanitised on a published clock.",
    image: "/images/fun-games-kids.jpg",
  },
  {
    title: "Boutique bowling",
    tag: "Evenings · 21+ lanes",
    text: "Lane-side dining, craft taps, and a vinyl soundtrack—shoe lounge with heated benches and monogrammed socks on request.",
    image: "/images/fun-games-bowling.jpg",
  },
  {
    title: "Laser arena · Prism Run",
    tag: "Bookable squads",
    text: "Multi-level maze, smoke-safe haze, and referees who coach first-timers—corporate leagues and school groups welcome.",
    image: "/images/fun-attr-laser.jpg",
  },
  {
    title: "Esports lounge",
    tag: "Stream-ready booths",
    text: "Low-latency rigs, shoutcaster desk, and replay walls for watch parties—F&amp;B from Level 2 delivered to the booth.",
    image: "/images/fun-attr-esports.jpg",
  },
  {
    title: "Prize & redemption gallery",
    tag: "Ticket to treasure",
    text: "Limited-run collabs with mall retailers—rare vinyl, designer plush, and seasonal pop-ups beside the classic wall.",
    image: "/images/fun-attr-redemption.jpg",
  },
];

const STATS = [
  { value: "18+", label: "Attractions & lanes" },
  { value: "7 days", label: "Timed entry & hosts" },
  { value: "Mall F&B", label: "Delivery to your game" },
  { value: "Private", label: "Cabanas & buyouts" },
];

const PASSES = [
  {
    tag: "Most popular",
    title: "Family afternoon",
    text: "Four hours, two attractions, juice refills, and a dedicated host for queue management during peak windows.",
  },
  {
    tag: "Corporate",
    title: "Team circuit",
    text: "Bowling draft, VR relay, laser relay leg, and a debrief lounge with tasting bites—AV stages welcome loops and branded scoreboards.",
  },
  {
    tag: "Teen nights",
    title: "Friday arcade pass",
    text: "Extended hours, DJ in the concourse, and moderated esports brackets—parent SMS check-in at arrival and pickup.",
  },
];

export default function FunGamesPage() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".fun-io");
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
    <main className="fun-page">
      <section className="fun-hero" aria-label="Fun and Games at Magneto">
        <div className="fun-hero-bg" aria-hidden="true" />
        <div className="fun-hero-scrim" aria-hidden="true" />
        <div className="fun-hero-inner">
          <span className="fun-kicker">Play · Compete · Celebrate</span>
          <h1 className="fun-hero-title">Fun &amp; Games</h1>
          <p className="fun-hero-lead">
            A dedicated entertainment deck inside Magneto—arcades, VR, bowling, and ticketed arenas with mall-wide F&amp;B, timed entries, and hosts who
            keep the floor feeling premium, not crowded.
          </p>
          <div className="fun-hero-actions">
            <a href="/contact" className="fun-btn fun-btn--primary">
              Book a lane
            </a>
            <a href="#fun-experiences" className="fun-btn fun-btn--ghost">
              Explore experiences
            </a>
          </div>
        </div>
      </section>

      <section className="fun-stats-strip" aria-label="Fun and Games at a glance">
        <ul className="fun-stats-inner">
          {STATS.map((s) => (
            <li key={s.label} className="fun-stat-block">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="fun-strip-banner fun-io" aria-labelledby="fun-strip-heading">
        <div className="fun-strip-banner__inner">
          <div className="fun-strip-banner__bg" aria-hidden="true" />
          <div className="fun-strip-banner__scrim" aria-hidden="true" />
          <div className="fun-strip-banner__copy">
            <span className="fun-kicker">Inside the mall</span>
            <h2 id="fun-strip-heading">Same roof as retail &amp; dining</h2>
            <p>
              Enter from the Grand Plaza escalators or the east parking bridge—strollers, shopping bags, and birthday cakes move on separate lanes so
              families never feel rushed.
            </p>
          </div>
        </div>
      </section>

      <section className="fun-section" id="fun-experiences" aria-labelledby="fun-exp-heading">
        <div className="fun-container">
          <header className="fun-section-head fun-io">
            <span className="fun-kicker">Experiences</span>
            <h2 id="fun-exp-heading">Attractions you can mix in one visit</h2>
            <p>
              Every experience below has its own trained team, sound cap, and cleaning cadence—swap wristbands at the central desk and keep one tab for
              the group.
            </p>
          </header>
          <ul className="fun-grid fun-grid--3">
            {FEATURES.map((f) => (
              <li key={f.title} className="fun-card fun-io">
                <div className="fun-card-media">
                  <img src={f.image} alt="" width={960} height={600} loading="lazy" />
                </div>
                <div className="fun-card-body">
                  <span className="fun-card-tag">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fun-section" aria-labelledby="fun-host-heading">
        <div className="fun-container">
          <div className="fun-story-split fun-io">
            <div className="fun-story-media">
              <img src="/images/fun-party-host.jpg" alt="Private party hosting space at Magneto" width={1200} height={700} loading="lazy" />
            </div>
            <div className="fun-story-body">
              <span className="fun-kicker">Hosted celebrations</span>
              <h2 id="fun-host-heading">Parties with a floor manager, not a clipboard</h2>
              <p>
                Birthdays, team wins, and product launches get a single Magneto play producer—timeline, catering handoffs, photography angles, and
                security briefs are rehearsed before guests arrive.
              </p>
              <p>
                Add-ons include character meet-and-greets, custom redemption prizes, and after-hours bowling with a private DJ feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fun-section fun-section--muted" aria-labelledby="fun-pass-heading">
        <div className="fun-container">
          <header className="fun-section-head fun-io">
            <span className="fun-kicker">Passes</span>
            <h2 id="fun-pass-heading">Magneto Play Circle</h2>
            <p>
              Reloadable wristbands, sibling bundles, and school-holiday passports—credits work across arcade, VR, bowling, laser, and redemption with one
              statement.
            </p>
          </header>
          <ul className="fun-pass-grid">
            {PASSES.map((p) => (
              <li key={p.title} className="fun-pass-card fun-io">
                <span className="fun-card-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fun-cta" aria-label="Plan a celebration">
        <div className="fun-container fun-cta-inner fun-io">
          <div>
            <h2>School groups &amp; summer camps</h2>
            <p>Chaperone ratios, wristband colours, and staggered arena entries—we coordinate with mall security and your bus bay so arrival feels calm.</p>
          </div>
          <a href="/contact" className="fun-btn fun-btn--primary">
            Enquire now
          </a>
        </div>
      </section>
    </main>
  );
}
