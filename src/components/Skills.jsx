import React, { useState } from 'react';
import { Code2, Server, Layout, Database, Container, GitBranch, Cloud, Cpu, CheckCircle2, Wrench } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Cloud', 'DevOps'];

  const filteredSkills = activeCategory === 'All'
    ? resumeData.coreSkills
    : resumeData.coreSkills.filter(s => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} color="var(--accent-indigo)" />;
      case 'Server': return <Server size={22} color="var(--accent-cyan)" />;
      case 'Layout': return <Layout size={22} color="var(--accent-pink)" />;
      case 'Database': return <Database size={22} color="var(--accent-emerald)" />;
      case 'Container': return <Container size={22} color="var(--accent-purple)" />;
      case 'GitBranch': return <GitBranch size={22} color="var(--accent-indigo)" />;
      case 'Cloud': return <Cloud size={22} color="var(--accent-cyan)" />;
      default: return <Cpu size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative', background: 'rgba(14, 21, 38, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            A comprehensive overview of my core competencies, programming languages, backend frameworks, and development tools.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: activeCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#67e8f9' : 'var(--text-muted)',
                boxShadow: activeCategory === cat ? '0 0 20px rgba(6, 182, 212, 0.25)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Core Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)' }}>
                    {getIcon(skill.icon)}
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                    {skill.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', height: '6px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--gradient-glow)',
                      borderRadius: '4px',
                      boxShadow: '0 0 12px rgba(99, 102, 241, 0.6)',
                      transition: 'width 1s ease-in-out',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>Proficiency Level</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Tools & Frameworks Pills */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(14, 21, 38, 0.8), rgba(26, 38, 66, 0.5))',
            borderColor: 'rgba(99, 102, 241, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-purple)' }}>
              <Wrench size={22} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>Additional Tech Stack & Tools</h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {resumeData.technicalSkills.map((tech, tIdx) => (
              <div
                key={tIdx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  color: '#e2e8f0',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
