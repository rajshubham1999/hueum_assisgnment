import React, { useEffect, useRef, useState } from 'react';
import './check.css';
import videofile from './assets/videofile.mp4'

const Check = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [videoSize, setVideoSize] = useState({ width: '100%', height: '100%' });

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerRect = container.getBoundingClientRect();
            const video = videoRef.current;

            if (containerRect.top < window.innerHeight / 2 && containerRect.bottom > window.innerHeight / 2) {
                // Video container is in view
                const newWidth = Math.max(700, containerRect.width - window.scrollY);
                const newHeight = Math.max(500, containerRect.height - window.scrollY);
                setVideoSize({ width: `${newWidth}px`, height: `${newHeight}px` });
                video.play();
            } else {
                video.pause();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <div className="scroll-content">
                <p>Scroll down to see the video resize...</p>
            </div>
            <div className="video-container" ref={containerRef} style={videoSize}>
                <video ref={videoRef} src={videofile} loop muted />
            </div>
            <div className="scroll-content">
                <p>Keep scrolling...</p>
            </div>
        </div>
    );
};

export default Check;
