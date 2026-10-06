import React, { useState } from 'react';
import { ExternalLink, Sparkles, Check, BookOpen, Layers, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects & Innovations</h2>
          <p className="section-desc">
            Real-world web applications, machine learning detection models, and AI assistive wearable tech solutions built with precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {resumeData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Project Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.00)')}
                />
                
                {/* Category Badge Floating overlay */}
                <span
                  className="badge badge-cyan"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(7, 10, 19, 0.8)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {project.category}
                </span>

                {project.published && (
                  <span
                    className="badge badge-purple"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(139, 92, 246, 0.85)',
                      color: '#fff',
                    }}
                  >
                    <BookOpen size={13} /> Published Paper
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#a5b4fc',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                      style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.875rem', justifyContent: 'center' }}
                    >
                      <Layers size={16} /> Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.6rem 1rem', fontSize: '0.875rem' }}
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(7, 10, 19, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '24px',
              padding: '2rem',
              position: 'relative',
              border: '1px solid var(--accent-indigo)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), var(--shadow-glow)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }}
            />

            <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
              {selectedProject.category}
            </span>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            {selectedProject.published && (
              <div style={{ background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <BookOpen size={24} color="var(--accent-purple)" />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Published Journal Article</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{selectedProject.journal}</div>
                </div>
              </div>
            )}

            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Key Architectural Highlights:</h4>
            <div style={{ marginBottom: '1.5rem' }}>
              {selectedProject.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.6rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                  <Check size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Technologies Used:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {selectedProject.techStack.map((t, idx) => (
                <span key={idx} className="mono-font" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', color: '#67e8f9' }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <GithubIcon size={18} /> View GitHub Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
