import { useEffect, useCallback } from 'react';

export default function VideoModal({ videoId, title, onClose }) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  // Stop propagation so clicks inside the modal don't close it
  const stopProp = (e) => e.stopPropagation();

  return (
    <div
      className="video-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Form tutorial: ${title}`}
    >
      <div className="video-modal" onClick={stopProp}>
        {/* Header */}
        <div className="video-modal-header">
          <div className="video-modal-title">
            <span className="video-modal-icon">▶</span>
            {title}
          </div>
          <button
            className="video-modal-close"
            onClick={onClose}
            aria-label="Close video"
          >
            ✕
          </button>
        </div>

        {/* YouTube Embed */}
        <div className="video-modal-embed">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer hint */}
        <div className="video-modal-footer">
          Press <kbd>Esc</kbd> or click outside to close · Opens full screen with ⛶
        </div>
      </div>
    </div>
  );
}
