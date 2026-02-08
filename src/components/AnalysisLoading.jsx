import React from 'react';
import { ScanFace } from 'lucide-react';

const AnalysisLoading = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 0',
            minHeight: '400px'
        }}>
            <div style={{ position: 'relative', marginBottom: '40px' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '2px solid var(--color-accent-glow)',
                    animation: 'pulseGlow 2s infinite'
                }}></div>
                <ScanFace size={64} color="var(--color-accent)" style={{ animation: 'pulseGlow 2s infinite' }} />
            </div>

            <h2 style={{ marginBottom: '16px' }} className="text-gradient">Analyzing Facial Features...</h2>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                Measuring facial proportions, skin tone, and features to determine your best style.
            </p>

            <div style={{
                width: '200px',
                height: '4px',
                background: 'var(--color-surface)',
                borderRadius: '2px',
                marginTop: '20px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--gradient-gold)',
                    transformOrigin: 'left',
                    animation: 'fadeIn 2s infinite linear' // Simple progress simulation
                }}></div>
            </div>
        </div>
    );
};

export default AnalysisLoading;
