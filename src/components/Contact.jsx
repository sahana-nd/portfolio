import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send message via Web3Forms API directly to sahana.nn09@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e6b840bc-8051-4f1d-91b6-9811fa15c329', // Web3Forms free public access key endpoint for sahana.nn09@gmail.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          to_email: 'sahana.nn09@gmail.com'
        })
      });

      const result = await response.json();
      
      // Also trigger mailto as fallback if needed
      if (!result.success) {
        const mailtoUrl = `mailto:${resumeData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
        window.open(mailtoUrl, '_blank');
      }

      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback mailto trigger
      const mailtoUrl = `mailto:${resumeData.email}?subject=${encodeURIComponent('Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative', background: 'rgba(14, 21, 38, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-desc">
            All messages submitted here are delivered <strong>directly to Sahana's Gmail inbox (<span style={{ color: 'var(--accent-cyan)' }}>sahana.nn09@gmail.com</span>)</strong>.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
                Direct Contact
              </h3>

              {/* Email item */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-indigo)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dark)' }}>Email Address</div>
                    <a href={`mailto:${resumeData.email}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                      {resumeData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone item */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dark)' }}>Phone Number</div>
                    <a href={`tel:${resumeData.phone}`} style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                      {resumeData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedPhone ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedPhone ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location item */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dark)' }}>Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{resumeData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
              >
                <GithubIcon size={22} color="var(--accent-indigo)" /> GitHub
              </a>
              <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }} />
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
              >
                <LinkedinIcon size={22} color="#0077b5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inbox Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare size={22} color="var(--accent-cyan)" /> Send Direct Email
            </h3>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Delivered straight to <strong>{resumeData.email}</strong>
            </p>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                <Sparkles size={40} color="var(--accent-emerald)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Email Sent to Sahana!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Your message was sent directly to <strong>sahana.nn09@gmail.com</strong>. Sahana will respond soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 19, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. hr@company.com"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 19, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Developer Job Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 19, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 19, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ justifyContent: 'center', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
                >
                  <Send size={18} /> {loading ? 'Sending to Inbox...' : 'Send to Sahana\'s Email'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
