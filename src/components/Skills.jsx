import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillsCategories } = portfolioData;

  return (
    <section id="skills" className="samidev-section">
      {/* Numbered Section Header with Script Badge matching Pictures */}
      <div className="samidev-section-header">
        <div className="samidev-section-title-row">
          <span className="samidev-section-num">03</span>
          <h2 className="samidev-section-heading">
            Skills &amp; <span className="samidev-script-badge">stack</span>
          </h2>
        </div>
        <p className="samidev-section-subtitle">
          Core technologies and frameworks I reach for to ship software
        </p>
      </div>

      <div className="skills-grid">
        {skillsCategories.map((cat, idx) => (
          <div key={idx} className="skill-category-card">
            <div className="category-top">
              <span className="category-number">{cat.number}</span>
              <h3 className="category-title">{cat.category}</h3>
            </div>

            <div className="skills-tags-wrap">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
