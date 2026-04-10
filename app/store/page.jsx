"use client";
import { useState, useMemo } from "react";
import "./store.css";

const brands = [
  {
    id: 1,
    name: "ZARA",
    tagline: "Modern fashion for every moment",
    category: "Fashion",
    floor: "Level 1",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200",
    size: "featured",
  },
  {
    id: 2,
    name: "ROLEX",
    tagline: "A crown for every achievement",
    category: "Watches",
    floor: "Level 3",
    image:
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
  {
    id: 3,
    name: "TANISHQ",
    tagline: "Where gold tells a story",
    category: "Jewellery",
    floor: "Level 2",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
  {
    id: 4,
    name: "NIKE",
    tagline: "Just do it",
    category: "Footwear",
    floor: "Level 1",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    size: "wide",
  },
  {
    id: 5,
    name: "MANGO",
    tagline: "Mediterranean style, global appeal",
    category: "Fashion",
    floor: "Level 1",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
  {
    id: 6,
    name: "SWAROVSKI",
    tagline: "The magic of crystal",
    category: "Jewellery",
    floor: "Level 3",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
  {
    id: 7,
    name: "H&M",
    tagline: "Fashion & quality at the best price",
    category: "Fashion",
    floor: "Level 2",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200",
    size: "featured",
  },
  {
    id: 8,
    name: "ADIDAS",
    tagline: "Impossible is nothing",
    category: "Footwear",
    floor: "Level 1",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
  {
    id: 9,
    name: "ALDO",
    tagline: "Step into style",
    category: "Footwear",
    floor: "Level 2",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200",
    size: "wide",
  },
  {
    id: 10,
    name: "LOUIS PHILIPPE",
    tagline: "The upper crust of menswear",
    category: "Fashion",
    floor: "Level 2",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=900",
    size: "normal",
  },
];

const categories = ["All", "Fashion", "Footwear", "Watches", "Jewellery"];
const floors = ["All Floors", "Level 1", "Level 2", "Level 3"];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFloor, setActiveFloor] = useState("All Floors");

  const filtered = useMemo(() => {
    return brands.filter((b) => {
      const catMatch = activeCategory === "All" || b.category === activeCategory;
      const floorMatch = activeFloor === "All Floors" || b.floor === activeFloor;
      return catMatch && floorMatch;
    });
  }, [activeCategory, activeFloor]);

  const hasFilters = activeCategory !== "All" || activeFloor !== "All Floors";

  const clearAll = () => {
    setActiveCategory("All");
    setActiveFloor("All Floors");
  };

  return (
    <main className="store-page">
      {/* DARK EDITORIAL HERO */}
      <section className="store-hero">
        {/* Giant watermark */}
        <div className="store-hero-watermark" aria-hidden="true">M</div>

        {/* Left content */}
        <div className="store-hero-left">
          <span className="st-tag">Iconic Boutiques</span>
          <h1>The Magneto<br /><em>Store</em></h1>
          <div className="store-hero-divider" />
          <p>
            World&apos;s most coveted brands under one roof — from haute couture
            to statement footwear and timeless jewellery. Luxury curated for
            the discerning few.
          </p>

          {/* Stat row */}
          <div className="store-hero-stats">
            <div className="st-hero-stat">
              <strong className="st-hero-stat-num">10+</strong>
              <span className="st-hero-stat-label">Brands</span>
            </div>
            <div className="st-hero-stat">
              <strong className="st-hero-stat-num">4</strong>
              <span className="st-hero-stat-label">Categories</span>
            </div>
            <div className="st-hero-stat">
              <strong className="st-hero-stat-num">3</strong>
              <span className="st-hero-stat-label">Floors</span>
            </div>
          </div>
        </div>

        {/* Right image collage */}
        <div className="store-hero-right">
          <div className="store-hero-img-col">
            <div className="store-hero-tile">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600" alt="Fashion" />
            </div>
            <div className="store-hero-tile">
              <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600" alt="Watches" />
            </div>
          </div>
          <div className="store-hero-img-col">
            <div className="store-hero-tile">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" alt="Jewellery" />
            </div>
            <div className="store-hero-tile">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" alt="Footwear" />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="store-body">
        {/* SIDEBAR */}
        <aside className="store-sidebar">
          <div className="st-filter-group">
            <p className="st-filter-group-title">Category</p>
            <div className="st-filter-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`st-filter-item${activeCategory === cat ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="st-filter-dot" />
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="st-filter-group">
            <p className="st-filter-group-title">Floor</p>
            <div className="st-filter-list">
              {floors.map((f) => (
                <button
                  key={f}
                  className={`st-filter-item${activeFloor === f ? " active" : ""}`}
                  onClick={() => setActiveFloor(f)}
                >
                  <span className="st-filter-dot" />
                  {f}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button className="st-clear-btn" onClick={clearAll}>
              ✕ Clear Filters
            </button>
          )}
        </aside>

        {/* MAIN GRID */}
        <div className="store-main">
          <div className="st-results-bar">
            <p className="st-count">
              <span>{filtered.length}</span> brand{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="st-grid">
            {filtered.map((brand) => (
              <article
                key={brand.id}
                className={`st-card${brand.size === "featured" ? " featured" : brand.size === "wide" ? " wide" : ""}`}
              >
                {/* Background image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="st-card-img"
                />

                {/* Top badges */}
                <span className="st-card-cat">{brand.category}</span>
                <span className="st-card-floor">{brand.floor}</span>

                {/* Content */}
                <div className="st-card-content">
                  <div className="st-card-accent" />
                  <h3 className="st-card-brand">{brand.name}</h3>
                  <p className="st-card-tagline">{brand.tagline}</p>
                  <a href="#" className="st-card-cta">
                    Visit Store <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
