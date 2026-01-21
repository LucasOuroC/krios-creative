interface GalleryItemProps {
  image: string;
  alt: string;
  className?: string;
  index?: number;
  isVideo?: boolean;
}

export function GalleryItem({ image, alt, className = '', index = 0, isVideo = false }: GalleryItemProps) {
  return (
    <>
      <style>{`
        .gallery-item-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          width: 100%;
          height: 100%;
        }
        
        .gallery-item-wrapper video,
        .gallery-item-wrapper .gallery-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.0);
          transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1);
        }
        
        .gallery-item-wrapper:hover video,
        .gallery-item-wrapper:hover .gallery-bg {
          transform: scale(1.05);
        }
        
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0);
          transition: background-color 0.5s ease;
        }
        
        .gallery-item-wrapper:hover .gallery-overlay {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <div 
        className={`gallery-item-animate gallery-item-wrapper ${className}`}
        style={{
          animationDelay: `${index * 0.15}s`
        }}
      >
        {isVideo ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-label={alt}
          />
        ) : (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="gallery-bg"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        )}
        <div className="gallery-overlay" />
      </div>
    </>
  );
}
