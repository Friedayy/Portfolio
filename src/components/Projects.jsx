import React, { useState } from 'react';
import { 
  Monitor, 
  ExternalLink, 
  Code2, 
  BookOpen, 
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  return (
    <section id="work" className="portfolio-section projects-section">
      {/* Numbered Section Header with Script Badge */}
      <div className="section-header projects-section-header">
        <div className="section-title-row">
          <span className="section-num">01</span>
          <h2 className="section-heading">
            Projects &amp; <span className="script-badge">demos</span>
          </h2>
        </div>
        <p className="section-subtitle">
          Selected work — live demos, code, and case studies
        </p>
      </div>

      {/* 2-Column Bento Project Cards Grid */}
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div 
            key={proj.id} 
            className="project-card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.removeProperty('--card-mouse-x');
              e.currentTarget.style.removeProperty('--card-mouse-y');
            }}
          >
            {/* Card Top Meta */}
            <div className="project-card-top-row">
              <span className="project-card-num">0{idx + 1}</span>

              <div className="project-card-badges">
                {proj.featured && (
                  <span className="project-featured-badge">Featured</span>
                )}
                <span className="project-deployed-badge">
                  {proj.status || 'DEPLOYED'}
                </span>
              </div>
            </div>

            {/* Title & Type */}
            <h3 className="project-card-title">{proj.title}</h3>
            <div className="project-card-type">Personal Project</div>

            {/* Description */}
            <p className="project-card-desc">{proj.description}</p>

            {/* Tech Stack Pills */}
            <div className="project-card-tech-row">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="project-tech-chip">
                  <span className="tech-chip-dot" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Action Links Bar */}
            <div className="project-card-actions-bar">
              <div className="project-action-links-left">
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="Preview demo"
                  >
                    <Monitor size={13} />
                    <span>Preview</span>
                  </a>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="Open live app"
                  >
                    <ExternalLink size={13} />
                    <span>Live</span>
                  </a>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="Inspect source code on GitHub"
                  >
                    <Code2 size={13} />
                    <span>Code</span>
                  </a>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="Read technical case study"
                  >
                    <BookOpen size={13} />
                    <span>Case study</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveScreenshot(activeScreenshot === proj.id ? null : proj.id)}
                className="project-action-link project-screenshot-action-btn"
                title="Toggle visual overview"
              >
                <ImageIcon size={13} />
                <span>Screenshot</span>
              </button>
            </div>

            {/* Expanded Screenshot Drawer if clicked */}
            {activeScreenshot === proj.id && (
              <div className="project-card-screenshot-drawer">
                <div className="screenshot-mockup-frame">
                  <div className="mockup-header-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <span className="mockup-url">{proj.title.toLowerCase().replace(/[\s—]+/g, '-')}.app</span>
                  </div>
                  <div className="mockup-preview-content">
                    <div className="mockup-banner">
                      <h4>{proj.title}</h4>
                      <p>{proj.tagline}</p>
                    </div>
                    <div className="mockup-chips">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="mockup-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
