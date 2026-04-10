import './page.css';
import DiningCarousel from '../components/DiningCarousel';

export default function Home() {
  return (
    <main>
      {/* IMPROVED SPLIT HERO SECTION */}
      <section className="hero-split">
        <div className="hero-split-content">
          <div className="hero-text-side">
            <span className="hero-tagline">Curated Luxury</span>
            <h1 className="hero-title">The Magneto <br /> Experience</h1>
            <p className="hero-subtitle">Discover a world where architectural grandeur meets exclusive designer collections. Your journey into high-end retail excellence starts here.</p>
            <div className="hero-actions">
              <a href="#" className="hero-btn primary">Explore Collections</a>
              <a href="#" className="hero-btn secondary">Book Concierge</a>
            </div>
          </div>
          <div className="hero-image-side">
            <div className="image-wrapper">
              <img src="/hero-mall-light.png" alt="Luxury Mall Interior" className="hero-main-img" />
              <div className="image-overlay-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY BRANDS CAROUSEL */}
      <section className="brands-carousel-section">
        <div className="brands-header">
          <span className="brands-tag">The Collection</span>
          <h2 className="brands-title">Iconic Boutiques</h2>
          <p className="brands-subtitle">Experience the pinnacle of craftsmanship, heritage, and design.</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {/* Set 1 */}
            <div className="brand-card-split">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800" alt="Rolex" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Swiss Luxury</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Times New Roman', serif" }}>ROLEX</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Mastering the art of watchmaking since 1905.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800" alt="Rado" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Master of Materials</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "Arial, sans-serif", letterSpacing: '4px' }}>RADO</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Creating watches of everlasting beauty since 1917.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" alt="Prada" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Milano 1913</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 900 }}>PRADA</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Defining modern luxury through bold innovation.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&q=80&w=800" alt="Gucci" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Italian Heritage</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: '6px' }}>GUCCI</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">The perfect fusion of tradition and contemporary style.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800" alt="Cartier" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Jeweller of Kings</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic', letterSpacing: '2px' }}>Cartier</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Timeless elegance, crafted for the extraordinary.</p>
                </div>
              </div>
            </div>

            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="brand-card-split" aria-hidden="true">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800" alt="Rolex" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Swiss Luxury</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Times New Roman', serif" }}>ROLEX</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Mastering the art of watchmaking since 1905.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split" aria-hidden="true">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800" alt="Rado" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Master of Materials</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "Arial, sans-serif", letterSpacing: '4px' }}>RADO</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Creating watches of everlasting beauty since 1917.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split" aria-hidden="true">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" alt="Prada" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Milano 1913</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 900 }}>PRADA</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Defining modern luxury through bold innovation.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split" aria-hidden="true">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&q=80&w=800" alt="Gucci" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Italian Heritage</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: '6px' }}>GUCCI</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">The perfect fusion of tradition and contemporary style.</p>
                </div>
              </div>
            </div>

            <div className="brand-card-split" aria-hidden="true">
              <div className="brand-visual">
                <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800" alt="Cartier" className="brand-img" />
              </div>
              <div className="brand-info">
                <div className="brand-info-inner">
                  <span className="brand-cat">Jeweller of Kings</span>
                  <h4 className="brand-name-split" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic', letterSpacing: '2px' }}>Cartier</h4>
                  <div className="brand-divider"></div>
                  <p className="brand-short-desc">Timeless elegance, crafted for the extraordinary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="featured-section">
        <div className="section-header-centered">
          <span className="section-tag">Premium Services</span>
          <h2 className="section-title">Discover The <span>Extraordinary</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-grid">
          <div className="mall-experience-card">
            <div className="exp-card-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" alt="Luxury Brands" />
              <div className="exp-overlay"></div>
            </div>
            <div className="exp-content">
              <div className="exp-icon">🛍️</div>
              <h3 className="exp-title">Luxury Brands</h3>
              <p className="exp-desc">Shop from a curated collection of the world's most prestigious fashion houses and boutiques under one elegant roof.</p>
              <a href="#" className="exp-link">Explore Boutiques <span>+</span></a>
            </div>
          </div>

          <div className="mall-experience-card">
            <div className="exp-card-image">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" alt="Fine Dining" />
              <div className="exp-overlay"></div>
            </div>
            <div className="exp-content">
              <div className="exp-icon">🍷</div>
              <h3 className="exp-title">Fine Dining</h3>
              <p className="exp-desc">Savor culinary masterpieces crafted by renowned chefs in atmospheric restaurants featuring diverse global cuisines.</p>
              <a href="#" className="exp-link">Reserve Table <span>+</span></a>
            </div>
          </div>

          <div className="mall-experience-card">
            <div className="exp-card-image">
              <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop" alt="Entertainment" />
              <div className="exp-overlay"></div>
            </div>
            <div className="exp-content">
              <div className="exp-icon">🎬</div>
              <h3 className="exp-title">Entertainment</h3>
              <p className="exp-desc">Immerse yourself in our premier 4K cinemaplex, featuring ultra-plush seating, gourmet snacks, and immersive sound.</p>
              <a href="#" className="exp-link">View Showtimes <span>+</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD & DINING SPLIT SECTION */}
      <DiningCarousel />
    </main>
  );
}
