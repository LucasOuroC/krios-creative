import{r as c,j as e,m as g,R as x,a as u}from"./index-DRUVPue0.js";import{v as f,a as y}from"./WhatsApp Video 2026-01-09 at 23.36.01-optimized-BmqztU4j.js";function b({image:a,alt:s,className:m="",index:p=0,isVideo:i=!1}){const o=c.useRef(null);return c.useEffect(()=>{if(!i||!o.current)return;const r=o.current,t=()=>{const l=r.play();l!==void 0&&l.catch(()=>{setTimeout(()=>r.play().catch(()=>{}),100)})},n=new IntersectionObserver(l=>{l.forEach(d=>{d.isIntersecting&&t()})},{threshold:.1});return n.observe(r),t(),()=>{n.disconnect()}},[i]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:`gallery-item-animate gallery-item-wrapper ${m}`,style:{animationDelay:`${p*.15}s`},children:[i?e.jsx("video",{ref:o,src:a,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,"webkit-playsinline":"true",disablePictureInPicture:!0,disableRemotePlayback:!0,preload:"auto","aria-label":s,onClick:r=>r.preventDefault()}):e.jsx("img",{src:a,alt:s,loading:"lazy",className:"gallery-bg",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}),e.jsx("div",{className:"gallery-overlay"})]})]})}const h="/assets/MagazineMockupV2-D8EemsI6.webp",w="/assets/motion1-optimized-Dnm2DDb3.mp4",v="/assets/Webdesignmockupmac-iYjCR3VY.webp",j="/assets/CAUBR-C1ekQoax.webp",N="/assets/Portfolio%20limpa%20nome-BgoT1mPY.webp",k="/assets/UIUX-D21cjq2_.webp",R="/assets/debora-RDY0qhD9.webp",M="/assets/Portfolio%20cachorro-DNZ5qYW4.webp",D="/assets/0118-optimized-lRET93ri.mp4",P="/assets/Portfolio%20cabelereira-b4RAsYDF.webp",C="/assets/motionhorizontal-optimized-ND_WjSSK.mp4",V=[{image:h,alt:"Magazine Mockup",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:w,alt:"Motion Design 1",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:v,alt:"Web Design Mockup Mac",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:f,alt:"Nano Render",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!0},{image:j,alt:"CAU BR",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:N,alt:"Portfolio Limpa Nome",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:k,alt:"UI UX Design",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:y,alt:"WhatsApp Video",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:R,alt:"Debora Portfolio",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:M,alt:"Portfolio Cachorro",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!1},{image:D,alt:"Motion 0118",className:"col-span-1 md:col-span-1 lg:col-span-3 row-span-2",isVideo:!0},{image:P,alt:"Portfolio Cabeleireira",className:"col-span-1 md:col-span-1 lg:col-span-6 row-span-2",isVideo:!1},{image:C,alt:"Motion Horizontal",className:"col-span-1 md:col-span-1 lg:col-span-12 row-span-2",isVideo:!0}];function z(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"gallery-grid-container",children:V.map((a,s)=>e.jsx(b,{image:a.image,alt:a.alt,className:`gallery-item-${s+1}`,index:s,isVideo:a.isVideo},s))})]})}function E(){return e.jsxs("div",{className:"dark bg-black text-white min-h-screen w-full",children:[e.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-[rgba(244,243,239,0.95)] backdrop-blur-sm border-b border-[#d4d4d0] z-50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:e.jsxs("div",{className:"flex items-center justify-between h-16 md:h-[61px]",children:[e.jsx("a",{href:"/",className:"flex-shrink-0",children:e.jsx("p",{className:"font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[#1a1a1a] text-lg md:text-xl tracking-[2px] uppercase",children:"Krios"})}),e.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[e.jsx("a",{href:"/manifesto.html",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Manifesto"}),e.jsx("a",{href:"/gallery.html",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase border-b border-[#1a1a1a]",children:"Projetos"}),e.jsx("a",{href:"/#assinatura",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Assinatura"}),e.jsx("a",{href:"/#contato",className:"font-['Space_Mono:Regular',sans-serif] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity",children:"Contato"})]})]})})}),e.jsxs("div",{className:"relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8",children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"200px 200px"}}),e.jsxs("div",{className:"max-w-[1600px] mx-auto relative z-10",children:[e.jsxs(g.div,{className:"mb-12 md:mb-16",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsx("h1",{className:"font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#1a1a1a] text-[clamp(2.5rem,10vw,6rem)] tracking-[-0.06em] mb-6",style:{fontWeight:800},children:"Galeria de Projetos"}),e.jsx("p",{className:"font-['Inter:Regular',sans-serif] text-[#6b6b6b] text-base md:text-lg max-w-3xl",children:"Uma seleção de trabalhos que demonstram nossa abordagem criativa e capacidade de execução."})]}),e.jsx(z,{})]})]}),e.jsx("div",{className:"relative w-full border-t border-[#d4d4d0] py-8 px-4 md:px-6 bg-[#f4f3ef]",children:e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsx("p",{className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase text-center md:text-left",children:"© 2026 Krios Creative. All rights reserved."}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("a",{href:"#",className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors",children:"Privacidade"}),e.jsx("a",{href:"#",className:"font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase hover:text-[#1a1a1a] transition-colors",children:"Termos"})]})]})})]})}x.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(E,{})}));
