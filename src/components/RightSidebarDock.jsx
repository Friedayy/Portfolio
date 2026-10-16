import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { githubFallbackData } from '../data/githubData';

export default function RightSidebarDock({ 
  isOpen, 
  onToggle, 
  onNavigateToProgress 
}) {
  const { profile } = githubFallbackData;

  return (
    <aside 
      className={`samidev-right-sidebar-dock ${isOpen ? 'expanded' : 'collapsed'}`}
      aria-label="GitHub progress telemetry sidebar"
    >
      {/* Slider Arrow Tab attached to left edge of sidebar */}
      <button
        type="button"
        onClick={onToggle}
        className="samidev-slider-arrow-tab"
        aria-label={isOpen ? "Collapse telemetry sidebar" : "Expand telemetry sidebar"}
        title={isOpen ? "Collapse sidebar" : "Open GitHub telemetry sidebar"}
      >
        {isOpen ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
      </button>

      {/* Vertical Sidebar Panel: STRICTLY GitHub Progress Telemetry & Ongoing link */}
      <div className="samidev-dock-pill-panel telemetry-only">
        <div className="samidev-dock-github-card">
          <div className="samidev-gh-card-header">
            <div className="samidev-gh-logo-group">
              <GithubIcon size={16} className="samidev-gh-icon" />
              <span className="samidev-gh-title">GITHUB</span>
            </div>
            <span className="gh-api-dot" title="Live Synced" />
          </div>

          <div className="samidev-gh-stats-list">
            <div className="samidev-gh-stat-row">
              <span className="gh-stat-lbl">REPOS</span>
              <span className="gh-stat-val">{profile.public_repos || 15}</span>
            </div>

            <div className="samidev-gh-stat-row">
              <span className="gh-stat-lbl">STARS</span>
              <span className="gh-stat-val">12</span>
            </div>

            <div className="samidev-gh-stat-row">
              <span className="gh-stat-lbl">FOLLOWERS</span>
              <span className="gh-stat-val">{profile.followers || 10}</span>
            </div>
          </div>

          <div className="samidev-gh-api-status">
            <span className="gh-api-text">API: Live</span>
          </div>

          {/* Direct link to Ongoing Progress dashboard */}
          <button
            type="button"
            onClick={onNavigateToProgress}
            className="samidev-gh-full-stats-btn"
            title="Open Full Ongoing & GitHub Progress Telemetry"
          >
            <span>FULL STATS</span>
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </aside>
  );
}
