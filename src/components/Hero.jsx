import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Code, Cpu, Server, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Hero({ onOpenResumeModal }) {
  const titles = ["Java Full Stack Developer", "Spring Boot & REST API Specialist", "AI & Azure Cloud Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="bg-grid-pattern"
    >
      {/* Background Lighting Orb */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column Text */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#06b6d4',
                    boxShadow: '0 0 10px #06b6d4',
                    display: 'inline-block',
                  }}
                />
                Available for Full-time Roles
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={14} color="var(--accent-cyan)" /> Bengaluru, India
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{resumeData.name}</span> 👋
            </h1>

            {/* Dynamic Typewriter Title */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                color: '#cbd5e1',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ color: 'var(--accent-indigo)', marginRight: '0.5rem' }}>&gt;</span>
              <span>{displayText}</span>
              <span className="animate-pulse-glow" style={{ color: 'var(--accent-cyan)' }}>_</span>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '600px',
              }}
            >
              Information Science Engineering graduate with experience building full-stack Java applications with Spring Boot, MySQL, and React, alongside machine learning & AI systems.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              
              {/* Direct Downloadable PDF Link */}
              <a
                href="/Sahana_Resume.pdf"
                download="Sahana_N_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <Download size={18} /> Download Resume
              </a>

              <button
                onClick={onOpenResumeModal}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.2rem', fontSize: '0.9rem' }}
                title="Preview PDF online"
              >
                <FileText size={18} /> Preview PDF
              </button>
            </div>

            {/* Quick Links & Socials */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s ease',
                  padding: '0.55rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s ease',
                  padding: '0.55rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0077b5';
                  e.currentTarget.style.borderColor = '#0077b5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s ease',
                  padding: '0.55rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Holographic Glowing Ring */}
            <div
              style={{
                position: 'absolute',
                top: '-5%',
                left: '5%',
                right: '5%',
                bottom: '-5%',
                borderRadius: '30%',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(6, 182, 212, 0.25))',
                filter: 'blur(35px)',
                zIndex: 0,
              }}
            />

            {/* Avatar Frame */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '12px',
                borderRadius: '28px',
                maxWidth: '420px',
                width: '100%',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), var(--shadow-glow)',
              }}
            >
              <img
                src={resumeData.avatar}
                alt={resumeData.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />

              {/* Floating Tech Pill 1 */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '-20px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                }}
              >
                <Server size={18} color="var(--accent-indigo)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Spring Boot</span>
              </div>

              {/* Floating Tech Pill 2 */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-20px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(6, 182, 212, 0.4)',
                  animationDelay: '2s',
                }}
              >
                <Cpu size={18} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Azure Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Stat Bar */}
        <div
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {resumeData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                background: 'rgba(15, 23, 42, 0.4)',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                {stat.label}
              </div>
              <div style={{ color: 'var(--text-dark)', fontSize: '0.8rem' }}>{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
