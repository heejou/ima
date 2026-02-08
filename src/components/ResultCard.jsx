import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const ResultCard = ({ title, type, reason, description, celebs, recommendations, keywords }) => {
    return (
        <div className="card animate-fade-in" style={{ marginBottom: '30px' }}>
            <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '8px' }}>{title}</h2>
                {type && <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-primary)' }}>{type}</h3>}
                {keywords && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        {keywords.map((kw, i) => (
                            <span key={i} style={{
                                padding: '4px 12px',
                                background: 'rgba(212, 175, 55, 0.1)',
                                border: '1px solid var(--color-accent)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--color-accent)'
                            }}>
                                {kw}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {reason && (
                <div style={{ marginBottom: '24px', background: 'var(--color-surface)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Analysis Logic:</strong>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>{reason}</p>
                </div>
            )}

            <div style={{ marginBottom: '30px', whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {description}
            </div>

            {recommendations && (
                <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Star size={18} color="var(--color-accent)" />
                        Top Recommendations
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {recommendations.map((rec, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '16px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)'
                            }}>
                                <div style={{ color: 'var(--color-text-primary)', fontWeight: '600', marginBottom: '8px' }}>{rec.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{rec.reason}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {celebs && (
                <div>
                    <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={18} color="var(--color-accent)" />
                        Representative Celebrities
                    </h4>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {celebs.map((celeb, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'var(--color-surface)',
                                padding: '8px 16px',
                                borderRadius: '50px'
                            }}>
                                <span style={{ width: '8px', height: '8px', background: 'var(--color-accent)', borderRadius: '50%' }}></span>
                                {celeb}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultCard;
