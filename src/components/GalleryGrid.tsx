import { GalleryItem } from './GalleryItem';
import imgMagazine from '../assets/MagazineMockupV2.png';
import videoMotion1 from '../assets/motion1.mp4';
import imgWebDesign from '../assets/Webdesignmockupmac.png';
import videoNano from '../assets/Nano Render_1.mp4';
import imgCAU from '../assets/CAUBR.png';
import imgLimpaNome from '../assets/Portfolio limpa nome.jpg';
import imgUIUX from '../assets/UIUX.png';
import videoWhatsApp from '../assets/WhatsApp Video 2026-01-09 at 23.36.01.mp4';
import imgDebora from '../assets/debora.png';
import imgCachorro from '../assets/Portfolio cachorro.webp';
import video0118 from '../assets/0118.mp4';
import imgCabelereira from '../assets/Portfolio cabelereira.png';
import videoHorizontal from '../assets/motionhorizontal.mp4';

const galleryItems = [
  {
    image: imgMagazine,
    alt: 'Magazine Mockup',
    className: 'col-span-1 md:col-span-1 lg:col-span-6 row-span-2',
    isVideo: false
  },
  {
    image: videoMotion1,
    alt: 'Motion Design 1',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: true
  },
  {
    image: imgWebDesign,
    alt: 'Web Design Mockup Mac',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: false
  },
  {
    image: videoNano,
    alt: 'Nano Render',
    className: 'col-span-1 md:col-span-1 lg:col-span-6 row-span-2',
    isVideo: true
  },
  {
    image: imgCAU,
    alt: 'CAU BR',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: false
  },
  {
    image: imgLimpaNome,
    alt: 'Portfolio Limpa Nome',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: false
  },
  {
    image: imgUIUX,
    alt: 'UI UX Design',
    className: 'col-span-1 md:col-span-1 lg:col-span-6 row-span-2',
    isVideo: false
  },
  {
    image: videoWhatsApp,
    alt: 'WhatsApp Video',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: true
  },
  {
    image: imgDebora,
    alt: 'Debora Portfolio',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: false
  },
  {
    image: imgCachorro,
    alt: 'Portfolio Cachorro',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: false
  },
  {
    image: video0118,
    alt: 'Motion 0118',
    className: 'col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    isVideo: true
  },
  {
    image: imgCabelereira,
    alt: 'Portfolio Cabeleireira',
    className: 'col-span-1 md:col-span-1 lg:col-span-6 row-span-2',
    isVideo: false
  },
  {
    image: videoHorizontal,
    alt: 'Motion Horizontal',
    className: 'col-span-1 md:col-span-1 lg:col-span-12 row-span-2',
    isVideo: true
  }
];

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[400px]">
      {galleryItems.map((item, index) => (
        <GalleryItem
          key={index}
          image={item.image}
          alt={item.alt}
          className={item.className}
          index={index}
          isVideo={item.isVideo}
        />
      ))}
    </div>
  );
}

