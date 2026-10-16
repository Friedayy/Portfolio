import React from 'react';
import { FolderGit2, Star, Users, ArrowRight, Activity } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { githubFallbackData } from '../data/githubData';

export default function MidRightGitHubSidebar({ onNavigateToProgress }) {
  const { profile, stats } = githubFallbackData;

  return (
    <aside
      className="mid-right-gh-sidebar"
      onClick={onNavigateToProgress}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNavigateToProgress();
        }
      }}
      title="Open live GitHub Progress dashboard"
      aria-label="GitHub Progress side bar: 15 repos, 12 stars, 10 followers"
    >
      {/* Top GitHub Brand & Live Dot */}
      <div className="mr-gh-header">
        <div className="mr-gh-icon-box">
          <GithubIcon size={18} />
        </div>
        <span className="mr-gh-live-dot" title="Live Synced" />
      </div>

      <div className="mr-gh-divider" />

      {/* Metrics Column (Small Size in Side of Body) */}
      <div className="mr-gh-metrics">
        {/* Repos */}
        <div className="mr-gh-stat-item" title="15 Public Repositories">
          <FolderGit2 size={13} className="mr-stat-icon" />
          <span className="mr-stat-value">{profile.public_repos || 15}</span>
          <span className="mr-stat-label">repos</span>
        </div>

        {/* Stars */}
        <div className="mr-gh-stat-item" title="12 Stars">
          <Star size={13} className="mr-stat-icon star" />
          <span className="mr-stat-value">12</span>
          <span className="mr-stat-label">stars</span>
        </div>

        {/* Followers */}
        <div className="mr-gh-stat-item" title="10 Followers">
          <Users size={13} className="mr-stat-icon" />
          <span className="mr-stat-value">{profile.followers || 10}</span>
          <span className="mr-stat-label">fans</span>
        </div>
      </div>

      <div className="mr-gh-divider" />

      {/* Quick Action Footer */}
      <div className="mr-gh-action">
        <span className="mr-action-text">/present</span>
        <ArrowRight size={11} className="mr-action-arrow" />
      </div>
    </aside>
  );
}
