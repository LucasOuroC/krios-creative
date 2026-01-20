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
      className={`gallery-item-animate group overflow-hidden rounded-lg relative aspect-square ${className}`}
      style={{
        animationDelay: `${index * 0.08}s`,
        minHeight: '200px'
      }}
    >
      {isVideo ? (
        <video
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={image}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
        />
      ) : (
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={image}
          alt={alt}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
