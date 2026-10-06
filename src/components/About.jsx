import React, { useState, useEffect } from 'react';
import { Award, BookOpen, CheckCircle, Code2, Cpu, Globe, Server, GraduationCap, Play, RefreshCw } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  const fullText = resumeData.summary;
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25); // smooth 25ms speed

    return () => clearInterval(interval);
  }, [fullText]);

  const triggerReType = () => {
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25);
  };

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Driven by Engineering Excellence</h2>
          <p className="section-desc">
            Passionate software engineer combining full-stack web architectures with machine learning models to solve real-world problems.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Card: Summary & Interactive Typewriter */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              border: isTyping ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
            }}
            onClick={triggerReType}
            title="Click to replay typing effect"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      padding: '0.75rem',
                      borderRadius: '14px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'var(--accent-indigo)',
                    }}
                  >
                    <Code2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Professional Profile</h3>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerReType();
                  }}
                  className="badge badge-cyan"
                  style={{ cursor: 'pointer', background: 'rgba(6, 182, 212, 0.15)', border: 'none', padding: '0.35rem 0.75rem' }}
                >
                  <RefreshCw size={13} className={isTyping ? "animate-spin-slow" : ""} /> {isTyping ? 'Typing...' : 'Replay Type'}
                </button>
              </div>

              {/* Typewriter Terminal Box */}
              <div
                style={{
                  background: 'rgba(7, 10, 19, 0.65)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  minHeight: '160px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.975rem',
                  lineHeight: 1.7,
                  color: '#e2e8f0',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ color: 'var(--accent-indigo)', fontWeight: 'bold' }}>&gt; </span>
                {displayedText}
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '18px',
                    background: 'var(--accent-cyan)',
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    boxShadow: '0 0 10px #06b6d4',
                    animation: isTyping ? 'none' : 'pulseGlow 1s infinite',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1.1rem' }}>Backend First</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>Java, Spring Boot, REST APIs</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '1.1rem' }}>Modern Web</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>React.js, HTML5, CSS3, JS</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="badge badge-purple" style={{ padding: '0.5rem 1rem' }}>
                <Award size={16} /> Azure Certified
              </div>
              <div className="badge badge-cyan" style={{ padding: '0.5rem 1rem' }}>
                <BookOpen size={16} /> IRJCS Published Author
              </div>
            </div>
          </div>

          {/* Right Card: Education Timeline & Academic Background */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '14px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: 'var(--accent-cyan)',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Education & Foundation</h3>
            </div>

            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{edu.degree}</h4>
                  <span className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                    {edu.period}
                  </span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem', margin: '0.4rem 0' }}>
                  {edu.institution}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.75rem 0' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Academic Standing:</span>
                  <span style={{ fontWeight: 800, color: '#10b981', fontSize: '1rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                    CGPA: {edu.cgpa}
                  </span>
                </div>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {edu.details}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 'auto', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px dashed var(--border-color)' }}>
              <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Core Academic Subjects:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "OOP", "Software Engg"].map((subj, sIdx) => (
                  <span key={sIdx} style={{ fontSize: '0.775rem', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-muted)', padding: '0.2rem 0.55rem', borderRadius: '6px' }}>
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
