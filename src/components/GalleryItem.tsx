interface GalleryItemProps {
  image: string;
  alt: string;
  className?: string;
  index?: number;
  isVideo?: boolean;
}

export function GalleryItem({ image, alt, className = '', index = 0, isVideo = false }: GalleryItemProps) {
  return (
    <div 
      className={`gallery-item-animate group overflow-hidden rounded relative ${className}`}
      style={{
        animationDelay: `${index * 0.15}s`
      }}
    >
      {isVideo ? (
        <video
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={image}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
        />
      ) : (
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={image}
          alt={alt}
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
    </div>
  );
}
