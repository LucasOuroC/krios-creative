// @ts-nocheck
import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import svgPaths from "./imports/svg-6o9x5wz7sc";
import imgFrame90 from "figma:asset/c4d88cbac5f8267aefd0182488f86075234c8874.png";
import imgImageProjeto1 from "figma:asset/b9becdbdef9b726fb0bd5c65a4a2f5f8bc729d50.png";
import imgImageProjeto2 from "figma:asset/a3e7e2319c1d5f0bfa86b9b6a875840de77d53a2.png";
import imgImageProjeto3 from "figma:asset/2a614220d504b63e30c905a386231ae8ca253a96.png";
import imgAtivo31 from "figma:asset/486251245151822be7abb300220ed42600648afc.png";
import imgHolographicBg from "figma:asset/1550e2937db35a3529ed1f3160c80ab454bf2e94.png";
import videoBg from "./assets/Videosite.mp4";
import videoNano from "./assets/Nano Render_1.mp4";
import videoWhatsApp from "./assets/WhatsApp Video 2026-01-09 at 23.36.01.mp4";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);

  return (
    <div ref={heroRef} className="relative h-[100vh] min-h-[600px] md:h-[832px] w-full overflow-hidden" data-name="Hero">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        style={{ scale }}
      >
        <motion.video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity }}
          preload="auto"
        >
          <source src={videoBg} type="video/mp4" />
        </motion.video>
      </motion.div>
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[140px] md:w-[167px] md:h-[200px] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ scale: logoScale, opacity: logoOpacity }}
      >
        <img alt="Krios Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAtivo31} />
      </motion.div>
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-16 size-[24px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <div className="h-[24px] opacity-50 overflow-clip relative shrink-0 w-full animate-bounce">
          <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
            <div className="absolute inset-[-7.14%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 16">
                <path d="M1 1V15" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2">
            <div className="absolute inset-[-14.29%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                <path d="M15 1L8 8L1 1" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Manifesto() {
  const manifestoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={manifestoRef}
      className="relative w-full overflow-hidden"
      style={{ scale, opacity }}
    >
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFrame90} />
      <div className="relative px-4 md:px-8 lg:px-20 py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left side - Heading */}
            <div className="space-y-6">
              <motion.h2 
                className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-white text-[clamp(2.7rem,10.8vw,8.1rem)] tracking-[-0.06em]" 
                style={{ fontWeight: 800 }}
                variants={headingVariants}
              >
                Marcas não precisam dizer mais.
              </motion.h2>
              <motion.p 
                className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.2] text-[#c2c2c2] text-[clamp(1.35rem,4.5vw,3.15rem)] tracking-[-0.01em]"
                variants={headingVariants}
              >
                Precisam dizer melhor.
              </motion.p>
            </div>
            
            {/* Right side - Content */}
            <motion.div 
              className="border-l-0 lg:border-l border-[#d4d4d0] pl-0 lg:pl-8 space-y-6"
              variants={containerVariants}
            >
              <motion.p 
                className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-white text-sm md:text-base text-justify"
                variants={textVariants}
              >
                A Krios existe para negócios que já cresceram e agora precisam de direção, não de barulho. Criatividade, aqui, não é estética isolada. É curadoria. É decisão. É estratégia aplicada com intenção.
              </motion.p>
              <motion.p 
                className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-white text-sm md:text-base text-justify"
                variants={textVariants}
              >
                Entramos para organizar discursos, reposicionar percepções e construir marcas que sustentam valor no longo prazo.
              </motion.p>
              <motion.p 
                className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-white text-sm md:text-base text-justify"
                variants={textVariants}
              >
                Nosso trabalho organiza o que a marca diz, como diz e por que diz.
              </motion.p>
              <motion.p 
                className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-white text-sm md:text-base text-justify"
                variants={textVariants}
              >
                Reposicionamos percepções, alinhamos identidade e estratégia e construímos sistemas de marca preparados para decisões de longo prazo.
              </motion.p>
              <motion.p 
                className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-white text-sm md:text-base text-justify"
                variants={textVariants}
              >
                Menos ruído. Mais clareza.
              </motion.p>
              <motion.div 
                className="pt-4"
                variants={textVariants}
              >
                <a href="#about" className="inline-flex items-center border-b border-white pb-1 text-white hover:opacity-70 transition-opacity">
                  <span className="font-['Space_Mono:Regular',sans-serif] text-xs tracking-[1.2px] uppercase mr-2">Sobre nós</span>
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1d405500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      image: imgImageProjeto1,
      title: "VGIA holding",
      category: "Branding / Design de Marca"
    },
    {
      image: imgImageProjeto2,
      title: "Sacred / Saint Faith",
      category: "Typography design /  Clothing"
    },
    {
      image: imgImageProjeto3,
      title: "Codax",
      category: "Direção criativa e design de conteúdo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full bg-[#eee] border-t border-[#d4d4d0] py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#1a1a1a] text-[clamp(1.8rem,7.2vw,5.4rem)] tracking-[-0.06em]" 
            style={{ fontWeight: 800 }}
            variants={headerVariants}
          >
            Projetos relevantes
          </motion.h2>
          <motion.p 
            className="font-['Space_Mono:Regular',sans-serif] font-normal leading-[16px] text-[#1a1a1a] text-xs tracking-[1.2px] uppercase"
            variants={headerVariants}
          >
            2025 — 2026
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col gap-4 group cursor-pointer md:last:col-span-2 md:last:justify-self-center md:last:max-w-[calc(50%-1rem)] lg:last:col-span-1 lg:last:justify-self-auto lg:last:max-w-none"
              variants={cardVariants}
            >
              <div className="bg-[#ececf0] aspect-[4/5] overflow-hidden relative">
                <img 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={project.image} 
                />
              </div>
              <div className="pt-3 border-t border-[#d4d4d0] space-y-1">
                <h3 className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#1a1a1a] text-lg md:text-xl tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[0.5px] uppercase">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div 
          className="mt-12 md:mt-16 flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/gallery.html" className="inline-flex items-center border-b border-[#1a1a1a] pb-1 text-[#1a1a1a] hover:opacity-70 transition-opacity">
            <span className="font-['Space_Mono:Regular',sans-serif] text-xs tracking-[1.2px] uppercase mr-2">mais trabalhos</span>
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p1d405500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function VisualSystems() {
  return (
    <motion.div 
      className="relative w-full grid grid-cols-1 md:grid-cols-2" 
      data-name="VisualSystems"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Left video - Abstract fluid art painting */}
      <motion.div 
        className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 aspect-[611.5/748.8] md:aspect-auto md:h-[600px] lg:h-[748.8px] w-full relative overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoNano} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Right video - Modern office architecture */}
      <motion.div 
        className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 aspect-[611.5/748.8] md:aspect-auto md:h-[600px] lg:h-[748.8px] w-full relative overflow-hidden"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoWhatsApp} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  const capabilities = [
    { number: "01", title: "Materiais impressos" },
    { number: "02", title: "Criação de experiências web" },
    { number: "03", title: "Agênciamento de produção de conteúdo" },
    { number: "04", title: "Análise, estudo e criação de persona" },
    { number: "05", title: "Design Editorial" },
    { number: "06", title: "Consultoria e diagnóstico de posicionamento de marca" },
    { number: "07", title: "Criação de marcas" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center py-16 lg:py-24 overflow-hidden bg-[rgb(242,242,242)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          alt="Abstract texture background" 
          className="absolute w-full h-full object-cover opacity-10 mix-blend-overlay grayscale contrast-125" 
          src={imgHolographicBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f2]/90 via-[#f2f2f2]/50 to-[#f2f2f2]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f2] via-transparent to-[#f2f2f2] opacity-60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.header 
          className="mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <div className="flex items-center gap-4 mb-4 opacity-60">
            <span className="h-[1px] w-8 bg-black"></span>
            <span className="font-['Space_Mono:Regular',sans-serif] text-xs uppercase tracking-[0.2em] text-black">Expertise</span>
          </div>
          <h2 className="font-['Manrope:ExtraBold',sans-serif] text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-[-0.04em] text-black leading-[0.9]" style={{ fontWeight: 800 }}>
            Capacidades
          </h2>
        </motion.header>

        {/* Services Grid */}
        <motion.div 
          className="service-list grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 md:gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Column */}
          <div className="flex flex-col">
            {capabilities.slice(0, 4).map((capability, index) => (
              <motion.article 
                key={index}
                className="group/item relative py-6 border-t border-black/10 last:border-b md:last:border-b-0 transition-all duration-500 ease-out cursor-pointer"
                variants={itemVariants}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-['Space_Mono:Regular',sans-serif] text-xs text-gray-500 group-hover/item:text-black transition-colors duration-300">
                      {capability.number}
                    </span>
                    <h3 className="font-['Inter:Medium',sans-serif] text-2xl md:text-3xl font-medium text-black tracking-tight group-hover/item:translate-x-2 transition-transform duration-500 ease-out max-w-md">
                      {capability.title}
                    </h3>
                  </div>
                  <span className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 text-xl text-black">
                    ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:mt-12">
            {capabilities.slice(4).map((capability, index) => (
              <motion.article 
                key={index + 4}
                className="group/item relative py-6 border-t last:border-b border-black/10 transition-all duration-500 ease-out cursor-pointer"
                variants={itemVariants}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-['Space_Mono:Regular',sans-serif] text-xs text-gray-500 group-hover/item:text-black transition-colors duration-300">
                      {capability.number}
                    </span>
                    <h3 className="font-['Inter:Medium',sans-serif] text-2xl md:text-3xl font-medium text-black tracking-tight group-hover/item:translate-x-2 transition-transform duration-500 ease-out max-w-md">
                      {capability.title}
                    </h3>
                  </div>
                  <span className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 text-xl text-black">
                    ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12 md:mt-20 flex justify-center md:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#projetos" 
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-black/20 rounded-full hover:bg-black hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-['Space_Mono:Regular',sans-serif] text-sm uppercase tracking-[0.15em]">
              Ver portfólio completo
            </span>
            <span className="relative z-10 text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dropCapVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <div className="relative w-full bg-[#f0f0f0] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p 
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] text-[#000000] text-base md:text-lg"
            variants={paragraphVariants}
          >
            <motion.span 
              className="float-left font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[4.5rem] md:text-[5.5rem] leading-[0.75] mr-2 mt-1 text-[#000000]" 
              style={{ fontWeight: 800 }}
              variants={dropCapVariants}
            >
              C
            </motion.span>
            rescer é fácil. Sustentar valor é outra história. Marcas fortes não explicam demais. Elas orientam decisões. Internas e externas.
          </motion.p>
          
          <motion.p 
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] text-[#000000] text-base md:text-lg"
            variants={paragraphVariants}
          >
            Se a sua marca já funciona, mas ainda reage ao mercado, o próximo passo não é fazer mais. É assumir direção. É escolher o que dizer, como dizer, e principalmente, o que não dizer.
          </motion.p>
          
          <motion.p 
            className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] text-[#000000] text-base md:text-lg"
            variants={paragraphVariants}
          >
            A Krios trabalha exatamente nesse ponto. Quando a marca deixa de reagir e passa a conduzir. Quando o silêncio estratégico vale mais que o ruído constante. Quando a clareza substitui a complexidade desnecessária.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    instagram: '',
    website: '',
    email: '',
    contexto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mwvvlzro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          empresa: formData.empresa,
          telefone: formData.telefone,
          instagram: formData.instagram,
          website: formData.website,
          email: formData.email,
          contexto: formData.contexto,
          _replyto: formData.email,
          _subject: `Novo contato de ${formData.nome} - ${formData.empresa}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          empresa: '',
          telefone: '',
          instagram: '',
          website: '',
          email: '',
          contexto: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#1a1a1a] text-[clamp(2rem,8vw,4.5rem)] tracking-[-0.06em]" style={{ fontWeight: 800 }}>
                Iniciar Projeto
              </h2>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#6b6b6b] text-sm md:text-base">
                Se você está considerando um novo projeto, preencha o formulário abaixo. Analisamos cada contato com atenção e retornamos caso faça sentido seguir a conversa.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs tracking-[1.2px] uppercase">
                Contato Direto
              </p>
              <a href="wa.me/5575991908888" className="font-['Inter:Regular',sans-serif] font-normal text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                Whatsapp
              </a>
            </div>
            
            <div className="space-y-2">
              <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs tracking-[1.2px] uppercase">
                Social
              </p>
              <div className="flex flex-col gap-2">
                <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                  Instagram
                </a>
                <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Nome and Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Nome *
                </label>
                <input 
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Empresa
                </label>
                <input 
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Telefone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Telefone *
                </label>
                <input 
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#6b6b6b] placeholder:opacity-40"
                />
              </div>
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Email *
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Instagram and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Instagram
                </label>
                <input 
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@seu_perfil"
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#6b6b6b] placeholder:opacity-40"
                />
              </div>
              <div className="relative">
                <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                  Website
                </label>
                <input 
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.seusite.com"
                  className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#6b6b6b] placeholder:opacity-40"
                />
              </div>
            </div>

            {/* Row 4: Contexto */}
            <div className="relative">
              <label className="block font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-xs mb-2 tracking-[0.5px] uppercase">
                Breve contexto do projeto *
              </label>
              <textarea 
                name="contexto"
                value={formData.contexto}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Descreva brevemente seu projeto e objetivos..."
                className="w-full bg-transparent border-0 border-b border-[rgba(107,107,107,0.3)] px-0 pb-2 pt-1 font-['Inter:Regular',sans-serif] text-sm text-[#1a1a1a] outline-none resize-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#6b6b6b] placeholder:opacity-40"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="order-2 md:order-1">
                {submitStatus === 'idle' && (
                  <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-[#6b6b6b] text-[10px] tracking-[1px] uppercase">
                    Entraremos em contato.
                  </p>
                )}
                {submitStatus === 'success' && (
                  <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-green-600 text-[10px] tracking-[1px] uppercase">
                    ✓ Mensagem enviada com sucesso!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="font-['Space_Mono:Regular',sans-serif] font-normal text-red-600 text-[10px] tracking-[1px] uppercase">
                    ✗ Erro ao enviar. Tente novamente.
                  </p>
                )}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="border border-[#1a1a1a] flex gap-2 items-center justify-center px-6 py-3 cursor-pointer bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-colors order-1 md:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-['Space_Mono:Regular',sans-serif] font-normal text-xs tracking-[1.2px] uppercase">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </span>
                {!isSubmitting && (
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1d405500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative w-full border-t border-[#d4d4d0] py-8 px-4 md:px-6">
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
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Projetos', href: '#galeria' },
    { label: 'Assinatura', href: '#assinatura' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(244,243,239,0.95)] backdrop-blur-sm border-b border-[#d4d4d0] z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-[61px]">
          <div className="flex-shrink-0">
            <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[#1a1a1a] text-lg md:text-xl tracking-[2px] uppercase">
              Krios
            </p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-['Inter:Light',sans-serif] font-light text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>/gallery.html
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#d4d4d0]">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Inter:Light',sans-serif] font-light text-[#1a1a1a] text-xs tracking-[1.2px] uppercase hover:opacity-70 transition-opacity py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-[#f2f2f2] min-h-screen w-full">
      <Navigation />
      <div className="pt-16 md:pt-[61px]">
        <Hero />
        <Manifesto />
        <Projects />
        <VisualSystems />
        <Services />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}