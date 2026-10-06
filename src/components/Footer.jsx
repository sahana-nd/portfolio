import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04060c',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Left Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--gradient-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
              }}
            >
              SN
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>
                Sahana N
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dark)' }}>
                Java Full Stack & AI Software Engineer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href={resumeData.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <GithubIcon size={20} />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${resumeData.email}`} style={{ color: 'var(--text-muted)' }}>
              <Mail size={20} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-dark)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Sahana N. Built with React & Modern Glassmorphism.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Crafted for high performance & public accessibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
