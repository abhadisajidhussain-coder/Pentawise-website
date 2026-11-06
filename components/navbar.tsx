
"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "Countries", href: "/#countries", section: "countries" },
  { label: "Services", href: "/#services", section: "services" },
  { label: "Contact Us", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const marker = 150;
      let current = "home";

      for (const id of ["countries", "services", "contact"]) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    const frame = requestAnimationFrame(updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">

      <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>

        {/* Mobile Hamburger Toggle Button */}

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Pentawise Logo */}

        <div className="navbar-brand">
          <Link
            href="/"
            aria-label="Home"
            onClick={() => {
              setActiveSection("home");
              setMenuOpen(false);
            }}
          >
            <Image
              src="/pentawise logo.png"
              alt="Pentawise logo"
              width={100}
              height={70}
              priority
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}

        <nav
          id="main-navigation"
          className="nav-links"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  setActiveSection(link.section);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Book a Free Expert Consultation Button */}

        <div className="navbar-action">
          <a
            href="https://wa.me/"
            className="consultation-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <span className="consultation-icon">
              <Phone size={16} strokeWidth={2} />
            </span>

            <span className="consultation-text">
              <span>Book a free Expert</span>
              <span>Consultancy Call</span>
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}
