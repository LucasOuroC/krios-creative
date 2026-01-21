import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ManifestoPage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const transitionRef = useRef(null);
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.85]);
  
  // Editorial transition effects
  const quoteY = useTransform(transitionProgress, [0, 0.5, 1], ["100%", "0%", "-20%"]);
  const quoteOpacity = useTransform(transitionProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const quoteScale = useTransform(transitionProgress, [0, 0.5, 1], [0.9, 1, 1.02]);
  
  const maskY = useTransform(transitionProgress, [0, 0.5], ["0%", "-100%"]);
  const revealOpacity = useTransform(transitionProgress, [0, 0.2, 0.5], [0, 0.5, 1]);
  
  const parallaxY = useTransform(parallaxProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="manifesto-page bg-white text-black overflow-x-hidden" style={{ fontFamily: 'Epilogue, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Glitch Noise Overlay */}
      <motion.div 
        className="fixed inset-0 glitch-noise z-[100] pointer-events-none"
        animate={{ opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-white/90 transition-colors border-b border-black/10"
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span 
            className="material-symbols-outlined text-black text-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            diamond
          </motion.span>
          <h2 className="text-xl font-black tracking-tighter uppercase">Krios</h2>
        </motion.div>
        <motion.a 
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#333333] transition-colors" 
          href="/"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Voltar
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
        </motion.a>
      </motion.header>

      <main className="flex flex-col w-full relative">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-6 relative py-32 bg-white">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="max-w-4xl w-full text-center relative z-10"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#333333] text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6"
              style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}
            >
              Immersive Editorial
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-[0.85] tracking-tighter mb-8 text-black"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Mani
              </motion.span>
              <br/>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                festo
              </motion.span>
              <motion.span 
                className="text-[#333333] opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                .
              </motion.span>
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-[2px] bg-black mx-auto my-8"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm font-mono uppercase tracking-widest text-gray-500"
            >
              Volume I — Identity // System_01
            </motion.p>
          </motion.div>
          <motion.div 
            className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden"
            animate={{ opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div 
              className="absolute top-1/4 -left-20 w-96 h-96 liquid-chrome blur-3xl rounded-full"
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Editorial Transition Container */}
        <div ref={transitionRef} className="relative h-screen">
          {/* Sliding Quote Section */}
          <motion.section 
            style={{ y: quoteY, opacity: quoteOpacity, scale: quoteScale }}
            className="sticky top-0 h-screen py-24 px-6 md:py-40 flex justify-center items-center bg-black overflow-hidden"
          >
            {/* Vertical Reveal Mask */}
            <motion.div
              style={{ y: maskY }}
              className="absolute inset-0 bg-white z-10 origin-top"
            />
            
            {/* Decorative Lines */}
            <motion.div
              style={{ opacity: revealOpacity }}
              className="absolute top-0 left-1/4 w-px h-full bg-white/10"
            />
            <motion.div
              style={{ opacity: revealOpacity }}
              className="absolute top-0 right-1/4 w-px h-full bg-white/10"
            />
            
            {/* Quote Content */}
            <div className="max-w-5xl w-full text-center relative z-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Page Number */}
                <motion.div 
                  className="text-white/30 font-mono text-xs uppercase tracking-[0.3em] mb-8"
                  style={{ opacity: revealOpacity }}
                >
                  <span className="inline-block w-8 h-px bg-white/30 mr-4 align-middle" />
                  Page 02
                  <span className="inline-block w-8 h-px bg-white/30 ml-4 align-middle" />
                </motion.div>
                
                <motion.blockquote 
                  className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tighter text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  "Marcas não quebram por falta de esforço. Elas quebram por falta de{" "}
                  <motion.span 
                    className="text-[#333333] italic"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    direção
                  </motion.span>."
                </motion.blockquote>
                
                {/* Decorative Element */}
                <motion.div 
                  className="mt-12 flex items-center justify-center gap-2"
                  style={{ opacity: revealOpacity }}
                >
                  <span className="w-2 h-2 bg-white/50 rotate-45" />
                  <span className="w-2 h-2 bg-white/30 rotate-45" />
                  <span className="w-2 h-2 bg-white/20 rotate-45" />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Drop Cap Content Section */}
        <AnimatedSection className="py-24 px-6 md:px-12 lg:py-32 flex flex-col items-center bg-white">
          <div className="max-w-2xl w-full space-y-8 text-lg md:text-xl leading-relaxed text-black" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}>
            <motion.p 
              className="drop-cap"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Em um mundo saturado de sinais, a voz mais alta raramente vence. A mais clara vence. 
              Acreditamos que o design não é sobre decoração, mas sobre a remoção do desnecessário até que apenas o essencial permaneça.
            </motion.p>
            <motion.p 
              className="font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vivemos na era do excesso. Excesso de informação, excesso de escolha, excesso de ruído. 
              Marcas tentam gritar para serem ouvidas, adicionando camadas sobre camadas de complexidade. 
              Nós escolhemos o caminho oposto. Escolhemos o silêncio estratégico.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Parallax Image Section */}
        <motion.div 
          ref={parallaxRef}
          className="w-full h-[70vh] md:h-[90vh] border-y border-black overflow-hidden relative" 
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              width: '100%',
              height: '120%',
              backgroundImage: `url('/images/liquid-chrome-texture.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(1.25) brightness(0.75)',
              y: parallaxY
            }}
          />
          <div className="absolute inset-0 h-full w-full bg-black/40 flex items-center justify-center">
            <motion.div 
              className="backdrop-blur-xl border border-white/20 px-8 py-4 bg-black/60"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            >
              <motion.span 
                className="text-white font-mono text-xs uppercase tracking-[1em]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Clarity_In_Form.exe
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Two-Column Content with Images Section */}
        <section className="py-24 px-6 md:px-12 lg:py-40 max-w-[1400px] mx-auto w-full bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection className="lg:sticky lg:top-32 flex flex-col justify-center h-full">
              <motion.h2 
                className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Criatividade<br/>
                é método.<br/>
                <motion.span 
                  className="text-[#333333]"
                  whileHover={{ scale: 1.05, x: 10 }}
                  style={{ display: "inline-block" }}
                >
                  É curadoria.
                </motion.span>
              </motion.h2>
              <div className="space-y-6 text-lg leading-relaxed text-black max-w-md" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Não acreditamos em inspiração divina, mas em processo rigoroso. 
                  Cada curva, cada cor, cada palavra é uma decisão deliberada. 
                  Nosso trabalho é filtrar o caos e extrair a essência.
                </motion.p>
                <motion.p 
                  className="opacity-70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Curadoria é o ato de cuidar. Cuidar da mensagem, cuidar do público, cuidar do legado. 
                  Quando removemos o excesso, honramos a inteligência de quem interage com a marca.
                </motion.p>
                <motion.div 
                  className="pt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button 
                    className="flex items-center gap-3 text-black font-black uppercase tracking-widest text-xs border-b-2 border-black pb-2 hover:bg-black hover:text-white transition-all px-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Process{" "}
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </motion.button>
                </motion.div>
              </div>
            </AnimatedSection>
            <div className="flex flex-col gap-12">
              <motion.div 
                className="w-full aspect-[3/4] overflow-hidden border border-black group"
                initial={{ opacity: 0, x: 50, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ rotate: 1, scale: 1.02 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/images/abstract-chrome-metallic.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(1.25) brightness(1.1)'
                  }}
                />
              </motion.div>
              <motion.div 
                className="w-full aspect-[4/3] overflow-hidden border border-black mt-8 lg:mt-0 lg:-ml-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  rotate: -1, 
                  scale: 1.02,
                  boxShadow: "25px 25px 0px 0px rgba(0,0,0,1)"
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/images/abstract-noise-glitch.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) invert(1)'
                  }}
                />
              </motion.div>
              <motion.p 
                className="text-[10px] font-mono mt-2 self-end uppercase tracking-widest bg-black text-white px-2 py-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fig. 02 — Neural Texture Study
              </motion.p>
            </div>
          </div>
        </section>

        {/* Full Width Image with Text Overlay */}
        <AnimatedSection className="py-12 px-6 bg-white">
          <motion.div 
            className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative border border-black"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('/images/macro-chrome-surface.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.5)'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h3 
                className="text-white text-6xl md:text-[10rem] font-black tracking-tighter opacity-90 mix-blend-overlay"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05, opacity: 1 }}
              >
                KREATIVITY
              </motion.h3>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Principles Section */}
        <section className="py-24 px-6 md:px-12 lg:py-32 flex flex-col items-center bg-white border-y border-black/5">
          <AnimatedSection className="max-w-2xl w-full text-center mb-16">
            <motion.span 
              className="material-symbols-outlined text-5xl text-black mb-6 inline-block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              all_inclusive
            </motion.span>
            <motion.p 
              className="text-xl md:text-2xl font-bold leading-relaxed text-black"
              style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              O resultado não é apenas um logotipo ou um site. É uma presença. Uma postura. 
              Uma marca que sabe quem é não precisa gritar para ser notada. Ela simplesmente{" "}
              <motion.span 
                className="underline decoration-[#333333] decoration-4 underline-offset-4"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                é
              </motion.span>.
            </motion.p>
          </AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-6xl border border-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { num: "01.", title: "Clareza", desc: "Eliminação de ambiguidades na comunicação visual." },
              { num: "02.", title: "Consistência", desc: "Repetição inteligente de padrões visuais proprietários." },
              { num: "03.", title: "Longevidade", desc: "Design construído para durar décadas, não meses." }
            ].map((item, index) => (
              <motion.div 
                key={item.num}
                className={`p-12 border-black hover:bg-black hover:text-white transition-colors group ${
                  index < 2 ? 'border-b md:border-b-0 md:border-r' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
              >
                <motion.p 
                  className="text-5xl font-black text-[#333333] group-hover:text-white mb-4"
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {item.num}
                </motion.p>
                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">{item.title}</h4>
                <p className="text-xs font-mono uppercase tracking-widest opacity-60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-black opacity-[0.03] pointer-events-none"
            animate={{ opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <AnimatedSection className="max-w-6xl w-full text-center space-y-12 relative z-10">
            <div className="flex flex-col gap-4">
              <motion.h2 
                className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-none"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Menos ruído.{" "}
                <motion.span 
                  className="text-[#333333]/30"
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  style={{ display: "inline-block" }}
                >
                  Mais direção.
                </motion.span>
              </motion.h2>
              <motion.h2 
                className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-none"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Menos volume.{" "}
                <motion.span 
                  className="text-[#333333] italic"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  style={{ display: "inline-block" }}
                >
                  Mais valor.
                </motion.span>
              </motion.h2>
            </div>
            <motion.div 
              className="pt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a 
                className="inline-flex items-center justify-center px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-[#333333] transition-all shadow-[8px_8px_0px_0px_rgba(51,51,51,1)]" 
                href="/"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "12px 12px 0px 0px rgba(51,51,51,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="border-t-2 border-black py-16 px-6 md:px-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-black uppercase tracking-tighter">Krios</h3>
            <p className="text-sm font-medium max-w-xs uppercase tracking-wider" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif' }}>
              Strategic design for brands seeking clarity in a noisy world.
            </p>
            <div className="flex gap-8 pt-4">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
                <motion.a 
                  key={social}
                  className="text-xs font-black hover:text-[#333333] transition-colors uppercase tracking-[0.2em]" 
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col md:items-end gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] text-black font-mono uppercase tracking-[0.3em]">
              © 2024 Krios Studio. Built for the void.
            </p>
            <motion.a 
              className="text-2xl font-black hover:text-[#333333] transition-colors tracking-tighter" 
              href="mailto:hello@krios.com"
              whileHover={{ scale: 1.05, x: -5 }}
            >
              hello@krios.com
            </motion.a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
