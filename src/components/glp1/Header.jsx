import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  imgHeroMain, imgHeroImg95, imgHeroImg96, imgHeroImg97, imgHeroImg98,
  imgLogoIcon, imgQuizIcon, imgNoObligIcon, imgHipaaIcon,
} from '../../assets'
import TiltCard from '../shared/TiltCard'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

export default function Header() {
  const navigate = useNavigate()

  return (
    <section style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', position: 'relative' }}>

      {/* ── Navbar ── */}
      <motion.nav
        {...fadeIn(0)}
        className="hero-nav"
        style={{
          width: '100%',
          padding: '20px 10%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', height: 55 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(22px, 3vw, 31px)', lineHeight: 1, letterSpacing: -1.2, color: '#1b4d7a' }}>
              Activ
            </span>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={imgLogoIcon}
              alt=""
              style={{ width: 38, height: 22, objectFit: 'contain', transform: 'rotate(180deg) scaleY(-1)' }}
            />
          </div>
          <span style={{ ...PJS, fontWeight: 600, fontSize: 9, letterSpacing: 3.5, color: '#6b7280', textTransform: 'uppercase', marginTop: 4 }}>
            Telemedicine,LLC
          </span>
        </div>
      </motion.nav>

      {/* ── Hero ── */}
      <div className="hero-wrapper" style={{
        flex: '1 0 auto',
        width: '100%',
        maxWidth: 1240,
        margin: '0 auto',
        padding: '20px 5%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: '5%',
        position: 'relative',
        zIndex: 2,
      }}>

        {/* Left: text */}
        <div className="hero-left" style={{ flex: '1 1 50%', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 15, alignSelf: 'center' }}>
          <motion.p
            {...fadeUp(0.2)}
            style={{ ...PJS, fontWeight: 600, fontSize: 16, color: '#2a9d8f', margin: 0 }}
          >
            MEDICAL WEIGHT LOSS
          </motion.p>

          <motion.h1
            {...fadeUp(0.35)}
            style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(25px, 4vw, 50px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: 0 }}
          >
            Lose Weight With a Plan Built for YOUR Body
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.6, letterSpacing: -0.4, color: '#6b7280', margin: 0, maxWidth: 580 }}
          >
            GLP-1 therapy is the most effective medical weight loss treatment available today. At Activ8, you get a personalized protocol managed by a real provider — not a chatbot or a subscription box.
          </motion.p>

          <motion.div
            className="hero-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
            whileTap={{ scale: 0.97 }}
            style={{ alignSelf: 'flex-start', height: 60 }}
          >
            <TiltCard
              style={{ position: 'relative', width: '100%', height: '100%' }}
              cardStyle={{
                background: '#1b4d7a',
                borderRadius: 50,
                padding: '0 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              max={8}
              scale={1.05}
              glowColor="255,255,255"
              glowOpacity={0.22}
              onClick={() => navigate('/form')}
            >
              <span className="hero-btn-text" style={{ ...INT, fontWeight: 600, fontSize: 14, letterSpacing: -0.42, color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                START YOUR ASSESSMENT →
              </span>
            </TiltCard>
          </motion.div>
        </div>

        {/* Right: image collage (Auto-scrolling Marquee) */}
        <div
          className="hero-collage"
          style={{
            flex: '1 1 42%',
            minWidth: 0,
            height: 580,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            position: 'relative',
            top: -70,
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* Column 1: Top to Bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <motion.div
              animate={{ y: ['-50%', '0%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {[imgHeroImg97, imgHeroImg98, imgHeroMain, imgHeroImg96, imgHeroImg95, imgHeroImg97, imgHeroImg98, imgHeroMain, imgHeroImg96, imgHeroImg95].map((img, idx) => (
                <div key={idx} style={{ borderRadius: 24, overflow: 'hidden', height: 220, width: '100%' }} className="transition-all duration-500 hover:scale-[1.02]">
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Bottom to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {[imgHeroImg96, imgHeroMain, imgHeroImg95, imgHeroImg97, imgHeroImg98, imgHeroImg96, imgHeroMain, imgHeroImg95, imgHeroImg97, imgHeroImg98].map((img, idx) => (
                <div key={idx} style={{ borderRadius: 24, overflow: 'hidden', height: 260, width: '100%' }} className="transition-all duration-500 hover:scale-[1.02]">
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: Horizontal Image Marquee (Visible only on <768px via CSS) */}
        <div className="hero-collage-mobile">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: 12, width: 'max-content', padding: '10px 0' }}
          >
            {[imgHeroMain, imgHeroImg95, imgHeroImg96, imgHeroImg97, imgHeroImg98, imgHeroMain, imgHeroImg95, imgHeroImg96, imgHeroImg97, imgHeroImg98].map((img, idx) => (
              <div key={idx} style={{ width: 140, height: 180, borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div style={{
        width: '100%',
        maxWidth: 1240,
        margin: '20px auto 30px',
        padding: '0 5%',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
      }}>
        {[
          { bg: 'rgba(42,157,143,0.15)', glowColor: '42,157,143', icon: imgQuizIcon, label: '2-minute quiz', delay: 0.75 },
          { bg: 'rgba(27,77,122,0.15)', glowColor: '27,77,122', icon: imgNoObligIcon, label: 'No obligation', delay: 0.85 },
          { bg: 'rgba(42,157,143,0.15)', glowColor: '42,157,143', icon: imgHipaaIcon, label: 'HIPAA compliant', delay: 0.95 },
        ].map(({ bg, glowColor, icon, label, delay }) => (
          <motion.div
            key={label}
            className="trust-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            style={{ flex: '1 1 280px', maxWidth: 387, height: 100 }}
          >
            <TiltCard
              style={{ position: 'relative', width: '100%', height: '100%' }}
              cardStyle={{ background: bg, borderRadius: 15, backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28 }}
              max={7} scale={1.05} glowColor={glowColor} glowOpacity={0.2}
            >
              <img src={icon} alt="" style={{ width: 42, height: 49, objectFit: 'contain', flexShrink: 0, position: 'relative', zIndex: 1 }} />
              <span style={{ ...PJS, fontWeight: 600, fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.1, color: '#6b7280', position: 'relative', zIndex: 1 }}>
                {label}
              </span>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* ── Mobile responsive ── */}
      <style>{`
        .hero-collage-mobile { display: none; }

        @media (max-width: 768px) {
          .hero-collage { display: none !important; }
          .hero-collage-mobile { 
            display: block !important; 
            width: 100vw; 
            margin-left: -5%; 
            overflow: hidden; 
            position: relative;
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            WebkitMaskImage: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            margin-bottom: 20px;
          }

          .hero-nav {
            padding: 14px 5% !important;
          }

          .hero-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 16px 5% !important;
            gap: 20px !important;
          }

          .hero-left {
            flex: unset !important;
            width: 100% !important;
            gap: 12px !important;
          }

          .hero-btn {
            height: 46px !important;
            padding: 0 20px !important;
            align-self: stretch !important;
            justify-content: center !important;
          }

          .hero-btn-text {
            font-size: 12px !important;
            letter-spacing: -0.2px !important;
          }

          .trust-item {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            height: 76px !important;
          }
        }
      `}</style>
    </section>
  )
}
