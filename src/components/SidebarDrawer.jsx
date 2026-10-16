import React, { useState } from 'react';
import { Download, X, Target, Sparkles, Mail, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Mail: Mail
};

export default function SidebarDrawer({ isOpen, onClose, activeSection, onNavigateToProgress }) {
  const { personal, socials } = portfolioData;
  const [viewMode, setViewMode] = useState('focused');

  const navItems = [
    { id: 'top', number: '01', label: 'About' },
    { id: 'work', number: '02', label: 'Work' },
    { id: 'experience', number: '03', label: 'Experience' },
    { id: 'skills', number: '04', label: 'Skills' },
    { id: 'contact', number: '05', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Dimmed Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Drawer (Slides out from RIGHT side) */}
      <aside 
        className={`sidebar-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Navigation drawer"
      >
        <div className="drawer-header">
          <div className="drawer-profile">
            <div className="drawer-monogram-badge">AM</div>
            <div>
              <h3 className="drawer-name">{personal.name}</h3>
              <p className="drawer-role">{personal.title}</p>
            </div>
          </div>

          <button 
            type="button" 
            className="drawer-close-btn" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Status Badge */}
        <div className="status-badge" style={{ marginTop: '16px' }}>
          <span className="status-dot"></span>
          <span>{personal.status}</span>
        </div>

        {/* Dedicated Ongoing Progress Hub Link */}
        <button
          type="button"
          onClick={() => {
            onClose();
            if (onNavigateToProgress) onNavigateToProgress();
          }}
          className="drawer-gh-feature-btn"
          title="Open Ongoing Progress dashboard"
        >
          <div className="drawer-gh-feature-left">
            <div className="drawer-gh-icon-box">
              <Compass size={18} />
            </div>
            <div>
              <div className="drawer-gh-title">Ongoing Progress</div>
              <div className="drawer-gh-subtitle">Sprints & GitHub telemetry</div>
            </div>
          </div>
          <span className="nav-live-dot" />
        </button>

        {/* samidev.me Experience Mode Switcher */}
        <div className="switch-pod" style={{ marginTop: '12px' }}>
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

        {/* Numbered Navigation List - Only Work, Experience, Skills, Contact */}
        <nav className="drawer-nav">
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
                className={`drawer-nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="drawer-nav-num">{item.number}</span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Drawer Bottom Actions */}
        <div className="drawer-footer">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-cv-btn"
            title="Download CV"
          >
            <span>CV</span>
            <Download size={16} />
          </a>

          <div className="drawer-socials">
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
    </>
  );
}
