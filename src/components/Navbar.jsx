import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background =
          window.scrollY > 60 ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.50)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" id="navbar" ref={navRef}>
      <div className="navbar-inner">
        <a href="#hero" className="logo">
          <svg width="32" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M16 2L30 25H2L16 2Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M16 9L24 23H8L16 9Z" fill="rgba(244,186,106,0.75)" />
          </svg>
          <span className="logo-text">IDK</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><a href="#hero"     onClick={closeMenu}>Home</a></li>
          <li><a href="#about"    onClick={closeMenu}>About</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li>
            <a href="#contact" className="btn-contact-nav" onClick={closeMenu}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}