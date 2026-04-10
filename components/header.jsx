"use client";
import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header-glass ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}>
      <div className="nav-container">

        {/* LEFT (Desktop) */}
        <div className="nav-left">
          <a href="/">Home</a>
          <a href="#">The Mall</a>
          <a href="/store">Store</a>
          <a href="/food-zone">Food Zone</a>
          <a href="#">Fun & Game</a>
        </div>

        {/* CENTER LOGO */}
        <div className="nav-center">
          <img src="/logo.png" alt="logo" />
        </div>

        {/* RIGHT (Desktop) */}
        <div className="nav-right">
          <a href="#">Movie </a>
          <a href="#">Event</a>
          <a href="#">Clubroom</a>
          <a href="#">Office</a>
          <a href="/services">Services</a>
        </div>

        {/* HAMBURGER BUTTON */}
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-nav-overlay ${menuOpen ? "visible" : ""}`}>
        <nav className="mobile-links">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="#" onClick={toggleMenu}>The Mall</a>
          <a href="/store" onClick={toggleMenu}>Store</a>
          <a href="/food-zone" onClick={toggleMenu}>Food Zone</a>
          <a href="#" onClick={toggleMenu}>Fun & Game</a>
          <a href="#" onClick={toggleMenu}>Movie</a>
          <a href="#" onClick={toggleMenu}>Event</a>
          <a href="#" onClick={toggleMenu}>Clubroom</a>
          <a href="#" onClick={toggleMenu}>Office</a>
          <a href="#" onClick={toggleMenu}>Floor Map</a>
          <a href="/services" onClick={toggleMenu}>Services</a>
        </nav>
      </div>
    </header>
  );
}