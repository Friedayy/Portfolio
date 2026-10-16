import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const maxChars = 5000;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('sending');
    setFeedbackMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "da0d1bf2-b9dc-4ed2-aa01-d85f4372fabf";

    try {
      // 1. Send direct email to inbox via Web3Forms
      const emailPromise = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name || 'Anonymous Visitor',
          email: formData.email,
          message: formData.message,
          subject: `📬 Portfolio Contact from ${formData.name || 'Visitor'}`
        })
      }).catch((err) => {
        console.warn('Web3Forms dispatch warning:', err);
        return null;
      });

      // 2. Simultaneously save locally in backend data/messages.json
      const localPromise = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      }).catch((err) => {
        console.warn('Local API dispatch warning:', err);
        return null;
      });

      const [emailRes] = await Promise.all([emailPromise, localPromise]);

      let emailDelivered = false;
      if (emailRes && emailRes.ok) {
        const emailData = await emailRes.json();
        if (emailData.success) {
          emailDelivered = true;
        }
      }

      setStatus('success');
      setFeedbackMessage(
        emailDelivered 
          ? 'Your message has been delivered directly to Amaan\'s email inbox!' 
          : 'Your message has been received! Thank you for reaching out.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setFeedbackMessage('Could not submit message. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="samidev-section">
      {/* Numbered Section Header matching Pictures */}
      <div className="samidev-section-header">
        <div className="samidev-section-title-row">
          <span className="samidev-section-num">04</span>
          <h2 className="samidev-section-heading">
            Contact &amp; <span className="samidev-script-badge">connect</span>
          </h2>
        </div>
        <p className="samidev-section-subtitle">
          Let's talk about projects, open opportunities, or tech architecture
        </p>
      </div>

      <div className="contact-grid">
        {/* Quick Message Form with Backend API submission */}
        <form onSubmit={handleSubmit} className="contact-form-card">
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Send a quick message
          </h3>

          {/* Feedback Alerts */}
          {status === 'success' && (
            <div className="contact-api-alert success">
              <CheckCircle2 size={18} />
              <span>{feedbackMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="contact-api-alert error">
              <AlertCircle size={18} />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              className="form-input"
              disabled={status === 'sending'}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address *</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="alex@example.com"
              required
              className="form-input"
              disabled={status === 'sending'}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message *</label>
            <textarea 
              id="message"
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              maxLength={maxChars}
              placeholder="Recruiter inquiries, freelance collaboration, or quick question..."
              required
              className="form-textarea"
              disabled={status === 'sending'}
            />
            <span className="char-counter">
              {formData.message.length}/{maxChars}
            </span>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="spinning-icon" />
                <span>Sending to Server...</span>
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={16} />
                <span>Message Sent ✓</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Contact Info (Location & Map removed per request) */}
        <div className="contact-info-card">
          <div className="info-item">
            <Mail size={20} className="info-icon" />
            <div>
              <div className="info-title">Email</div>
              <a href={`mailto:${personal.email}`} className="info-value">
                {personal.email}
              </a>
            </div>
          </div>

          <div className="contact-direct-note">
            <p className="direct-note-title">Direct Inquiries</p>
            <p className="direct-note-desc">
              Messages submitted through this form are logged and delivered straight to the backend telemetry queue. Feel free to reach out for contract work, full-time engineering roles, or tech discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
