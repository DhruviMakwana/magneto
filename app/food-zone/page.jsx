"use client";
import { useState, useMemo } from "react";
import "./food-zone.css";

const restaurants = [
  {
    id: 1,
    name: "The Spice Route",
    cuisine: "North Indian · Mughlai",
    category: "Dine-In",
    place: "Restaurant",
    floor: "Ground Floor",
    openTime: "11:00 AM – 11:00 PM",
    isOpen: true,
    desc: "A journey through India's most iconic royal kitchens. Regal ambiance meets timeless flavors in every bite.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Café Aureliana",
    cuisine: "Café · Continental",
    category: "Cafe",
    place: "Restaurant",
    floor: "First Floor",
    openTime: "9:00 AM – 10:00 PM",
    isOpen: true,
    desc: "Artisan coffee, flaky croissants, and European-inspired light bites in an elegant sunlit café setting.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Sakura Japanese",
    cuisine: "Japanese · Sushi",
    category: "Dine-In",
    place: "Restaurant",
    floor: "Second Floor",
    openTime: "12:00 PM – 10:30 PM",
    isOpen: true,
    desc: "Authentic Japanese culinary artistry. Hand-crafted sushi, tepanyaki, and a curated sake selection.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "La Piazza Italiana",
    cuisine: "Italian · Pizza",
    category: "Dine-In",
    place: "Restaurant",
    floor: "Second Floor",
    openTime: "12:00 PM – 11:00 PM",
    isOpen: true,
    desc: "Wood-fired pizzas, house-made pastas and an extensive wine cellar evoking the warmth of an Italian trattoria.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "The Courtyard Bar",
    cuisine: "Cocktails · Tapas",
    category: "Drinks & Nightlife",
    place: "Restaurant",
    floor: "Third Floor",
    openTime: "6:00 PM – 1:00 AM",
    isOpen: false,
    desc: "Signature craft cocktails and curated bar snacks under an open sky. Ahmedabad's premier rooftop lounge experience.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Sweet Surrender",
    cuisine: "Desserts · Bakery",
    category: "Desserts",
    place: "Food Court",
    floor: "Ground Floor",
    openTime: "10:00 AM – 10:00 PM",
    isOpen: true,
    desc: "Handcrafted Belgian chocolates, artisan tarts, and seasonal dessert creations for those with a refined sweet tooth.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "The Dhaba Project",
    cuisine: "Street Food · North Indian",
    category: "Quick Bites",
    place: "Food Court",
    floor: "First Floor",
    openTime: "11:00 AM – 10:00 PM",
    isOpen: true,
    desc: "Authentic street flavors elevated in a premium setting. Chaats, tikkas, and kulfi from India's culinary heartland.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    name: "The Brew House",
    cuisine: "Pubs · Craft Beer",
    category: "Pubs & Resto-Bars",
    place: "Restaurant",
    floor: "Third Floor",
    openTime: "5:00 PM – 12:30 AM",
    isOpen: false,
    desc: "Over 40 craft brews on tap alongside gastropub classics in a warm, convivial environment made for great evenings.",
    image: "https://images.unsplash.com/photo-1532634896-9f2a02dabe4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    name: "Bella Gelato",
    cuisine: "Italian · Ice Cream",
    category: "Ice Cream",
    place: "Food Court",
    floor: "Ground Floor",
    openTime: "11:00 AM – 10:30 PM",
    isOpen: true,
    desc: "Classic Italian gelatos and sorbets made fresh daily using imported ingredients and traditional techniques.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = ["All", "Dine-In", "Cafe", "Desserts", "Quick Bites", "Drinks & Nightlife", "Ice Cream", "Pubs & Resto-Bars"];
const cuisines = ["All Cuisines", "North Indian", "Italian", "Japanese", "Continental", "Street Food", "Cocktails", "Ice Cream"];
const floors = ["All Floors", "Ground Floor", "First Floor", "Second Floor", "Third Floor"];

// SVG icon helpers
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
);
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9"/></svg>
);
const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
);

export default function FoodZone() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCuisine, setActiveCuisine] = useState("All Cuisines");
  const [activeFloor, setActiveFloor] = useState("All Floors");

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const catMatch = activeCategory === "All" || r.category === activeCategory;
      const cuisineMatch = activeCuisine === "All Cuisines" || r.cuisine.includes(activeCuisine);
      const floorMatch = activeFloor === "All Floors" || r.floor === activeFloor;
      return catMatch && cuisineMatch && floorMatch;
    });
  }, [activeCategory, activeCuisine, activeFloor]);

  const clearAll = () => {
    setActiveCategory("All");
    setActiveCuisine("All Cuisines");
    setActiveFloor("All Floors");
  };

  const hasFilters =
    activeCategory !== "All" ||
    activeCuisine !== "All Cuisines" ||
    activeFloor !== "All Floors";

  return (
    <main className="food-zone-page">
      {/* CINEMATIC HERO */}
      <section className="food-zone-hero">
        {/* Background Image */}
        <div className="fz-hero-bg" />
        {/* Dark Overlay */}
        <div className="fz-hero-overlay" />

        {/* Content */}
        <div className="fz-hero-inner">
          <span className="fz-tag">Culinary Experiences</span>
          <h1>Food &amp; <span>Dining</span></h1>
          <p>
            From casual bites to fine dining — explore Magneto Mall&apos;s curated
            collection of restaurants, cafés, and bars, each offering a distinct
            culinary journey.
          </p>

          {/* Stat pills */}
          <div className="fz-hero-stats">
            <div className="fz-stat-pill">
              <strong>9+</strong>
              <span>Restaurants</span>
            </div>
            <div className="fz-stat-pill">
              <strong>5</strong>
              <span>Cuisines</span>
            </div>
            <div className="fz-stat-pill">
              <strong>Mon – Sun</strong>
              <span>11 AM – 1 AM</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="fz-scroll-hint">
          <span>Scroll</span>
          <div className="fz-scroll-line" />
        </div>
      </section>

      {/* BODY */}
      <div className="food-zone-body">
        {/* SIDEBAR */}
        <aside className="food-zone-sidebar">
          {/* Category */}
          <div className="fz-filter-group">
            <p className="fz-filter-group-title">Category</p>
            <div className="fz-filter-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`fz-filter-chip${activeCategory === cat ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cuisine */}
          <div className="fz-filter-group">
            <p className="fz-filter-group-title">Cuisine</p>
            <div className="fz-filter-list">
              {cuisines.map((c) => (
                <button
                  key={c}
                  className={`fz-filter-chip cuisine-chip${activeCuisine === c ? " active" : ""}`}
                  onClick={() => setActiveCuisine(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Floor */}
          <div className="fz-filter-group">
            <p className="fz-filter-group-title">Floor</p>
            <div className="fz-filter-list">
              {floors.map((f) => (
                <button
                  key={f}
                  className={`fz-filter-chip${activeFloor === f ? " active" : ""}`}
                  onClick={() => setActiveFloor(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button className="fz-clear-btn" onClick={clearAll}>
              ✕ Clear All Filters
            </button>
          )}
        </aside>

        {/* MAIN GRID */}
        <div className="food-zone-main">
          <div className="fz-results-bar">
            <p className="fz-count">
              Showing <span>{filtered.length}</span> restaurant{filtered.length !== 1 ? "s" : ""}
            </p>
            <select className="fz-sort-select">
              <option>Sort: A – Z</option>
              <option>Sort: Floor</option>
              <option>Sort: Open Now</option>
            </select>
          </div>

          <div className="fz-grid">
            {filtered.length === 0 ? (
              <div className="fz-no-results">
                <h3>No restaurants found</h3>
                <p>Try adjusting your filters to see more options.</p>
              </div>
            ) : (
              filtered.map((r) => (
                <article key={r.id} className="fz-card">
                  {/* Image */}
                  <div className="fz-card-img-wrap">
                    <img src={r.image} alt={r.name} />
                    <span className="fz-card-badge">{r.category}</span>
                    <span className={`fz-card-open${r.isOpen ? "" : " closed"}`} title={r.isOpen ? "Open Now" : "Closed"} />
                  </div>

                  {/* Body */}
                  <div className="fz-card-body">
                    <h3 className="fz-card-name">{r.name}</h3>
                    <p className="fz-card-cuisine">{r.cuisine}</p>
                    <p className="fz-card-desc">{r.desc}</p>

                    {/* Meta */}
                    <div className="fz-card-meta">
                      <div className="fz-meta-item">
                        <ClockIcon />
                        <span>{r.openTime}</span>
                        <span style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 700, color: r.isOpen ? "#22c55e" : "#ef4444" }}>
                          {r.isOpen ? "Open Now" : "Closed"}
                        </span>
                      </div>
                      <div className="fz-meta-item">
                        <BuildingIcon />
                        <span>{r.floor}</span>
                      </div>
                      <div className="fz-meta-item">
                        <MapPinIcon />
                        <span>Magneto Mall, Raipur</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="fz-card-footer">
                    <a href="#" className="fz-reserve-btn">Reserve a Table</a>
                    <a href="#" className="fz-map-btn">
                      View on Map
                      <ChevronRightIcon />
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
