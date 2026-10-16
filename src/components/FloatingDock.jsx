import React, { useState, useEffect } from 'react';
import { ArrowUp, Briefcase, Layers, FolderGit2, Mail, GitCommit } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function FloatingDock({ activeSection, onNavigateToProgress }) {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!showDock) return null;

  return (
    <div className="floating-dock-container" aria-label="Quick section navigation">
      <div className="floating-dock-pill">
        <button
          type="button"
          onClick={() => scrollTo('top')}
          className="dock-item"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>

        <div className="dock-divider" />

        <button
          type="button"
          onClick={() => scrollTo('experience')}
          className={`dock-item ${activeSection === 'experience' ? 'active' : ''}`}
          title="Experience & Impact"
          aria-label="Experience & Impact"
        >
          <Briefcase size={16} />
        </button>

        <button
          type="button"
          onClick={() => scrollTo('skills')}
          className={`dock-item ${activeSection === 'skills' ? 'active' : ''}`}
          title="Skills & Tools"
          aria-label="Skills & Tools"
        >
          <Layers size={16} />
        </button>

        <button
          type="button"
          onClick={() => scrollTo('projects')}
          className={`dock-item ${activeSection === 'projects' ? 'active' : ''}`}
          title="Selected Projects"
          aria-label="Selected Projects"
        >
          <FolderGit2 size={16} />
        </button>

        {onNavigateToProgress && (
          <button
            type="button"
            onClick={onNavigateToProgress}
            className="dock-item"
            title="/present Ongoing & GitHub Progress"
            aria-label="/present Ongoing & GitHub Progress"
            style={{ color: 'var(--accent-lime)' }}
          >
            <GithubIcon size={16} />
          </button>
        )}

        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className={`dock-item ${activeSection === 'contact' ? 'active' : ''}`}
          title="Say Hello"
          aria-label="Say Hello"
        >
          <Mail size={16} />
        </button>
      </div>
    </div>
  );
}
