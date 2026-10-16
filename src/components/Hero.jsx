import React, { useState, useEffect } from 'react';
import { FileText, Mail, Sun, Moon, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ theme, toggleTheme }) {
  const { personal } = portfolioData;

  // Dynamic Typewriter Animation: Developer -> Gamer -> Designer -> Developer
  const roles = ['Developer', 'Gamer', 'Designer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('Developer');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause for 2 seconds on fully typed word
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 60);
      } else {
        // Pause 300ms on empty state before typing next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero-sami-section">
      {/* Top Action Buttons (CV, Contact, Theme Toggle) */}
      <div className="hero-top-actions-bar">
        <div className="hero-top-left-status">
          <span className="hero-status-pulse-dot" />
          <span className="hero-status-text">{personal.status || 'Available for opportunities'}</span>
        </div>

        <div className="hero-actions-cluster">
          {/* CV Pill Button */}
          <a 
            href={personal.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-cv-pill-btn"
            title="Download CV"
          >
            <FileText size={15} />
            <span>CV</span>
          </a>

          {/* Contact Pill Button */}
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="hero-contact-pill-btn"
            title="Contact Amaan"
          >
            <Mail size={15} />
            <span>Contact</span>
          </a>

          {/* Circular Theme Toggle Button */}
          <button 
            type="button" 
            onClick={toggleTheme}
            className="hero-theme-circle-btn"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>

      {/* Main Title & Dynamic Role Subtitle */}
      <div className="hero-title-container">
        <h1 className="hero-title-main">
          Hi, I'm <span className="hero-name-highlight">{personal.shortName}</span><span className="hero-title-accent-dot">.</span>
        </h1>
        <div className="hero-role-subline" aria-live="polite">
          <span className="hero-typed-role">{displayText || '\u00A0'}</span>
          <span className="hero-typing-cursor">|</span>
        </div>
      </div>

      {/* Sleek Dark Bio Card with Inline Highlight Tags */}
      <div className="hero-bio-capsule-card">
        <p className="hero-bio-paragraph">
          I am a passionate <span className="hero-highlight-tag">Full Stack Developer</span> with 2+ years of hands-on experience building modern, responsive, and <span className="hero-highlight-tag">performance-focused web applications</span>. Proficient in both <span className="hero-highlight-tag">frontend architecture</span> and <span className="hero-highlight-tag">robust backend systems</span>.
        </p>
      </div>

      {/* Location and Live Coding Status underneath the card matching Picture 1 */}
      <div className="hero-meta-status-row">
        <div className="hero-meta-item">
          <Globe size={14} className="hero-meta-icon" />
          <span>Earth (Remote)</span>
        </div>

        <div className="hero-meta-item">
          <span className="hero-live-pulse-dot" />
          <span>Online &amp; Coding</span>
        </div>
      </div>
    </section>
  );
}
