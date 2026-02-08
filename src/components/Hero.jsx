import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="hero-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div className="animate-fade-in">
                <Sparkles size={48} color="var(--color-accent)" style={{ marginBottom: '20px' }} />
                <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
                    Premium Image Consulting
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                    Discover your hidden beauty potential with AI-powered analysis.
                    <br />
                    We analyze your features to recommend the perfect style.
                </p>
            </div>
        </div>
    );
};

export default Hero;
