import React, { useEffect } from 'react';
import { X, CheckCircle2, User } from 'lucide-react';
import { InstagramIcon, GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function InstagramDpModal({ isOpen, onClose, avatarUrl }) {
  const { personal, socials } = portfolioData;

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const displayAvatar = avatarUrl || personal.avatarSvg || personal.avatar || '/images/profile-avatar.svg';
  const instagramSocial = socials.find((s) => s.name === 'Instagram');
  const githubSocial = socials.find((s) => s.name === 'GitHub');

  return (
    <div 
      className="insta-dp-overlay" 
      role="dialog" 
      aria-modal="true"
      aria-label="Profile Picture Preview"
    >
      {/* Standalone blurred backdrop layer - NOT wrapping dialog, preventing any image blur artifacts */}
      <div 
        className="insta-dp-backdrop" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Independent crisp dialog container on its own hardware composite layer */}
      <div 
        className="insta-dp-dialog" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="insta-dp-top-bar">
          <div className="insta-dp-top-left">
            <span className="insta-app-tag">
              <User size={15} />
              <span>Profile Picture</span>
            </span>
          </div>

          <button 
            type="button" 
            className="insta-dp-close-btn" 
            onClick={onClose}
            title="Close (Esc)"
            aria-label="Close profile picture"
          >
            <X size={18} />
          </button>
        </div>

        {/* Central Circular Avatar with Iconic Instagram Story Sunset Gradient Ring */}
        <div className="insta-story-ring-wrap">
          <div className="insta-story-gradient-ring">
            <div className="insta-story-inner-gap">
              <img 
                src={displayAvatar} 
                alt={`${personal.name} Profile Picture`} 
                className="insta-dp-image"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                onError={(e) => {
                  if (e.target.src.indexOf('profile-avatar.svg') !== -1) {
                    e.target.src = '/images/me.svg';
                  } else if (e.target.src.indexOf('me.svg') !== -1) {
                    e.target.src = '/images/me.jpeg';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Profile Meta Underneath */}
        <div className="insta-dp-info">
          <div className="insta-dp-name-row">
            <h3 className="insta-dp-username">_bhatamaan_</h3>
            <CheckCircle2 size={18} className="insta-verified-badge" title="Verified Creator" />
          </div>

          <p className="insta-dp-fullname">{personal.name}</p>
          <p className="insta-dp-role">{personal.title} &bull; AI Enthusiast</p>

          <div className="insta-dp-actions">
            {instagramSocial && (
              <a 
                href={instagramSocial.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="insta-dp-action-btn insta-btn-primary"
                title="View Instagram Profile"
              >
                <InstagramIcon size={15} />
                <span>Instagram Profile</span>
              </a>
            )}

            {githubSocial && (
              <a 
                href={githubSocial.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="insta-dp-action-btn insta-btn-secondary"
                title="View GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
