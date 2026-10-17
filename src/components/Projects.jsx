import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TechLogo from './TechLogo';

export default function Projects() {
  const { projects } = portfolioData;

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
          Selected work — live applications and open source code
        </p>
      </div>

      {/* 2-Column Bento Project Cards Grid */}
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div 
            key={proj.id} 
            className="project-card"
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
                  <TechLogo name={tag} size={14} className="tech-logo-svg" />
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
                    title="Open live application"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
