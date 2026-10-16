import React from 'react';
import { Compass, Calendar, ArrowRight, Activity } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function NowSection({ onNavigateToProgress }) {
  const { now } = portfolioData;

  return (
    <section id="now" className="content-section">
      <div className="section-header">
        <div className="section-label">
          <Compass size={14} />
          <span>Active Learning & Shipping</span>
        </div>
        <h2 className="section-title">{now.headline}</h2>
        <p className="section-subtitle">{now.subline}</p>
      </div>

      <div className="now-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
          <Calendar size={14} />
          <span>Last updated: {now.updatedDate}</span>
        </div>

        <div className="now-items-grid">
          {now.items.map((item, idx) => (
            <div key={idx} className="now-item">
              <h3 className="now-topic">{item.topic}</h3>
              <p className="now-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Live GitHub Progress Link Banner */}
        <div className="now-github-callout">
          <div className="now-gh-left">
            <div className="now-gh-icon-badge">
              <GithubIcon size={20} />
            </div>
            <div>
              <div className="now-gh-title">
                <span>Want to see my live commits & active sprints?</span>
                <span className="nav-live-dot" />
              </div>
              <p className="now-gh-desc">
                Explore the dedicated GitHub Progress dashboard featuring real-time commit telemetry, repository statistics, and milestone completion meters.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateToProgress}
            className="now-gh-action-btn"
          >
            <span>View /present Progress</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
