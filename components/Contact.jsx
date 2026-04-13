"use client";

import { useState, useEffect } from "react";
import "./Contact.css";

const MARQUEE_ITEMS = [
  "White-glove concierge",
  "Global retail mix",
  "Private events studio",
  "Same-day guest response",
  "EV valet & charging",
  "Magneto Cinemas late shows",
];

const DEPARTMENTS = [
  {
    id: "guest",
    kicker: "Front desk",
    title: "Guest services",
    desc: "Wheelchair escorts, gift wrap, personal shopping introductions, and cinema wayfinding—hosted in four languages daily.",
    image: "/images/contact-v2-concierge.jpg",
    alt: "Hotel-style concierge lobby with warm lighting",
    cta: "Call concierge",
    href: "tel:+18005550199",
  },
  {
    id: "leasing",
    kicker: "Partnerships",
    title: "Leasing & media",
    desc: "Flagship retail, F&B residencies, and brand activations across the Grand Plaza and east gallery arcades.",
    image: "/images/contact-v2-leasing.jpg",
    alt: "Bright contemporary office space with city views",
    cta: "Email leasing",
    href: "mailto:leasing@magnetomall.example",
  },
  {
    id: "events",
    kicker: "Activations",
    title: "Events & culture",
    desc: "Run-of-show production, permits, load-in logistics, and broadcast-ready lighting for launches up to 3,500 guests.",
    image: "/images/contact-v2-events.jpg",
    alt: "Conference hall prepared for a live audience",
    cta: "Plan an event",
    href: "mailto:events@magnetomall.example",
  },
  {
    id: "dining",
    kicker: "Hospitality",
    title: "Dining & night",
    desc: "Chef residencies, Magneto Clubroom tables, and cinema F&B—coordinate tastings, buyouts, and bottle service.",
    image: "/images/contact-v2-dining.jpg",
    alt: "Upscale restaurant interior with ambient lighting",
    cta: "Message dining",
    href: "mailto:dining@magnetomall.example",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".contact-io");
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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
    e.currentTarget.reset();
    window.setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero" aria-label="Contact Magneto Mall">
        <div className="contact-hero-bg" />
        <div className="contact-hero-scrim" aria-hidden="true" />
        <div className="contact-hero-bokeh" aria-hidden="true" />
        <div className="contact-hero-grain" aria-hidden="true" />
        <div className="contact-hero-inner">
          <div className="contact-hero-pills">
            <span className="contact-hero-season">Guest relations</span>
            <span className="contact-hero-dot" aria-hidden="true" />
            <span className="contact-hero-live">UTC−5 · English · Español · 中文</span>
          </div>
          <p className="contact-hero-eyebrow">Contact</p>
          <h1 className="contact-hero-title">
            Arrive with clarity, <em className="contact-hero-accent">leave with ease</em>
          </h1>
          <p className="contact-hero-lead">
            One address for concierge, leasing, activations, and cinema hospitality. We route every note to the right studio desk—typically within one business day.
          </p>
          <div className="contact-hero-actions">
            <a className="contact-hero-btn contact-hero-btn--primary" href="#contact-form">
              Send a message
            </a>
            <a className="contact-hero-btn contact-hero-btn--ghost" href="#contact-map">
              View map
            </a>
          </div>
        </div>
      </section>

      <div className="contact-marquee" aria-hidden="true">
        <div className="contact-marquee-inner">
          <div className="contact-marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="contact-marquee-group">
                {MARQUEE_ITEMS.map((label, i) => (
                  <span key={`${dup}-${i}`}>{label}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="contact-stats" aria-label="At a glance">
        <div className="contact-container">
          <ul className="contact-stats-grid contact-io">
            <li className="contact-stat-card">
              <span className="contact-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <strong className="contact-stat-value">10 AM – 10 PM</strong>
                <span className="contact-stat-label">Mall hours, seven nights</span>
              </div>
            </li>
            <li className="contact-stat-card">
              <span className="contact-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <div>
                <strong className="contact-stat-value">+1 (800) 555-0199</strong>
                <span className="contact-stat-label">Priority guest line</span>
              </div>
            </li>
            <li className="contact-stat-card">
              <span className="contact-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 003 0m-3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 003 0m-3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.25 2.25 0 00-1.227-1.087l-.72-.267a3.733 3.733 0 01-2.652-.863l-.422-.42a3.733 3.733 0 00-2.652-.863h-.298a3.733 3.733 0 00-2.652.863l-.422.42a3.733 3.733 0 01-2.652.863H6.75" />
                </svg>
              </span>
              <div>
                <strong className="contact-stat-value">B1 – B3 parking</strong>
                <span className="contact-stat-label">EV bays · east ramp validation</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-body" aria-labelledby="contact-main-heading">
        <div className="contact-container">
          <header className="contact-body-head contact-io">
            <span className="contact-kicker">Connect</span>
            <h2 id="contact-main-heading" className="contact-body-title">
              Message, details, and directions—in one view
            </h2>
            <p className="contact-body-lead">
              Share your request on the left; keep address, phone, and map context alongside for a seamless handoff to our guest teams.
            </p>
          </header>

          <div className="contact-layout">
            <div id="contact-form" className="contact-form-column contact-io">
              <div className="contact-panel contact-form-panel">
                <div className="contact-form-head">
                  <span className="contact-form-kicker">Private note</span>
                  <h3 className="contact-panel-title contact-panel-title--form">Send a message</h3>
                  <p className="contact-panel-sub">Mall-style routing—share how we should reach you and the team that should own the reply.</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row contact-form-row--triple">
                    <label className="contact-field">
                      <span>Full name</span>
                      <input type="text" name="name" required autoComplete="name" placeholder="As on your ID or badge" />
                    </label>
                    <label className="contact-field">
                      <span>Email</span>
                      <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
                    </label>
                    <label className="contact-field">
                      <span>Phone</span>
                      <input type="tel" name="phone" autoComplete="tel" placeholder="Include country code" />
                    </label>
                  </div>
                  <label className="contact-field">
                    <span>Subject</span>
                    <input type="text" name="subject" required maxLength={200} placeholder="Short summary for our inbox" />
                  </label>
                  <label className="contact-field">
                    <span>Inquiry type</span>
                    <select name="inquiryType" className="contact-select" required defaultValue="">
                      <option value="" disabled>
                        Select inquiry type
                      </option>
                      <option value="visit">Visit, parking &amp; directions</option>
                      <option value="guest">Guest services &amp; concierge</option>
                      <option value="leasing">Leasing, retail &amp; F&amp;B</option>
                      <option value="events">Events, activations &amp; partnerships</option>
                      <option value="cinema">Cinemas &amp; private screenings</option>
                      <option value="club">Club Room &amp; nightlife</option>
                      <option value="offices">Offices &amp; workplace</option>
                      <option value="feedback">Feedback &amp; compliments</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label className="contact-field">
                    <span>Message</span>
                    <textarea name="message" required rows={6} placeholder="Tell us dates, store names, or any reference numbers." />
                  </label>
                  <button type="submit" className="contact-submit">
                    Submit inquiry
                  </button>
                  {status === "sent" ? (
                    <p className="contact-feedback" role="status">
                      Thank you—your message has been received.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>

            <aside className="contact-aside" aria-label="Location and map">
              <div className="contact-aside-stack">
                <div className="contact-panel contact-details-panel contact-io">
                  <span className="contact-aside-kicker">Visit</span>
                  <h3 className="contact-panel-title contact-panel-title--aside">Reach us</h3>
                  <ul className="contact-details-list">
                <li className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Address</strong>
                    <p>Magneto Mall, Grand Plaza Level 1, City Centre District</p>
                  </div>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+18005550199">+1 (800) 555-0199</a>
                    </p>
                  </div>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:concierge@magnetomall.example">concierge@magnetomall.example</a>
                    </p>
                  </div>
                </li>
              </ul>
                </div>

                <div id="contact-map" className="contact-map contact-io">
                  <div className="contact-map-head">
                    <span className="contact-map-kicker">Arrival</span>
                    <h3 className="contact-map-title">Getting here</h3>
                    <p className="contact-map-lead">Preview the district—switch to your preferred maps app on mobile for turn-by-turn routing.</p>
                  </div>
                  <div className="contact-map-frame">
                    <iframe
                      title="Map preview — Magneto Mall area"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.48%2C-0.05%2C51.54&amp;layer=mapnik"
                      loading="lazy"
                    />
                  </div>
                  <p className="contact-map-note">Map data © OpenStreetMap contributors</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-departments" aria-labelledby="contact-dept-heading">
        <div className="contact-container">
          <header className="contact-dept-head contact-io">
            <span className="contact-kicker">Studios</span>
            <h2 id="contact-dept-heading" className="contact-dept-title">
              Dedicated teams for every reason you write
            </h2>
            <p className="contact-dept-lead">
              Choose the lane that matches your request—each studio shares notes internally so you never repeat yourself.
            </p>
          </header>
          <ul className="contact-dept-grid">
            {DEPARTMENTS.map((d, index) => (
              <li key={d.id} className={`contact-dept-card contact-io contact-io--delay-${Math.min(index, 3)}`}>
                <div className="contact-dept-media">
                  <img src={d.image} alt={d.alt} loading="lazy" width={640} height={420} />
                  <div className="contact-dept-scrim" aria-hidden="true" />
                </div>
                <div className="contact-dept-body">
                  <span className="contact-dept-kicker">{d.kicker}</span>
                  <h3 className="contact-dept-name">{d.title}</h3>
                  <p className="contact-dept-desc">{d.desc}</p>
                  <a className="contact-dept-cta" href={d.href}>
                    {d.cta}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-bottom-cta contact-io" aria-label="Plan a private visit">
        <div className="contact-container">
          <div className="contact-bottom-inner">
            <div className="contact-bottom-copy">
              <span className="contact-kicker contact-kicker--on-dark">By appointment</span>
              <h2 className="contact-bottom-title">Tour Magneto with a host</h2>
              <p className="contact-bottom-text">
                Leasing walks, press previews, and VIP cinema experiences are scheduled in 45-minute windows—tell us your arrival corridor and we will stage the route.
              </p>
            </div>
            <a className="contact-bottom-btn" href="mailto:visits@magnetomall.example">
              Request a walkthrough
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
