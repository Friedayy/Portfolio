import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="samidev-section">
      {/* Numbered Section Header with Script Badge matching Picture 1 */}
      <div className="samidev-section-header">
        <div className="samidev-section-title-row">
          <span className="samidev-section-num">02</span>
          <h2 className="samidev-section-heading">
            Experience &amp; <span className="samidev-script-badge">impact</span>
          </h2>
        </div>
        <p className="samidev-section-subtitle">
          Roles, impact, and systems delivered in production context
        </p>
      </div>

      <div className="timeline-list">
        {experience.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-company">{item.company}</span>
              </div>
              <span className="timeline-period">{item.period}</span>
            </div>

            <p className="timeline-desc">{item.description}</p>

            <div className="timeline-impact">
              <CheckCircle2 size={16} />
              <span>{item.impact}</span>
            </div>

            <div className="tech-tag-row">
              {item.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
