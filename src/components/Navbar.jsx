import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 10, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--gradient-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '800',
              fontSize: '1.2rem',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            SN
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em' }}>
              Sahana<span style={{ color: 'var(--accent-cyan)' }}>.N</span>
            </span>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Java Full Stack & AI
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.925rem',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={onOpenResumeModal}
            className="btn-secondary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            <FileText size={16} />
            Resume
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            <Sparkles size={16} />
            Hire Me
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-color)',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '600',
                padding: '0.5rem 0',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FileText size={18} /> Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* CSS snippet for desktop nav toggle */}
      <style>{`
        @media (min-width: 850px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
