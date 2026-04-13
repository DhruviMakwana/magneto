// Addition by Om Shrivastava on 09-04-2026
// Reason: Footer links to About and Contact routes

import Link from "next/link";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-modern']}>
      <div className={styles['footer-modern-container']}>

        {/* BRAND & SOCIAL */}
        <div className={styles['footer-brand']}>
          <div className={styles['brand-logo-container']}>
            <img src="/logo.png" alt="logo" className={styles['brand-logo']} />
            {/* <h2 className={styles['brand-name']}>Magneto Mall</h2> */}
          </div>
          <p className={styles['brand-desc']}>
            Experience the ultimate shopping and entertainment destination. Modern, vibrant, and designed for you.
          </p>
          <div className={styles['social-links']}>
            <a href="#" className={styles['social-icon']}><span>FB</span></a>
            <a href="#" className={styles['social-icon']}><span>IG</span></a>
            <a href="#" className={styles['social-icon']}><span>TW</span></a>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className={styles['footer-nav-grid']}>
          <div className={styles['nav-col']}>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">The Mall</a>
            <a href="#">Stores</a>
            <a href="#">Floor Map</a>
          </div>

          <div className={styles['nav-col']}>
            <h4>Entertainment</h4>
            <Link href="/fun-games">Fun &amp; Games</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/events">Events</Link>
            <Link href="/clubroom">Club Room</Link>
          </div>

          <div className={styles['nav-col']}>
            <h4>Information</h4>
            <Link href="/contact">Contact Us</Link>
            <a href="#">Offers</a>
            <a href="#">Customer Service</a>
            <a href="#">How to Reach</a>
            <a href="#">Parking</a>
          </div>

          <div className={styles['nav-col']}>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <Link href="/offices">Offices</Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT OVERLAY */}
      <div className={styles['footer-modern-bottom']}>
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Magneto Mall. All Rights Reserved.</p>
          <div className={styles['bottom-links']}>
            <a href="#">Privacy</a>
            <span className={styles['dot']}>•</span>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className={`${styles['footer-glow']} ${styles['glow-1']}`}></div>
      <div className={`${styles['footer-glow']} ${styles['glow-2']}`}></div>
    </footer>
  );
}
