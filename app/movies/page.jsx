"use client";

import { useEffect, useMemo } from "react";

const ALL_MOVIES = [
  {
    id: 1,
    title: "Nocturne in Gold",
    genre: "Drama · IMAX",
    rating: "UA",
    duration: "2h 28m",
    poster: "/images/mv-poster-01.jpg",
    times: ["10:30 AM", "1:45 PM", "7:00 PM", "10:15 PM"],
    synopsis:
      "A reclusive composer returns to Vienna as her past collides with the present—shot on 65mm with a score recorded live at Magneto Hall.",
    category: "family",
  },
  {
    id: 2,
    title: "The Last Premiere",
    genre: "Thriller",
    rating: "A",
    duration: "1h 58m",
    poster: "/images/mv-poster-02.jpg",
    times: ["11:00 AM", "4:20 PM", "9:30 PM"],
    synopsis:
      "One screening. One locked auditorium. Critics vanish one by one in this claustrophobic arthouse hit from last year’s Venice slate.",
    category: "thriller",
  },
  {
    id: 3,
    title: "Starline Express",
    genre: "Animated · 4DX",
    rating: "UA 13+",
    duration: "2h 12m",
    poster: "/images/mv-poster-03.jpg",
    times: ["12:15 PM", "3:30 PM", "6:45 PM", "9:50 PM"],
    synopsis:
      "Hand-painted vistas, practical miniatures, and a synth-heavy soundtrack—feel every turn in our flagship 4DX auditorium.",
    category: "animated",
  },
  {
    id: 4,
    title: "Velvet Horizon",
    genre: "Romance",
    rating: "U",
    duration: "1h 44m",
    poster: "/images/mv-poster-04.jpg",
    times: ["10:00 AM", "5:00 PM"],
    synopsis:
      "Sun-drenched coastlines and whispered promises—an intimate story told in long, luminous frames and natural light.",
    category: "family",
  },
  {
    id: 5,
    title: "Midnight Circuit",
    genre: "Action · Dolby Atmos",
    rating: "UA",
    duration: "2h 06m",
    poster: "/images/mv-poster-05.jpg",
    times: ["1:00 PM", "4:15 PM", "8:00 PM", "11:30 PM"],
    synopsis:
      "Neon chases through three continents; bass you feel in your chest—reference-grade Atmos mix approved by the director.",
    category: "thriller",
  },
  {
    id: 6,
    title: "Echoes of April",
    genre: "Mystery",
    rating: "UA 7+",
    duration: "1h 52m",
    poster: "/images/mv-poster-06.jpg",
    times: ["11:45 AM", "2:30 PM", "7:30 PM"],
    synopsis:
      "A small town, a missing diary, and timelines that refuse to line up—crafted for viewers who love a second watch.",
    category: "thriller",
  },
  {
    id: 7,
    title: "Lumina & the Sky Workshop",
    genre: "Animated · Dolby Vision",
    rating: "U",
    duration: "1h 39m",
    poster: "/images/movie-poster-1.jpg",
    times: ["10:15 AM", "12:45 PM", "3:10 PM", "6:00 PM"],
    synopsis:
      "A young inventor repairs constellions above the city—colour graded for laser projection with a live orchestra weekend.",
    category: "animated",
  },
  {
    id: 8,
    title: "Paper Wings over Monsoon City",
    genre: "Animated · IMAX Family",
    rating: "U",
    duration: "1h 48m",
    poster: "/images/mv-poster-07.jpg",
    times: ["9:45 AM", "12:20 PM", "3:40 PM", "6:15 PM"],
    synopsis:
      "Folded-paper heroes glide through monsoon skies—hand-drawn rain, percussion from live tabla sessions, and a score mixed for our smallest guests.",
    category: "animated",
  },
  {
    id: 9,
    title: "The Lighthouse Keepers",
    genre: "Family · Adventure",
    rating: "U",
    duration: "1h 56m",
    poster: "/images/mv-poster-08.jpg",
    times: ["10:00 AM", "1:30 PM", "4:45 PM"],
    synopsis:
      "Three siblings restore a coastal light together—gentle humour, practical effects, and a Sunday-morning tone built for grandparents and kids side by side.",
    category: "family",
  },
];

const MOVIE_CATEGORY_SECTIONS = [
  {
    slug: "thriller",
    eyebrow: "Pulse & tension",
    title: "Thriller",
    lead: "Late shows, velvet seats, and mixes that let silence do the talking—programmed for viewers who love the long exhale.",
    useBand: true,
    movieIds: [2, 5, 6],
  },
  {
    slug: "animated",
    eyebrow: "Colour & motion",
    title: "Animated",
    lead: "Family premieres and collector editions—laser stacks tuned for ink lines, gradients, and wide colour volume.",
    useBand: false,
    movieIds: [3, 7, 8],
  },
  {
    slug: "family",
    eyebrow: "All together",
    title: "Family",
    lead: "Matinees, softer levels in the front rows, and intermission treats from the Magneto confectionery—easy on younger ears.",
    useBand: true,
    movieIds: [1, 4, 9],
  },
];

function movieById(id) {
  return ALL_MOVIES.find((m) => m.id === id);
}

function MovieCardArticle({ m, spotlightId }) {
  const anchor = m.id === spotlightId ? `movie-${m.id}-grid` : `movie-${m.id}`;
  return (
    <article className="movie-card movies-io" id={anchor} role="listitem">
      <div className="movie-card-poster">
        <img src={m.poster} alt={`${m.title} poster`} width={640} height={960} loading="lazy" />
        <span className="movie-card-rating">{m.rating}</span>
        <div className="movie-card-glow" aria-hidden="true" />
      </div>
      <div className="movie-card-body">
        <div className="movie-card-meta">
          <span className="movie-card-genre">{m.genre}</span>
          <span className="movie-card-duration">{m.duration}</span>
        </div>
        <h3 className="movie-card-title">{m.title}</h3>
        <p className="movie-card-desc">{m.synopsis}</p>
        <div className="movie-card-times" aria-label="Showtimes">
          {m.times.map((t, j) => (
            <span key={t} className={`movie-time-pill${j === 0 ? " highlight" : ""}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="movie-card-cta-row">
          <a href="/contact" className="movie-card-cta">
            Book now
          </a>
          <a href={`#${anchor}`} className="movie-card-cta-secondary">
            View details
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MoviesPage() {
  const spotlight = useMemo(() => movieById(2) ?? ALL_MOVIES[0], []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".movies-io");
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
    <main className="movies-page">
      <section className="movies-hero" aria-label="Magneto Cinemas">
        <div className="movies-hero-bg" aria-hidden="true" />
        <div className="movies-hero-vignette" aria-hidden="true" />
        <div className="movies-hero-grain" aria-hidden="true" />
        <div className="movies-hero-inner">
          <div className="movies-hero-top">
            <span className="movies-hero-eyebrow">Magneto Cinemas · Level 4</span>
            <div className="movies-hero-badges" aria-label="Screen formats">
              <span className="movies-hero-badge">IMAX</span>
              <span className="movies-hero-badge">4DX</span>
              <span className="movies-hero-badge">Dolby Atmos</span>
            </div>
          </div>
          <h1 className="movies-hero-title">
            Where every frame feels <em>monumental</em>
          </h1>
          <p className="movies-hero-lead">
            Laser projection, powered recliners, and concierge-calibre service—screening international releases day-and-date with London, Dubai, and Singapore.
          </p>
          <div className="movies-hero-actions">
            <a href="#now-showing" className="movies-hero-btn primary">
              View showtimes
            </a>
            <a href="/contact" className="movies-hero-btn ghost">
              Private hire
            </a>
          </div>
          <ul className="movies-hero-stats" aria-label="Cinema highlights">
            <li>
              <strong>8</strong>
              <span>Auditoriums</span>
            </li>
            <li>
              <strong>4K</strong>
              <span>Laser line-up</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Online booking</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="movies-experience movies-io" aria-label="Premium cinema experience">
        <div className="movies-container">
          <header className="movies-experience-head">
            <span className="movies-kicker-light">The experience</span>
            <h2 className="movies-experience-title">Designed like a private screening room</h2>
            <p className="movies-experience-lead">
              From arrival to closing credits, every touchpoint is tuned for comfort, clarity, and a sense of occasion.
            </p>
          </header>
          <ul className="movies-experience-grid">
            <li>
              <span className="movies-exp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </span>
              <h3>Reference picture</h3>
              <p>High-contrast laser stacks, calibrated weekly for true black levels and skin-tone accuracy.</p>
            </li>
            <li>
              <span className="movies-exp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12V9c0-.704.07-1.39.202-2.056.234-.847 1.058-1.354 1.938-1.354h2.24z" />
                </svg>
              </span>
              <h3>Immersive sound</h3>
              <p>Object-based Atmos arrays with isolated sub-bass—dialogue stays crisp even in the front row.</p>
            </li>
            <li>
              <span className="movies-exp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </span>
              <h3>Hospitality</h3>
              <p>In-seat dining, sommelier wine pairings, and velvet-lined lounges for intermission escapes.</p>
            </li>
          </ul>
        </div>
      </section>

      <div className="movies-body" id="now-showing">
        <div className="movies-container">
          <header className="movies-section-head movies-io">
            <span className="movies-kicker">Spotlight</span>
            <h2>Director’s pick — this week only</h2>
            <p>A limited run with programme notes from our head programmer—paired with a signature cocktail at the lounge.</p>
          </header>

          <article className="movies-spotlight movies-io" id={`movie-${spotlight.id}`}>
            <div className="movies-spotlight-media">
              <img src={spotlight.poster} alt={`${spotlight.title} poster`} width={640} height={960} />
              <div className="movies-spotlight-scrim" aria-hidden="true" />
              <span className="movies-spotlight-rating">{spotlight.rating}</span>
            </div>
            <div className="movies-spotlight-body">
              <span className="movies-spotlight-tag">{spotlight.genre}</span>
              <h3 className="movies-spotlight-title">{spotlight.title}</h3>
              <p className="movies-spotlight-meta">
                <span>{spotlight.duration}</span>
                <span className="movies-spotlight-dot" aria-hidden="true" />
                <span>Magneto Hall · Screen 1</span>
              </p>
              <p className="movies-spotlight-synopsis">{spotlight.synopsis}</p>
              <div className="movies-spotlight-times" aria-label="Showtimes">
                {spotlight.times.map((t, j) => (
                  <span key={t} className={`movie-time-pill${j === 0 ? " highlight" : ""}`}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="movies-cta-row">
                <a href="/contact" className="movies-btn-primary">
                  Book now
                </a>
                <a href={`#movie-${spotlight.id}-grid`} className="movies-btn-secondary">
                  View details
                </a>
              </div>
            </div>
          </article>
        </div>

        {MOVIE_CATEGORY_SECTIONS.map((cat) => {
          const list = cat.movieIds.map(movieById).filter(Boolean);
          return (
            <section
              key={cat.slug}
              className={`movies-category-section movies-io${cat.useBand ? " movies-category-section--band" : ""}`}
              id={`movies-${cat.slug}`}
              aria-labelledby={`movies-${cat.slug}-heading`}
            >
              <div className="movies-container">
                <header className="movies-category-head">
                  <span className="movies-category-eyebrow">{cat.eyebrow}</span>
                  <h2 id={`movies-${cat.slug}-heading`}>{cat.title}</h2>
                  <p className="movies-category-lead">{cat.lead}</p>
                </header>
                <div className="movies-category-grid" role="list">
                  {list.map((m) => (
                    <MovieCardArticle key={`${cat.slug}-${m.id}`} m={m} spotlightId={spotlight.id} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="movies-marquee movies-io" aria-label="Membership">
          <div className="movies-marquee-inner">
            <p className="movies-marquee-text">
              <span className="movies-marquee-group">
                <span>Magneto Premiere Club</span>
                <span aria-hidden="true">·</span>
                <span>Complimentary upgrades on Tuesdays</span>
                <span aria-hidden="true">·</span>
                <span>Priority IMAX access</span>
                <span aria-hidden="true">·</span>
                <span>Partner dining credits</span>
              </span>
              <span className="movies-marquee-group" aria-hidden="true">
                <span>Magneto Premiere Club</span>
                <span aria-hidden="true">·</span>
                <span>Complimentary upgrades on Tuesdays</span>
                <span aria-hidden="true">·</span>
                <span>Priority IMAX access</span>
                <span aria-hidden="true">·</span>
                <span>Partner dining credits</span>
              </span>
            </p>
          </div>
        </section>

        <div className="movies-container">
          <section className="movies-bottom-cta movies-io" aria-label="Book with concierge">
            <div className="movies-bottom-cta-copy">
              <span className="movies-kicker-dark">Concierge</span>
              <h2>Corporate screenings &amp; school groups</h2>
              <p>Block bookings, branded foyers, and catering packages—our events team handles technical checks and guest flow.</p>
            </div>
            <a href="/contact" className="movies-btn-primary movies-btn-primary--wide">
              Plan an event
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
