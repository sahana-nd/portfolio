import React from 'react';
import { Award, BookOpen, Cloud, Code2, ShieldCheck, ExternalLink, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Recognitions & Proof</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-desc">
            Verified industry credentials, published academic research, and official activity proofs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Certifications Cards */}
          {resumeData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      padding: '0.75rem',
                      borderRadius: '14px',
                      background: cert.icon === 'Cloud' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                      color: cert.icon === 'Cloud' ? 'var(--accent-cyan)' : 'var(--accent-indigo)',
                    }}
                  >
                    {cert.icon === 'Cloud' ? <Cloud size={28} /> : <Code2 size={28} />}
                  </div>
                  <span className="badge badge-purple" style={{ fontSize: '0.8rem' }}>
                    <ShieldCheck size={14} /> Verified Credential
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Issued by {cert.issuer}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>{cert.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Publications & Extra Achievements */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
            Academic Publication & Internship Proofs
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {resumeData.achievements.map((ach, aIdx) => (
              <div
                key={aIdx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(14, 21, 38, 0.7), rgba(139, 92, 246, 0.08))',
                  borderColor: 'rgba(139, 92, 246, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-purple)' }}>
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>{ach.title}</h4>
                      <div style={{ color: 'var(--accent-cyan)', fontSize: '0.825rem', fontFamily: 'var(--font-mono)' }}>
                        {ach.source}
                      </div>
                    </div>
                  </div>

                  <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    "{ach.topic}"
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {ach.details}
                  </p>
                </div>

                <a
                  href={ach.proofUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', justifyContent: 'center' }}
                >
                  <LinkIcon size={14} color="var(--accent-cyan)" /> {ach.proofText} <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
