import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
    // Close the modal when the Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !videoUrl) return null;

    // Check whether the video is a YouTube embed, Loom video, or direct MP4 file
    const isDirectVideo = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">

            {/* Close the modal when clicking the background */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-4xl bg-card border border-gray-700 rounded-2xl overflow-hidden shadow-2xl z-10">

                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-dark/70">
                    <h3 className="text-sm font-semibold text-white truncate max-w-[80%]">
                        Demo: {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Video Player Container (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video bg-black">
                    {isDirectVideo ? (
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <iframe
                            src={videoUrl}
                            title={title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default VideoModal;

