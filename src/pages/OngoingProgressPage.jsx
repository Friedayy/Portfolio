import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  RefreshCw,
  FolderGit2,
  Star,
  Users,
  GitCommit,
  GitBranch,
  Clock,
  Terminal,
  Compass,
  ExternalLink,
  Sparkles,
  User,
  Code2
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { githubFallbackData } from '../data/githubData';
import { portfolioData } from '../data/portfolioData';

// GitHub official language colors
const GITHUB_LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Python: '#3572A5',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  'React / JSX': '#61dafb',
  'Jupyter Notebook': '#da5b0b'
};

const DEFAULT_LANGUAGES = [
  { name: 'JavaScript', percentage: 76.5, color: '#f1e05a' },
  { name: 'CSS', percentage: 11.6, color: '#563d7c' },
  { name: 'HTML', percentage: 7.2, color: '#e34c26' },
  { name: 'Java', percentage: 4.7, color: '#b07219' }
];

export default function OngoingProgressPage({ onBackToHome, theme, onOpenDp }) {
  const { now } = portfolioData;
  const [profile, setProfile] = useState(githubFallbackData.profile);
  const [events, setEvents] = useState(githubFallbackData.fallbackEvents);
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGES);
  const [totalStars, setTotalStars] = useState(23);
  const [isApiLive, setIsApiLive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState('Just now');

  // Format relative timestamp
  const getRelativeTime = (isoString) => {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffMins < 60) return `${Math.max(1, diffMins)}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 30) return `${diffDays}d ago`;
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch {
      return 'Recently';
    }
  };

  // Fetch live GitHub data strictly for repo count, stars, languages, friends, and commit events
  const fetchGitHubData = async (forceRefresh = false) => {
    setIsLoading(true);
    try {
      const cacheKey = 'gh_telemetry_cache_v2';
      if (!forceRefresh) {
        try {
          const cached = sessionStorage.getItem(cacheKey);
          if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            // 5 minute cache to protect GitHub API rate limit (60 req/hr)
            if (Date.now() - timestamp < 5 * 60 * 1000) {
              if (data.profile) setProfile(data.profile);
              if (data.events && data.events.length > 0) setEvents(data.events);
              if (data.languages && data.languages.length > 0) setLanguages(data.languages);
              if (data.totalStars) setTotalStars(data.totalStars);
              setIsApiLive(true);
              setLastRefreshed('Just now (synced)');
              setIsLoading(false);
              return;
            }
          }
        } catch {
          // Ignore cache read errors
        }
      }

      const [userRes, reposRes] = await Promise.allSettled([
        fetch('https://api.github.com/users/Friedayy'),
        fetch('https://api.github.com/users/Friedayy/repos?sort=pushed&per_page=15')
      ]);

      let liveSuccess = false;
      let newProfile = profile;
      let newLanguages = languages;
      let newStars = totalStars;
      let newEvents = events;

      if (userRes.status === 'fulfilled' && userRes.value.ok) {
        const userData = await userRes.value.json();
        newProfile = {
          ...profile,
          name: userData.name || profile.name,
          login: userData.login || profile.login,
          avatar_url: userData.avatar_url || profile.avatar_url,
          avatar_svg: '/images/profile-avatar.svg',
          bio: userData.bio || profile.bio,
          public_repos: userData.public_repos ?? profile.public_repos,
          followers: userData.followers ?? profile.followers,
          following: userData.following ?? profile.following,
          html_url: userData.html_url || profile.html_url
        };
        setProfile(newProfile);
        liveSuccess = true;
      }

      // Process recent repos to calculate live language breakdown, stars, and real commit progress
      if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
        const reposData = await reposRes.value.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          let calculatedStars = 0;
          const langTotals = {};
          let totalWeight = 0;

          reposData.forEach((repo) => {
            if (typeof repo.stargazers_count === 'number') {
              calculatedStars += repo.stargazers_count;
            }
            if (repo.language) {
              const weight = Math.max(repo.size || 10, 10);
              langTotals[repo.language] = (langTotals[repo.language] || 0) + weight;
              totalWeight += weight;
            }
          });

          if (calculatedStars > 0) {
            newStars = calculatedStars;
            setTotalStars(calculatedStars);
          }

          if (totalWeight > 0) {
            const sortedLangs = Object.entries(langTotals)
              .sort((a, b) => b[1] - a[1])
              .map(([name, weight]) => {
                const pct = (weight / totalWeight) * 100;
                return {
                  name,
                  percentage: Number(pct.toFixed(1)),
                  color: GITHUB_LANG_COLORS[name] || '#a855f7'
                };
              });

            if (sortedLangs.length > 0) {
              newLanguages = sortedLangs;
              setLanguages(sortedLangs);
              liveSuccess = true;
            }
          }

          // Fetch real commits from top active recently pushed repositories (e.g. Portfolio, solar-flare)
          const topRepos = reposData.slice(0, 3);
          const commitFetches = topRepos.map(async (repo) => {
            try {
              const cRes = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=5`);
              if (!cRes.ok) return [];
              const cData = await cRes.json();
              if (!Array.isArray(cData)) return [];
              return cData.map((c) => ({
                id: c.sha,
                repo: {
                  name: repo.full_name,
                  url: repo.html_url
                },
                branch: repo.default_branch || 'main',
                commitSha: c.sha ? c.sha.substring(0, 7) : '',
                message: c.commit?.message ? c.commit.message.split('\n')[0] : 'Code update pushed to repository',
                time: getRelativeTime(c.commit?.author?.date || c.commit?.committer?.date),
                createdAt: c.commit?.author?.date || c.commit?.committer?.date,
                url: c.html_url || `https://github.com/${repo.full_name}/commit/${c.sha}`
              }));
            } catch {
              return [];
            }
          });

          const commitResults = await Promise.allSettled(commitFetches);
          const collectedCommits = [];
          commitResults.forEach((res) => {
            if (res.status === 'fulfilled' && Array.isArray(res.value)) {
              collectedCommits.push(...res.value);
            }
          });

          if (collectedCommits.length > 0) {
            // Sort by commit creation timestamp descending and display top 8
            collectedCommits.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            newEvents = collectedCommits.slice(0, 8);
            setEvents(newEvents);
            liveSuccess = true;
          }
        }
      }

      setIsApiLive(liveSuccess);
      setLastRefreshed('Just now');

      if (liveSuccess) {
        try {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({
              data: {
                profile: newProfile,
                events: newEvents,
                languages: newLanguages,
                totalStars: newStars
              },
              timestamp: Date.now()
            })
          );
        } catch {
          // Ignore cache write errors
        }
      }
    } catch {
      setIsApiLive(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="ongoing-page-container">
      {/* Top Bar with Return to Portfolio */}
      <header className="ongoing-header">
        <button
          type="button"
          onClick={onBackToHome}
          className="ongoing-back-btn"
          title="Return to main portfolio"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        <div className="ongoing-header-meta">
          <div className="ongoing-sync-badge">
            <span className={`gh-pulse-dot ${isApiLive ? 'live' : 'cached'}`} />
            <span>{isApiLive ? 'Live Synced' : 'Active'}</span>
          </div>

          <button
            type="button"
            onClick={() => fetchGitHubData(true)}
            className={`ongoing-sync-btn ${isLoading ? 'spinning' : ''}`}
            title="Force refresh latest GitHub data"
            disabled={isLoading}
          >
            <RefreshCw size={14} />
            <span>{isLoading ? 'Syncing...' : 'Refresh'}</span>
          </button>
        </div>
      </header>

      {/* Hero Banner (Picture removed per request) */}
      <div className="ongoing-hero-banner">
        <div className="ongoing-hero-text">
          <div className="ongoing-subtag">// ONGOING & GITHUB TELEMETRY</div>
          <h1 className="ongoing-title">
            Ongoing <span className="gradient-text">Progress Hub</span>
          </h1>
          <p className="ongoing-desc">
            Tracking what I'm shipping now and real-time GitHub progress for{' '}
            <a
              href="https://github.com/Friedayy"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-link-highlight"
            >
              @Friedayy
            </a>.
          </p>
        </div>
      </div>

      {/* SECTION 1: ONGOING PROGRESS */}
      <section className="ongoing-section">
        <div className="ongoing-section-header">
          <div className="ongoing-section-label">
            <Compass size={16} />
            <span>Current Learning & Shipping Focus</span>
          </div>
          <h2 className="ongoing-section-title">What I'm Doing Now</h2>
        </div>

        {/* 3 Core Topics (Milestones cards removed per request) */}
        <div className="ongoing-topics-grid">
          {now.items.map((item, idx) => (
            <div key={idx} className="ongoing-topic-card">
              <span className="topic-num">0{idx + 1}</span>
              <h3 className="topic-title">{item.topic}</h3>
              <p className="topic-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: GITHUB PROGRESS (WITH LIVE FETCHED GITHUB PROFILE PICTURE) */}
      <section className="ongoing-section">
        <div className="ongoing-section-header">
          <div className="ongoing-section-label">
            <GithubIcon size={16} />
            <span>Real-Time GitHub Progress</span>
          </div>
          <h2 className="ongoing-section-title">GitHub Metrics & Commit Progress</h2>
        </div>

        {/* ENLARGED GITHUB LIVE PROFILE SHOWCASE */}
        <div className="ongoing-gh-profile-card enlarged">
          <div className="gh-profile-user-info enlarged">
            <div
              className="gh-profile-avatar-wrap enlarged clickable-dp"
              onClick={() => onOpenDp && onOpenDp(profile.avatar_svg || '/images/profile-avatar.svg')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenDp && onOpenDp(profile.avatar_svg || '/images/profile-avatar.svg');
                }
              }}
              title="Click to view Profile Picture"
              aria-label="View Profile Picture"
            >
              <div className="ongoing-avatar-story-ring">
                {/* SVG PROFILE PICTURE FOR MAXIMUM HIGH-DPI FIDELITY */}
                <img
                  src={profile.avatar_svg || '/images/profile-avatar.svg'}
                  alt={profile.name || 'Friedayy'}
                  className="ongoing-gh-avatar enlarged svg-quality"
                  width="118"
                  height="118"
                  onError={(e) => {
                    if (e.currentTarget.src.indexOf('profile-avatar.svg') !== -1) {
                      e.currentTarget.src = '/images/me.svg';
                    } else if (e.currentTarget.src.indexOf('me.svg') !== -1) {
                      e.currentTarget.src = profile.avatar_url || '/images/me.jpeg';
                    }
                  }}
                />
                <div className="ongoing-avatar-hover-overlay">
                  <User size={22} className="avatar-hover-icon" />
                  <span className="avatar-hover-label">Profile Picture</span>
                </div>
              </div>

              <span className="gh-avatar-status-badge">
                <span className="gh-pulse-dot live" />
                ACTIVE
              </span>
            </div>

            <div className="gh-profile-text enlarged">
              <div className="gh-profile-top-line">
                <h3 className="gh-profile-display-name enlarged">
                  {profile.name || 'Mohammad Amaan Bhat'}
                </h3>
                <span className="gh-profile-synced-pill">
                  <span className="gh-pulse-dot live" />
                  GitHub Synced
                </span>
              </div>

              <div className="gh-profile-handle-row">
                <a
                  href={profile.html_url || 'https://github.com/Friedayy'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-profile-username-link enlarged"
                >
                  <GithubIcon size={16} />
                  <span>@{profile.login || 'Friedayy'}</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenDp && onOpenDp(profile.avatar_svg || '/images/profile-avatar.svg')}
                  className="ongoing-dp-badge-btn"
                  title="View Profile Picture"
                  aria-label="View Profile Picture"
                >
                  <User size={14} className="ongoing-dp-badge-icon" />
                  <span>Profile Picture</span>
                </button>
              </div>

              {profile.bio && (
                <p className="gh-profile-bio-text enlarged">
                  "{profile.bio}"
                </p>
              )}
            </div>
          </div>

          <div className="gh-profile-action-side">
            <a
              href={profile.html_url || 'https://github.com/Friedayy'}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-visit-profile-btn enlarged"
            >
              <GithubIcon size={16} />
              <span>Visit GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* The 3 Core Stats Cards: Repo Count, Stars Count, Friends (Followers) */}
        <div className="ongoing-gh-metrics-grid">
          {/* 1. Repo Count */}
          <div className="ongoing-metric-card">
            <div className="metric-header">
              <span className="metric-title">Repo Count</span>
              <FolderGit2 size={18} className="metric-icon" />
            </div>
            <div className="metric-number">{profile.public_repos || 15}</div>
            <div className="metric-note">Public repositories</div>
          </div>

          {/* 2. Stars Count */}
          <div className="ongoing-metric-card">
            <div className="metric-header">
              <span className="metric-title">Stars Count</span>
              <Star size={18} className="metric-icon star" />
            </div>
            <div className="metric-number">{totalStars}</div>
            <div className="metric-note">Community starred repos</div>
          </div>

          {/* 3. Friends (Followers) Count */}
          <div className="ongoing-metric-card">
            <div className="metric-header">
              <span className="metric-title">Friends</span>
              <Users size={18} className="metric-icon" />
            </div>
            <div className="metric-number">{profile.followers || 10}</div>
            <div className="metric-note">Developers following</div>
          </div>
        </div>

        {/* OVERALL LANGUAGES FROM RECENT REPOS (GITHUB-STYLE) */}
        <div className="ongoing-gh-languages-card">
          <div className="gh-languages-header">
            <div className="gh-languages-title-wrap">
              <Code2 size={18} className="gh-languages-icon" />
              <div className="gh-languages-headings">
                <h3 className="gh-languages-title">Languages</h3>
                <span className="gh-languages-sub">Overall languages breakdown from recent repositories</span>
              </div>
            </div>
            <span className="gh-languages-badge">
              <span className="gh-pulse-dot live" />
              Recent Repos Telemetry
            </span>
          </div>

          {/* GitHub multi-colored segmented progress bar */}
          <div className="gh-languages-bar" role="progressbar" aria-label="Languages breakdown bar">
            {languages.map((lang, idx) => (
              <div
                key={lang.name || idx}
                className="gh-language-segment"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color
                }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* GitHub legend list */}
          <div className="gh-languages-legend">
            {languages.map((lang, idx) => (
              <div key={lang.name || idx} className="gh-language-legend-item">
                <span
                  className="gh-language-color-dot"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="gh-language-name">{lang.name}</span>
                <span className="gh-language-percentage">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Commit Progress Stream */}
        <div className="ongoing-commit-block">
          <div className="gh-terminal-card">
            <div className="gh-terminal-bar">
              <div className="gh-terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="gh-terminal-title">
                <Terminal size={12} />
                <span>git commit progress — recent activity stream</span>
              </div>
              <span className="gh-terminal-time">Refreshed: {lastRefreshed}</span>
            </div>

            <div className="gh-commit-stream">
              {events.map((evt, idx) => (
                <div key={evt.id || idx} className="gh-commit-item">
                  <div className="gh-commit-node">
                    <div className="gh-commit-dot" />
                    {idx < events.length - 1 && <div className="gh-commit-line" />}
                  </div>

                  <div className="gh-commit-content">
                    <div className="gh-commit-top">
                      <a
                        href={evt.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gh-commit-repo"
                      >
                        <FolderGit2 size={13} />
                        <span>{evt.repo.name}</span>
                      </a>

                      {evt.branch && (
                        <span className="gh-commit-branch">
                          <GitBranch size={11} />
                          <span>{evt.branch}</span>
                        </span>
                      )}

                      {evt.commitSha && (
                        <a
                          href={evt.url || `${evt.repo.url}/commit/${evt.commitSha}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gh-commit-sha gh-commit-sha-link"
                          title={`View commit ${evt.commitSha} on GitHub`}
                        >
                          {evt.commitSha}
                        </a>
                      )}

                      <span className="gh-commit-time">
                        <Clock size={11} />
                        <span>{evt.time}</span>
                      </span>
                    </div>

                    <p className="gh-commit-msg">{evt.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
