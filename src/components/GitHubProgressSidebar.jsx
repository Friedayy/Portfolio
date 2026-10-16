import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  GitBranch, 
  GitCommit, 
  FolderGit2, 
  Layers, 
  Sparkles, 
  Activity, 
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function GitHubProgressSidebar({ 
  profile, 
  stats, 
  milestones, 
  activeFilter, 
  setActiveFilter, 
  onBackToHome,
  isApiLive 
}) {
  const { personal } = portfolioData;

  const navSections = [
    { id: 'overview', label: 'Pulse & KPIs', icon: Activity },
    { id: 'commits', label: 'Live Commit Stream', icon: GitCommit },
    { id: 'milestones', label: 'Active Milestones', icon: Layers },
    { id: 'repos', label: 'Repositories', icon: FolderGit2 },
    { id: 'heatmap', label: 'Activity Heatmap', icon: Zap }
  ];

  const scrollToSection = (id) => {
    setActiveFilter(id);
    const el = document.getElementById(`gh-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="gh-sidebar" aria-label="GitHub Progress Sidebar">
      {/* Top Return to Portfolio Button */}
      <button 
        type="button" 
        onClick={onBackToHome} 
        className="gh-sidebar-back-btn"
        title="Return to main portfolio"
      >
        <ArrowLeft size={16} />
        <span>Back to Portfolio</span>
      </button>

      {/* GitHub Profile Capsule */}
      <div className="gh-sidebar-profile">
        <div className="gh-avatar-container">
          <img 
            src={profile.avatar_url || personal.avatar} 
            alt={profile.name || personal.name} 
            className="gh-sidebar-avatar"
            onError={(e) => {
              e.target.src = personal.avatar;
            }}
          />
          <div className="gh-avatar-badge" title="Verified GitHub Developer">
            <GithubIcon size={14} />
          </div>
        </div>

        <div className="gh-profile-meta">
          <h2 className="gh-profile-name">{profile.name || personal.name}</h2>
          <div className="gh-profile-handle">
            <span>@{profile.login || 'Friedayy'}</span>
            <span className="gh-status-dot-wrapper">
              <span className={`gh-pulse-dot ${isApiLive ? 'live' : 'cached'}`} />
              <span className="gh-status-text">{isApiLive ? 'Live Sync' : 'Active'}</span>
            </span>
          </div>
          <p className="gh-profile-bio">"{profile.bio || personal.bio}"</p>
        </div>
      </div>

      {/* GitHub Progress Meters in Sidebar */}
      <div className="gh-sidebar-widget">
        <div className="gh-widget-title">
          <TrendingUp size={14} />
          <span>Sprint Milestones</span>
        </div>
        <div className="gh-milestone-mini-list">
          {milestones.slice(0, 4).map((m) => (
            <div key={m.id} className="gh-mini-milestone">
              <div className="gh-mini-header">
                <span className="gh-mini-title" title={m.title}>{m.title}</span>
                <span className="gh-mini-pct">{m.progress}%</span>
              </div>
              <div className="gh-mini-bar-track">
                <div 
                  className={`gh-mini-bar-fill ${m.progress === 100 ? 'complete' : ''}`} 
                  style={{ width: `${m.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Quick Stats */}
      <div className="gh-sidebar-stats-card">
        <div className="gh-stat-row">
          <span className="gh-stat-label">Public Repos</span>
          <span className="gh-stat-val">{profile.public_repos || stats.totalRepos}</span>
        </div>
        <div className="gh-stat-row">
          <span className="gh-stat-label">Followers</span>
          <span className="gh-stat-val">{profile.followers || 10}</span>
        </div>
        <div className="gh-stat-row">
          <span className="gh-stat-label">Tracked Velocity</span>
          <span className="gh-stat-val highlight">{stats.totalCommitsLastMonth}+ pushes</span>
        </div>
        <div className="gh-stat-row">
          <span className="gh-stat-label">Primary Stack</span>
          <span className="gh-stat-val stack">{stats.primaryLanguage}</span>
        </div>
      </div>

      {/* Sidebar Section Navigation */}
      <nav className="gh-sidebar-nav" aria-label="Page sections">
        <span className="gh-nav-label">QUICK JUMP</span>
        {navSections.map((item) => {
          const Icon = item.icon;
          const isActive = activeFilter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`gh-sidebar-nav-btn ${isActive ? 'active' : ''}`}
            >
              <Icon size={15} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Action Buttons: CV & Profile */}
      <div className="gh-sidebar-actions">
        <a 
          href={personal.resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gh-sidebar-cv-btn"
          title="Download CV"
        >
          <Download size={15} />
          <span>CV</span>
        </a>

        <a 
          href={profile.html_url || "https://github.com/Friedayy"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gh-sidebar-profile-btn"
          title="Open GitHub Profile"
        >
          <GithubIcon size={16} />
          <span>GitHub</span>
          <ExternalLink size={12} style={{ opacity: 0.6 }} />
        </a>
      </div>
    </aside>
  );
}
