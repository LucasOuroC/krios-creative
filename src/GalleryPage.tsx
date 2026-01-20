// @ts-nocheck
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryGrid } from './components/GalleryGrid';

function GalleryPage() {
  return (
    <div className="bg-[#eee] min-h-screen w-full">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[rgba(244,243,239,0.95)] backdrop-blur-sm border-b border-[#d4d4d0] z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[61px]">
            <a href="/" className="flex-shrink-0">
              <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[#1a1a1a] text-lg md:text-xl tracking-[2px] uppercase">
                Krios
              </p>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/#manifesto" className="font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                Manifesto
              </a>
              <a href="/gallery.html" className="font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase border-b border-[#1a1a1a]">
                Projetos
              </a>
              <a href="/#assinatura" className="font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                Assinatura
              </a>
              <a href="/#contato" className="font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Gallery Content */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#1a1a1a] text-[clamp(2.5rem,10vw,6rem)] tracking-[-0.06em] mb-6" style={{ fontWeight: 800 }}>
              Galeria de Projetos
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[#6b6b6b] text-base md:text-lg max-w-3xl">
              Uma seleção de trabalhos que demonstram nossa abordagem criativa e capacidade de execução.
            </p>
          </motion.div>
          <GalleryGrid />
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-full border-t border-[#d4d4d0] py-8 px-4 md:px-6 bg-[#f4f3ef]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase text-center md:text-left">
            © 2024 Krios Creative. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors">
              Privacidade
            </a>
            <a href="#" className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
