import{o as a,t as o,w as t,q as n,R as c,y as m}from"./index-DVcTdzTh.js";function p({image:e,alt:s,className:r="",index:l=0,isVideo:i=!1}){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:`gallery-item-animate gallery-item-wrapper ${r}`,style:{animationDelay:`${l*.15}s`},children:[i?a.jsx("video",{src:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata","aria-label":s}):a.jsx("div",{className:"gallery-bg",style:{backgroundImage:`url('${e}')`,backgroundSize:"cover",backgroundPosition:"center"},role:"img","aria-label":s}),a.jsx("div",{className:"gallery-overlay"})]})]})}const d="/assets/MagazineMockupV2-DeEgy8Oa.png",g="/assets/motion1-COK2Slu_.mp4",x="/assets/Webdesignmockupmac-D5RIL-_U.png",u="/assets/CAUBR-CYlAFhs5.png",f="/assets/Portfolio%20limpa%20nome-CFN7OF79.jpg",y="/assets/UIUX-DBY-HQYH.png",h="/assets/debora-BUx1OS9m.png",b="/assets/Portfolio%20cachorro-DNZ5qYW4.webp",w="/assets/0118-C5HVwaTD.mp4",v="/assets/Portfolio%20cabelereira-yffQ4Gdo.png",N="/assets/motionhorizontal-DDyMdRKl.mp4",j=[{image:d,alt:"Magazine Mockup",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:g,alt:"Motion Design 1",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:x,alt:"Web Design Mockup Mac",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:o,alt:"Nano Render",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!0},{image:u,alt:"CAU BR",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:f,alt:"Portfolio Limpa Nome",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:y,alt:"UI UX Design",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:t,alt:"WhatsApp Video",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:h,alt:"Debora Portfolio",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:b,alt:"Portfolio Cachorro",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:w,alt:"Motion 0118",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:v,alt:"Portfolio Cabeleireira",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:N,alt:"Motion Horizontal",className:"col-span-1 md:col-span-1 lg:col-span-12 row-span-2",isVideo:!0}];function k(){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .gallery-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          grid-auto-rows: 400px;
        }
        
        @media (min-width: 768px) {
          .gallery-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .gallery-grid-container {
            grid-template-columns: repeat(12, 1fr);
          }
        }
        
        .gallery-item-1 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-2 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-3 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-4 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-5 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-6 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-7 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-8 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-9 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-10 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-11 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-12 { grid-column: span 1; grid-row: span 2; }
        .gallery-item-13 { grid-column: span 1; grid-row: span 2; }
        
        @media (min-width: 1024px) {
          .gallery-item-1 { grid-column: span 6; }
          .gallery-item-2 { grid-column: span 3; }
          .gallery-item-3 { grid-column: span 3; }
          .gallery-item-4 { grid-column: span 6; }
          .gallery-item-5 { grid-column: span 3; }
          .gallery-item-6 { grid-column: span 3; }
          .gallery-item-7 { grid-column: span 6; }
          .gallery-item-8 { grid-column: span 3; }
          .gallery-item-9 { grid-column: span 3; }
          .gallery-item-10 { grid-column: span 3; }
          .gallery-item-11 { grid-column: span 3; }
          .gallery-item-12 { grid-column: span 6; }
          .gallery-item-13 { grid-column: span 12; }
        }
      `}),a.jsx("div",{className:"gallery-grid-container",children:j.map((e,s)=>a.jsx(p,{image:e.image,alt:e.alt,className:`gallery-item-${s+1}`,index:s,isVideo:e.isVideo},s))})]})}function M(){return a.jsxs("div",{className:"dark bg-black text-white min-h-screen w-full",children:[a.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-[rgba(244,243,239,0.95)] backdrop-blur-sm border-b border-[#d4d4d0] z-50",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:a.jsxs("div",{className:"flex items-center justify-between h-16 md:h-[61px]",children:[a.jsx("a",{href:"/",className:"flex-shrink-0",children:a.jsx("p",{className:"font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[#1a1a1a] text-lg md:text-xl tracking-[2px] uppercase",children:"Krios"})}),a.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[a.jsx("a",{href:"/#manifesto",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Manifesto"}),a.jsx("a",{href:"/gallery.html",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase border-b border-[#1a1a1a]",children:"Projetos"}),a.jsx("a",{href:"/#assinatura",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Assinatura"}),a.jsx("a",{href:"/#contato",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Contato"})]})]})})}),a.jsxs("div",{className:"relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8",children:[a.jsx("div",{className:"absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"200px 200px"}}),a.jsxs("div",{className:"max-w-[1600px] mx-auto relative z-10",children:[a.jsxs(n.div,{className:"mb-12 md:mb-16",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[a.jsx("h1",{className:"font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#1a1a1a] text-[clamp(2.5rem,10vw,6rem)] tracking-[-0.06em] mb-6",style:{fontWeight:800},children:"Galeria de Projetos"}),a.jsx("p",{className:"font-['Inter:Regular',sans-serif] text-[#6b6b6b] text-base md:text-lg max-w-3xl",children:"Uma seleção de trabalhos que demonstram nossa abordagem criativa e capacidade de execução."})]}),a.jsx(k,{})]})]}),a.jsx("div",{className:"relative w-full border-t border-[#d4d4d0] py-8 px-4 md:px-6 bg-[#f4f3ef]",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[a.jsx("p",{className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase text-center md:text-left",children:"© 2024 Krios Creative. All rights reserved."}),a.jsxs("div",{className:"flex gap-6",children:[a.jsx("a",{href:"#",className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors",children:"Privacidade"}),a.jsx("a",{href:"#",className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors",children:"Termos"})]})]})})]})}c.createRoot(document.getElementById("root")).render(a.jsx(m.StrictMode,{children:a.jsx(M,{})}));
