import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackButton from './BackButton'
import { imgLogoIcon, imgFormDecorIcon, imgFormQ2Thumb } from '../../assets'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const AGE_MIN    = 25
const AGE_MAX    = 60
const THUMB_SIZE = 37
const LABELS     = [25, 30, 35, 40, 45, 50, 55, 60]

export default function Question2({ onBack, onContinue }) {
  const [age, setAge] = useState(38)
  const [btnHovered, setBtnHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const pct = (age - AGE_MIN) / (AGE_MAX - AGE_MIN)

  return (
    <div style={{
      minHeight: '100vh',
      height: isMobile ? 'auto' : '100vh',
      overflow: isMobile ? 'visible' : 'hidden',
      background: '#f5faff',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      position: 'relative',
    }}>

      {/* Decorative bg icon — desktop only */}
      <div style={{
        position: 'absolute',
        right: -100,
        bottom: -50,
        width: '55vw',
        maxWidth: 700,
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0,
        display: isMobile ? 'none' : 'block',
      }}>
        <img src={imgFormDecorIcon} alt="" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 900,
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '24px 20px 40px' : '32px 5% 32px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: isMobile ? 'visible' : 'hidden',
      }}>

        {/* Logo */}
        <motion.div {...fadeIn(0)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: isMobile ? 32 : 'clamp(28px, 3vw, 41px)', letterSpacing: -1.2, color: '#1b4d7a' }}>Activ</span>
            <img src={imgLogoIcon} alt="" style={{ width: 36, height: 21, objectFit: 'contain', transform: 'rotate(180deg) scaleY(-1)' }} />
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: 4, color: '#6b7280', textTransform: 'uppercase', marginBottom: isMobile ? 24 : 32 }}>
            Telemedicine, LLC
          </div>
        </motion.div>

        {/* Back button */}
        <BackButton onClick={onBack} />

        {/* Card */}
        <motion.div
          {...fadeIn(0.1)}
          style={{
            background: '#fff',
            borderRadius: 30,
            boxShadow: '15px 35px 50px 0px rgba(223,240,255,0.5)',
            padding: isMobile ? '28px 20px' : '48px 5%',
            boxSizing: 'border-box',
          }}
        >
          {/* Question title */}
          <motion.h2
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? 26 : 'clamp(26px, 4vw, 55px)',
              lineHeight: 1.2,
              letterSpacing: -1.65,
              color: '#1f2937',
              textAlign: 'center',
              margin: isMobile ? '0 0 32px' : '0 0 48px',
            }}
          >
            What&rsquo;s your age range?
          </motion.h2>

          {/* Slider container */}
          <motion.div {...fadeIn(0.3)} style={{ position: 'relative', width: '100%', marginBottom: 16 }}>

            {/* Gray track */}
            <div style={{ width: '100%', height: 14, background: '#dcdcdc', borderRadius: 30, position: 'relative', overflow: 'visible' }}>
              {/* Teal filled portion */}
              <div style={{ position: 'absolute', left: 0, top: 0, width: `${pct * 100}%`, height: '100%', background: '#2a9d8f', borderRadius: 30, pointerEvents: 'none' }} />
            </div>

            {/* Thumb image */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `calc(${pct * 100}% - ${THUMB_SIZE / 2}px)`,
                transform: 'translateY(-50%)',
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                pointerEvents: 'none',
              }}
            >
              <img src={imgFormQ2Thumb} alt="" style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Invisible native input for interaction */}
            <input
              type="range"
              min={AGE_MIN}
              max={AGE_MAX}
              step={1}
              value={age}
              onChange={e => setAge(+e.target.value)}
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
                height: THUMB_SIZE,
                opacity: 0,
                cursor: 'pointer',
                margin: 0,
                zIndex: 10,
              }}
            />
          </motion.div>

          {/* Age labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
            {LABELS.map(label => (
              <span
                key={label}
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? 11 : 'clamp(13px, 1.4vw, 20px)',
                  lineHeight: 1.6,
                  letterSpacing: -0.6,
                  color: '#6b7280',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.5)}
          whileTap={{ scale: 0.97 }}
          onClick={() => onContinue({ age })}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            height: 52,
            padding: '0 36px',
            background: btnHovered ? '#0d3a5c' : '#1b4d7a',
            borderRadius: 50,
            display: isMobile ? 'flex' : 'inline-flex',
            width: isMobile ? '100%' : 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.15s ease, transform 0.15s ease',
            transform: btnHovered ? 'scale(1.05)' : 'scale(1)',
            alignSelf: isMobile ? 'stretch' : 'center',
            marginTop: 24,
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: -0.32, color: '#fff' }}>
            CONTINUE →
          </span>
        </motion.div>

        {/* Footer */}
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14,
          color: '#6b7280',
          textAlign: 'center',
          marginTop: isMobile ? 32 : 'auto',
          paddingTop: 24,
          marginBottom: 0,
          position: 'relative',
          zIndex: 2,
        }}>
          © 2026 Activ8 Telemedicine, LLC. All rights reserved.
        </p>

      </div>
    </div>
  )
}
