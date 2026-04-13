"use client";

import { useState } from "react";
import "./floating-actions.css";

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setChatOpen((current) => !current);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const sendMessage = () => {
    const text = message.trim() || "Hello Magneto Mall";
    const whatsappUrl = `https://wa.me/917969794200?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      <div className="float-whatsapp">
        <div className={`float-wa-chat ${chatOpen ? "is-open" : ""}`}>
          <div className="float-wa-chat__header">
            <div className="float-wa-chat__avatar" aria-hidden="true">
              M
            </div>
            <div className="float-wa-chat__title">
              <strong>Magneto Mall</strong>
              <span>online</span>
            </div>
            <button
              type="button"
              className="float-wa-chat__close"
              onClick={closeChat}
              aria-label="Close WhatsApp chat preview"
            >
              x
            </button>
          </div>

          <div className="float-wa-chat__body">
            <div className="float-wa-chat__bubble">
              <p>Hello! Welcome to Magneto Mall.</p>
              <p>How can we help you today?</p>
              <span className="float-wa-chat__time">10:24 AM</span>
            </div>
          </div>

          <form className="float-wa-chat__footer" onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="float-wa-chat__input"
              placeholder="Type a message"
              aria-label="Type a WhatsApp message"
            />
            <button
              type="submit"
              className="float-wa-chat__cta"
              aria-label="Send message to WhatsApp"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4 20.4l17.4-8.4c.8-.4.8-1.6 0-2L3.4 1.6c-.7-.3-1.5.3-1.3 1.1l1.8 6.4c.1.4.5.7.9.7h8.4c.5 0 .9.4.9.9s-.4.9-.9.9H4.8c-.4 0-.8.3-.9.7l-1.8 6.4c-.2.8.6 1.4 1.3 1.1z" />
              </svg>
            </button>
          </form>
        </div>

        <button
          type="button"
          className="float-wa-btn"
          onClick={toggleChat}
          aria-label="Chat on WhatsApp"
          aria-expanded={chatOpen}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.03 7.77L.5 31.5l8-2.02A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.4a13.84 13.84 0 01-7.06-1.94l-.5-.3-5.2 1.31 1.37-4.97-.33-.52A13.86 13.86 0 112 16c0-7.63 6.22-13.9 13.9-13.9C23.6 2.1 29.9 8.38 29.9 16s-6.29 12.9-13.9 12.9zm7.6-10.4c-.42-.2-2.47-1.21-2.85-1.35-.38-.14-.65-.2-.93.2-.27.4-1.06 1.35-1.3 1.63-.23.27-.47.3-.89.1-.42-.2-1.78-.65-3.38-2.08-1.25-1.1-2.09-2.47-2.34-2.89-.24-.42-.03-.65.18-.86.18-.18.42-.48.63-.72.2-.24.27-.41.4-.68.14-.27.07-.51-.03-.72-.1-.2-.93-2.24-1.27-3.07-.33-.8-.67-.69-.93-.7h-.8c-.27 0-.72.1-1.1.51-.37.4-1.43 1.4-1.43 3.41 0 2.02 1.47 3.97 1.68 4.24.2.27 2.9 4.44 7.04 6.22.98.42 1.75.67 2.35.86.99.31 1.88.27 2.59.16.79-.12 2.47-1.01 2.82-1.98.35-.98.35-1.81.24-1.98-.1-.17-.38-.27-.8-.48z" />
          </svg>
        </button>
        <span className="float-wa-label">WhatsApp</span>
      </div>

      <div className="float-social" role="navigation" aria-label="Social media links">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="float-social-item insta"
          aria-label="Instagram"
          data-label="Instagram"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="float-social-item fb"
          aria-label="Facebook"
          data-label="Facebook"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="float-social-item twitter"
          aria-label="X / Twitter"
          data-label="Twitter"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </>
  );
}
