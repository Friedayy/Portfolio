import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onNavigateToProgress }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div>
        <span>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>

        <button 
          onClick={scrollToTop}
          className="social-icon-btn"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
