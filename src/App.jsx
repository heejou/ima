import React, { useState } from 'react';
import Hero from './components/Hero';
import ImageUpload from './components/ImageUpload';
import AnalysisLoading from './components/AnalysisLoading';
import ResultCard from './components/ResultCard';
import { analyzeImage } from './utils/mockAnalysis';
import { Camera, RefreshCcw } from 'lucide-react';

function App() {
    const [stage, setStage] = useState('upload'); // upload, analyzing, result
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [result, setResult] = useState(null);

    const handleImageSelect = async (file, preview) => {
        if (!file) return;

        setImage(file);
        setPreviewUrl(preview);
        setStage('analyzing');

        // Trigger mock analysis
        try {
            const data = await analyzeImage(file);
            setResult(data);
            setStage('result');
        } catch (error) {
            console.error("Analysis failed", error);
            setStage('upload'); // Reset on error
        }
    };

    const resetAnalysis = () => {
        setImage(null);
        setPreviewUrl(null);
        setResult(null);
        setStage('upload');
    };

    return (
        <div className="app-container">
            {/* Header */}
            <header className="header container">
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Camera color="var(--color-accent)" />
                    <span>AURA <span style={{ color: 'var(--color-text-secondary)', fontWeight: '400' }}>Analysis</span></span>
                </div>
                {stage === 'result' && (
                    <button onClick={resetAnalysis} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        <RefreshCcw size={16} /> New Analysis
                    </button>
                )}
            </header>

            <main className="container" style={{ minHeight: '80vh', paddingBottom: '80px' }}>

                {stage === 'upload' && (
                    <>
                        <Hero />
                        <ImageUpload onImageSelect={handleImageSelect} />
                    </>
                )}

                {stage === 'analyzing' && (
                    <AnalysisLoading />
                )}

                {stage === 'result' && result && (
                    <div className="animate-fade-in" style={{ marginTop: '40px' }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '60px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid var(--color-accent)',
                                boxShadow: '0 0 30px var(--color-accent-glow)',
                                marginBottom: '24px'
                            }}>
                                <img src={previewUrl} alt="Analyzed Face" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Your Analysis Report</h2>
                            <p>Discover your unique style profile</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <ResultCard
                                title={result.image.title}
                                keywords={result.image.keywords}
                                celebs={result.image.celebs}
                                description={result.image.description}
                            />

                            <ResultCard
                                title={result.faceShape.title}
                                type={result.faceShape.type}
                                reason={result.faceShape.reason}
                                celebs={result.faceShape.celebs}
                                description={result.faceShape.description}
                            />

                            <ResultCard
                                title={result.hairstyle.title}
                                recommendations={result.hairstyle.recommendations}
                                description={result.hairstyle.description}
                            />

                            <ResultCard
                                title={result.personalColor.title}
                                type={result.personalColor.type}
                                reason={result.personalColor.reason}
                                description={result.personalColor.description}
                            />
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '80px' }}>
                            <button onClick={resetAnalysis} className="btn-primary">
                                Analyze Another Photo
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <footer className="footer">
                © 2024 Aura Image Consulting. Premium styling Powered by AI.
            </footer>
        </div>
    );
}

export default App;
