import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

const ImageUpload = ({ onImageSelect }) => {
    const [dragActive, setDragActive] = useState(false);
    const [preview, setPreview] = useState(null);
    const inputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            onImageSelect(file, reader.result);
        };
        reader.readAsDataURL(file);
    };

    const clearImage = (e) => {
        e.stopPropagation();
        setPreview(null);
        onImageSelect(null, null);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div className="upload-container animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form
                className={`upload-box ${dragActive ? 'active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => inputRef.current.click()}
                style={{
                    border: `2px dashed ${dragActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: dragActive ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                    position: 'relative',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />

                {preview ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            src={preview}
                            alt="Preview"
                            style={{
                                maxHeight: '400px',
                                maxWidth: '100%',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                        <button
                            onClick={clearImage}
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '50%',
                                padding: '8px',
                                color: 'var(--color-text-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <>
                        <div style={{
                            background: 'var(--color-surface)',
                            padding: '20px',
                            borderRadius: '50%',
                            marginBottom: '20px',
                            border: '1px solid var(--color-border)'
                        }}>
                            <Upload size={40} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ marginBottom: '10px' }}>Upload your photo</h3>
                        <p style={{ margin: 0 }}>Drag and drop or click to browse</p>
                        <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--color-text-secondary)' }}>
                            Supports JPG, PNG (Max 5MB)
                        </p>
                    </>
                )}
            </form>
        </div>
    );
};

export default ImageUpload;
