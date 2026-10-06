import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
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
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '850px',
          width: '100%',
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid var(--accent-indigo)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), var(--shadow-glow)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            background: 'rgba(15, 23, 42, 0.9)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Sahana N — Official Resume
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="./Sahana_Resume.pdf"
              download="Sahana_N_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
            >
              <Download size={16} /> Download PDF
            </a>
            <button
              onClick={onClose}
              style={{
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
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <iframe
          src="./Sahana_Resume.pdf"
          title="Sahana N Resume PDF"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: '#fff',
          }}
        />
      </div>
    </div>
  );
}
