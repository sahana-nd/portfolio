import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, ExternalLink, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative', background: 'rgba(14, 21, 38, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Industry Experience</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-desc">
            Hands-on full-stack development building production-grade web applications in professional software engineering environments.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {resumeData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.5rem',
                position: 'relative',
                borderLeft: '4px solid var(--accent-indigo)',
                boxShadow: 'var(--shadow-glow)',
                borderRadius: '24px',
              }}
            >
              {/* Top Row Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge badge-purple" style={{ marginBottom: '0.6rem' }}>
                    {exp.type}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.25rem' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 600, background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '8px' }}>
                    <Calendar size={15} color="var(--accent-indigo)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-dark)', fontSize: '0.85rem' }}>
                    <MapPin size={13} color="var(--accent-cyan)" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Internship Project Spotlight Box */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  marginBottom: '1.75rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Featured Internship Project
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                    {exp.projectTitle}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Full-stack healthcare management application with role-based authentication, appointment booking workflows, and MySQL backend.
                  </p>
                </div>
                <div style={{ overflow: 'hidden', borderRadius: '12px', height: '140px' }}>
                  <img
                    src={exp.projectImage}
                    alt={exp.projectTitle}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Bullet highlights */}
              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Key Contributions & Responsibilities:
                </h5>
                {exp.highlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2 size={17} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: 600, alignSelf: 'center', marginRight: '0.5rem' }}>
                  Technologies Employed:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
