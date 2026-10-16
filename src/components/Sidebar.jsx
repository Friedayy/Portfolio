import React, { useState } from 'react';
import { 
  Download, 
  Sun, 
  Moon, 
  Mail, 
  X,
  Sparkles,
  Target
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  InstagramIcon 
} from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Mail: Mail
};

export default function Sidebar({ 
  activeSection, 
  theme, 
  toggleTheme, 
  isMobileOpen, 
  setIsMobileOpen 
}) {
  const { personal, socials } = portfolioData;
  const [viewMode, setViewMode] = useState('focused'); // 'focused' | 'playful'

  const navItems = [
    { id: 'about', number: '01', label: 'About & Impact' },
    { id: 'skills', number: '02', label: 'Skills & Stack' },
    { id: 'projects', number: '03', label: 'Selected Projects' },
    { id: 'now', number: '04', label: 'What I\'m Doing Now' },
    { id: 'contact', number: '05', label: 'Say Hello' }
  ];

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
      {/* Top Profile */}
      <div className="profile-block">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="avatar-wrapper">
            <img 
              src={personal.avatar} 
              alt={personal.name} 
              className="avatar-img"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>
          {isMobileOpen && (
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div>
          <h1 className="profile-name">{personal.name}</h1>
          <p className="profile-role">{personal.title}</p>
        </div>

        <div className="status-badge">
          <span className="status-dot"></span>
          <span>{personal.status}</span>
        </div>

        <p className="profile-tagline">{personal.tagline}</p>

        {/* samidev.me Experience Mode Switcher */}
        <div className="switch-pod">
          <button
            type="button"
            className={`pod-btn ${viewMode === 'focused' ? 'active' : ''}`}
            onClick={() => setViewMode('focused')}
          >
            <Target size={13} />
            <span>Focused</span>
          </button>
          <button
            type="button"
            className={`pod-btn ${viewMode === 'playful' ? 'active' : ''}`}
            onClick={() => setViewMode('playful')}
          >
            <Sparkles size={13} />
            <span>Playful</span>
          </button>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="nav-num">{item.number}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Sidebar Footer with CV button, Theme Switcher, and Socials */}
      <div className="sidebar-footer">
        <div className="sidebar-actions">
          <a 
            href={personal.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-btn"
            title="Download CV"
          >
            <span>CV</span>
            <Download size={16} />
          </a>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="sidebar-socials">
          {socials.map((social) => {
            const IconComponent = iconMap[social.icon] || Mail;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title={social.name}
                aria-label={social.name}
              >
                <IconComponent size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
