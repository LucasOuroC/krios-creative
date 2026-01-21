import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import bgImage from './assets/6566231.webp';

function AnimatedSection({ children, style = {} }: { children: React.ReactNode, style?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function ManifestoPage() {
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
  
  const quoteY = useTransform(transitionProgress, [0, 0.5, 1], ["100%", "0%", "-20%"]);
  const quoteOpacity = useTransform(transitionProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);
  const quoteScale = useTransform(transitionProgress, [0, 0.5, 1], [0.9, 1, 1.02]);
  
  const maskY = useTransform(transitionProgress, [0, 0.5], ["0%", "-100%"]);
  const revealOpacity = useTransform(transitionProgress, [0, 0.2, 0.5], [0, 0.5, 1]);
  
  const parallaxY = useTransform(parallaxProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      color: '#000000', 
      overflowX: 'hidden',
      fontFamily: 'Epilogue, sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* Glitch Noise Overlay */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          pointerEvents: 'none',
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        animate={{ opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 48px',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            textTransform: 'uppercase',
            fontFamily: 'Epilogue, sans-serif',
            margin: 0
          }}>
            Krios
          </h2>
        </motion.div>
        <motion.a 
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#000',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
          whileHover={{ x: 5, color: '#333333' }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          VOLTAR
          <span className="material-symbols-outlined" style={{ fontSize: '16px', fontFamily: 'Material Symbols Outlined' }}>arrow_forward</span>
        </motion.a>
      </motion.header>

      <main style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
        {/* Hero Section */}
        <section ref={heroRef} style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '128px 24px',
          position: 'relative',
          backgroundColor: '#ffffff'
        }}>
          <motion.div 
            style={{ 
              y: heroY, 
              opacity: heroOpacity, 
              scale: heroScale,
              maxWidth: '896px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              zIndex: 10
            }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                color: '#333333',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.5em',
                marginBottom: '24px'
              }}
            >
              IMMERSIVE EDITORIAL
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontSize: 'clamp(72px, 15vw, 192px)',
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
                marginBottom: '32px',
                color: '#000',
                fontFamily: 'Epilogue, sans-serif'
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: 'block' }}
              >
                Mani
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ display: 'block' }}
              >
                festo
                <motion.span 
                  style={{ color: '#333333', opacity: 0.5 }}
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </motion.span>
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                height: '2px',
                backgroundColor: '#000',
                margin: '32px auto'
              }}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#6b6b6b'
              }}
            >
              Volume I — Identity // System_01
            </motion.p>
          </motion.div>
          <motion.div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
            animate={{ opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div 
              style={{
                position: 'absolute',
                top: '25%',
                left: '-80px',
                width: '384px',
                height: '384px',
                filter: 'blur(64px)',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #000 0%, #333 25%, #fff 50%, #333 75%, #000 100%)',
                backgroundSize: '400% 400%'
              }}
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
        <div ref={transitionRef} style={{ position: 'relative', height: '100vh' }}>
          <motion.section 
            style={{ 
              y: quoteY, 
              opacity: quoteOpacity, 
              scale: quoteScale,
              position: 'sticky',
              top: 0,
              height: '100vh',
              padding: 'clamp(96px, 15vw, 160px) 24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#000',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{ 
                y: maskY,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#fff',
                zIndex: 10,
                transformOrigin: 'top'
              }}
            />
            
            <motion.div
              style={{ 
                opacity: revealOpacity,
                position: 'absolute',
                top: 0,
                left: '25%',
                width: '1px',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
            />
            <motion.div
              style={{ 
                opacity: revealOpacity,
                position: 'absolute',
                top: 0,
                right: '25%',
                width: '1px',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
            />
            
            <div style={{ maxWidth: '1280px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 20 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.div 
                  style={{ 
                    opacity: revealOpacity,
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    marginBottom: '32px'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginRight: '16px', verticalAlign: 'middle' }} />
                  PAGE 02
                  <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginLeft: '16px', verticalAlign: 'middle' }} />
                </motion.div>
                
                <motion.blockquote 
                  style={{
                    fontSize: 'clamp(30px, 7vw, 72px)',
                    fontWeight: 900,
                    lineHeight: 1.25,
                    letterSpacing: '-0.05em',
                    color: '#fff',
                    fontFamily: 'Epilogue, sans-serif',
                    margin: 0
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  "Marcas não quebram por falta de esforço. Elas quebram por falta de{" "}
                  <motion.span 
                    style={{ color: '#333333', fontStyle: 'italic' }}
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    direção
                  </motion.span>."
                </motion.blockquote>
                
                <motion.div 
                  style={{ 
                    opacity: revealOpacity,
                    marginTop: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.5)', transform: 'rotate(45deg)' }} />
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.3)', transform: 'rotate(45deg)' }} />
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.2)', transform: 'rotate(45deg)' }} />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Drop Cap Content Section */}
        <AnimatedSection 
          style={{ 
            backgroundColor: '#fff', 
            padding: 'clamp(96px, 10vw, 128px) 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ 
            maxWidth: '672px', 
            width: '100%',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(18px, 2vw, 20px)',
            lineHeight: 1.625,
            color: '#000'
          }}>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: '32px' }}
            >
              <span style={{ 
                float: 'left', 
                fontSize: 'clamp(60px, 10vw, 80px)', 
                lineHeight: 0.8,
                fontWeight: 900,
                marginRight: '8px',
                marginTop: '8px'
              }}>E</span>
              m um mundo saturado de sinais, a voz mais alta raramente vence. A mais clara vence. 
              Acreditamos que o design não é sobre decoração, mas sobre a remoção do desnecessário até que apenas o essencial permaneça.
            </motion.p>
            <motion.p 
              style={{ fontWeight: 500 }}
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
          style={{ 
            width: '100%', 
            height: 'clamp(70vh, 90vh, 90vh)', 
            borderTop: '1px solid #000',
            borderBottom: '1px solid #000',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '120%',
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(1.25) brightness(0.75)',
              y: parallaxY
            }}
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div style={{ 
            position: 'absolute', 
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <motion.div 
              style={{
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '16px 32px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            >
              <motion.span 
                style={{
                  color: '#fff',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1em'
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Menos ruido. Mais clareza
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Two-Column Content with Images Section */}
        <section style={{ 
          padding: 'clamp(96px, 10vw, 160px) 24px',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(64px, 8vw, 96px)',
            alignItems: 'start'
          }}>
            <AnimatedSection style={{ 
              position: window.innerWidth >= 1024 ? 'sticky' : 'relative',
              top: window.innerWidth >= 1024 ? '128px' : 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}>
              <motion.h2 
                style={{
                  fontSize: 'clamp(48px, 8vw, 72px)',
                  fontWeight: 900,
                  marginBottom: '48px',
                  lineHeight: 0.9,
                  letterSpacing: '-0.05em',
                  fontFamily: 'Epilogue, sans-serif'
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Criatividade<br/>
                é método.<br/>
                <motion.span 
                  style={{ color: '#333333', display: 'inline-block' }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  É curadoria.
                </motion.span>
              </motion.h2>
              <div style={{ 
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                lineHeight: 1.625,
                color: '#000',
                maxWidth: '448px'
              }}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ marginBottom: '24px' }}
                >
                  Não acreditamos em inspiração divina, mas em processo rigoroso. 
                  Cada curva, cada cor, cada palavra é uma decisão deliberada. 
                  Nosso trabalho é filtrar o caos e extrair a essência.
                </motion.p>
                <motion.p 
                  style={{ opacity: 0.7, marginBottom: '32px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Curadoria é o ato de cuidar. Cuidar da mensagem, cuidar do público, cuidar do legado. 
                  Quando removemos o excesso, honramos a inteligência de quem interage com a marca.
                </motion.p>
                <motion.div 
                  style={{ paddingTop: '32px' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#000',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '12px',
                      padding: '8px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid #000',
                      cursor: 'pointer',
                      fontFamily: 'Epilogue, sans-serif'
                    }}
                    whileHover={{ scale: 1.05, x: 5, backgroundColor: '#000', color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    EXPLORE OUR PROCESS
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', fontFamily: 'Material Symbols Outlined' }}>arrow_outward</span>
                  </motion.button>
                </motion.div>
              </div>
            </AnimatedSection>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <motion.div 
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  border: '1px solid #000'
                }}
                initial={{ opacity: 0, x: 50, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ rotate: 1, scale: 1.02 }}
              >
                <motion.div 
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/images/abstract-chrome-metallic.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(1.25) brightness(1.1)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  border: '1px solid #000',
                  marginTop: window.innerWidth >= 1024 ? 0 : '32px',
                  marginLeft: window.innerWidth >= 1024 ? '-48px' : 0,
                  boxShadow: '20px 20px 0px 0px rgba(0,0,0,1)'
                }}
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
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/images/abstract-noise-glitch.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) invert(1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </motion.div>
              <motion.p 
                style={{
                  fontSize: '10px',
                  color: '#fff',
                  fontFamily: 'monospace',
                  marginTop: '8px',
                  alignSelf: 'flex-end',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  backgroundColor: '#000',
                  padding: '4px 8px'
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                FIG. 02 — NEURAL TEXTURE STUDY
              </motion.p>
            </div>
          </div>
        </section>

        {/* Full Width Image with Text Overlay */}
        <AnimatedSection style={{ padding: '48px 24px', backgroundColor: '#fff' }}>
          <motion.div 
            style={{
              width: '100%',
              height: 'clamp(50vh, 70vh, 70vh)',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid #000'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url('/images/macro-chrome-surface.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.5)'
              }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.h3 
                style={{
                  color: '#fff',
                  fontSize: 'clamp(60px, 15vw, 160px)',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  opacity: 0.9,
                  mixBlendMode: 'overlay',
                  fontFamily: 'Epilogue, sans-serif'
                }}
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
        <section style={{ 
          padding: 'clamp(96px, 10vw, 128px) 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <AnimatedSection style={{ maxWidth: '672px', width: '100%', textAlign: 'center', marginBottom: '64px' }}>
            <motion.span 
              className="material-symbols-outlined"
              style={{ 
                fontSize: '48px', 
                color: '#000', 
                marginBottom: '24px', 
                display: 'inline-block',
                fontFamily: 'Material Symbols Outlined'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              all_inclusive
            </motion.span>
            <motion.p 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 700,
                lineHeight: 1.625,
                color: '#000'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              O resultado não é apenas um logotipo ou um site. É uma presença. Uma postura. 
              Uma marca que sabe quem é não precisa gritar para ser notada. Ela simplesmente{" "}
              <motion.span 
                style={{ textDecoration: 'underline', textDecorationColor: '#333333', textDecorationThickness: '4px', textUnderlineOffset: '4px', display: 'inline-block' }}
                whileHover={{ scale: 1.1 }}
              >
                é
              </motion.span>.
            </motion.p>
          </AnimatedSection>
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 0,
              width: '100%',
              maxWidth: '1152px',
              border: '1px solid #000'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { num: "01.", title: "CLAREZA", desc: "ELIMINAÇÃO DE AMBIGUIDADES NA COMUNICAÇÃO VISUAL." },
              { num: "02.", title: "CONSISTÊNCIA", desc: "REPETIÇÃO INTELIGENTE DE PADRÕES VISUAIS PROPRIETÁRIOS." },
              { num: "03.", title: "LONGEVIDADE", desc: "DESIGN CONSTRUÍDO PARA DURAR DÉCADAS, NÃO MESES." }
            ].map((item, index) => (
              <motion.div 
                key={item.num}
                style={{
                  padding: '48px',
                  borderRight: index < 2 && window.innerWidth >= 768 ? '1px solid #000' : 'none',
                  borderBottom: index < 2 && window.innerWidth < 768 ? '1px solid #000' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: 'transparent'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  zIndex: 10, 
                  backgroundColor: '#000',
                  color: '#fff'
                }}
              >
                <motion.p 
                  style={{
                    fontSize: '48px',
                    fontWeight: 900,
                    color: '#333333',
                    marginBottom: '16px',
                    fontFamily: 'Epilogue, sans-serif'
                  }}
                  whileHover={{ scale: 1.1, x: 10, color: '#fff' }}
                >
                  {item.num}
                </motion.p>
                <h4 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '-0.05em', fontFamily: 'Epilogue, sans-serif' }}>{item.title}</h4>
                <p style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(96px, 10vw, 96px) 24px',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <motion.div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#000',
              opacity: 0.03,
              pointerEvents: 'none'
            }}
            animate={{ opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <AnimatedSection style={{ maxWidth: '1152px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <motion.h2 
                style={{
                  fontSize: 'clamp(48px, 10vw, 128px)',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  color: '#000',
                  lineHeight: 1,
                  fontFamily: 'Epilogue, sans-serif'
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Menos ruído.{" "}
                <motion.span 
                  style={{ color: 'rgba(51, 51, 51, 0.3)', display: 'inline-block' }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                  Mais direção.
                </motion.span>
              </motion.h2>
              <motion.h2 
                style={{
                  fontSize: 'clamp(48px, 10vw, 128px)',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  color: '#000',
                  lineHeight: 1,
                  fontFamily: 'Epilogue, sans-serif'
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Menos volume.{" "}
                <motion.span 
                  style={{ color: '#333333', fontStyle: 'italic', display: 'inline-block' }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  Mais valor.
                </motion.span>
              </motion.h2>
            </div>
            <motion.div 
              style={{ paddingTop: '64px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a 
                href="/#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px 48px',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  fontSize: '12px',
                  boxShadow: '8px 8px 0px 0px rgba(51,51,51,1)',
                  textDecoration: 'none',
                  fontFamily: 'Epilogue, sans-serif',
                  border: 'none',
                  cursor: 'pointer'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "12px 12px 0px 0px rgba(51,51,51,1)",
                  backgroundColor: '#333'
                }}
                whileTap={{ scale: 0.95 }}
              >
                START A PROJECT
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        style={{
          borderTop: '2px solid #000',
          padding: '64px 24px',
          backgroundColor: '#fff'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: window.innerWidth >= 768 ? 'flex-end' : 'flex-start',
          gap: '48px'
        }}>
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', fontFamily: 'Epilogue, sans-serif', margin: 0 }}>Krios</h3>
            <p style={{ fontSize: '14px', fontWeight: 500, maxWidth: '320px', fontFamily: 'Manrope, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Strategic design for brands seeking clarity in a noisy world.
            </p>
            <div style={{ display: 'flex', gap: '32px', paddingTop: '16px' }}>
              <motion.a 
                href="https://www.instagram.com/krioscreative"
                style={{
                  fontSize: '12px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: 'Epilogue, sans-serif'
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2, color: '#333' }}
              >
                Instagram
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: window.innerWidth >= 768 ? 'flex-end' : 'flex-start',
              gap: '16px'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '10px', color: '#000', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.3em', margin: 0 }}>
              © 2026 Krios Studio. Built for the void.
            </p>
            <motion.a 
              href="mailto:rafael05ouro@gmail.com"
              style={{
                fontSize: '24px',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: '#000',
                textDecoration: 'none',
                fontFamily: 'Epilogue, sans-serif'
              }}
              whileHover={{ scale: 1.05, x: -5, color: '#333' }}
            >
              rafael05ouro@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
