import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ 
  theme, 
  toggleTheme, 
  onOpenMenu, 
  onNavigateToProgress, 
  activeSection = 'work' 
}) {
  const { personal } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);

  // Header appears when scrolling down in the page matching Picture 2
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`samidev-navbar ${isScrolled ? 'visible' : 'hidden'}`}>
      <div className="samidev-nav-inner">
        {/* Left Monogram Box - Eye-Catching Neon Glass Cyber Badge */}
        <a 
          href="#top" 
          className="samidev-nav-monogram-box"
          onClick={(e) => { 
            e.preventDefault(); 
            scrollTo('top'); 
          }}
          title="Return to top"
          aria-label="Amaan Monogram - Return to top"
        >
          <span className="samidev-monogram-glow" aria-hidden="true" />
          <span className="samidev-monogram-text">AM</span>
          <span className="samidev-monogram-pip" aria-hidden="true" />
        </a>

        {/* Center Pill Links matching Picture 2 */}
        <nav className="samidev-nav-links-track">
          <a 
            href="#work" 
            className={`samidev-nav-link ${activeSection === 'work' ? 'active-pill' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo('work'); }}
          >
            WORK
          </a>

          <a 
            href="#experience" 
            className={`samidev-nav-link ${activeSection === 'experience' ? 'active-pill' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}
          >
            EXPERIENCE
          </a>

          <a 
            href="#skills" 
            className={`samidev-nav-link ${activeSection === 'skills' ? 'active-pill' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}
          >
            SKILLS
          </a>

          <a 
            href="#contact" 
            className={`samidev-nav-link ${activeSection === 'contact' ? 'active-pill' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            CONTACT
          </a>

          {/* ONGOING link to /ongoing page matching user request */}
          <button
            type="button"
            className="samidev-nav-link nav-ongoing-btn"
            onClick={onNavigateToProgress}
            title="Open Ongoing Progress & Telemetry Page"
            aria-label="Open Ongoing Progress Page"
          >
            <span className="nav-ongoing-pulse" />
            <span>ONGOING</span>
          </button>
        </nav>

        {/* Right Controls (Mobile Ongoing, Theme Toggle, & Mobile Menu) */}
        <div className="samidev-nav-right">
          {/* Direct Mobile Ongoing button for 1-tap navigation */}
          <button
            type="button"
            className="nav-ongoing-btn nav-ongoing-btn--mobile"
            onClick={onNavigateToProgress}
            title="Open Ongoing Progress & Telemetry Page"
            aria-label="Open Ongoing Progress Page"
          >
            <span className="nav-ongoing-pulse" />
            <span>ONGOING</span>
          </button>

          <button
            type="button"
            className="samidev-nav-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            type="button"
            className="samidev-mobile-menu-btn"
            onClick={onOpenMenu}
            aria-label="Open menu drawer"
            title="Open navigation menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
