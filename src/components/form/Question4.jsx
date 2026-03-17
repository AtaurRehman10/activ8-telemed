import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackButton from './BackButton'
import { imgLogoIcon, imgFormDecorIcon } from '../../assets'

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

const PJS = { fontFamily: "'Plus Jakarta Sans',sans-serif" }
const INT = { fontFamily: "'Inter',sans-serif" }

const OPTIONS = [
  { label: 'Yes', value: 'yes', emoji: '✅' },
  { label: 'No',  value: 'no',  emoji: '❌' },
]

export default function Question4({ onBack, onContinue }) {
  const [selected, setSelected] = useState('yes')
  const [btnHovered, setBtnHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

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
            <span style={{ ...PJS, fontWeight: 700, fontSize: isMobile ? 32 : 'clamp(28px, 3vw, 41px)', letterSpacing: -1.2, color: '#1b4d7a' }}>Activ</span>
            <img src={imgLogoIcon} alt="" style={{ width: 36, height: 21, objectFit: 'contain', transform: 'rotate(180deg) scaleY(-1)' }} />
          </div>
          <div style={{ ...PJS, fontWeight: 600, fontSize: 9, letterSpacing: 4, color: '#6b7280', textTransform: 'uppercase', marginBottom: isMobile ? 24 : 32 }}>
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
          {/* Heading */}
          <motion.div {...fadeUp(0.2)} style={{ textAlign: 'center', marginBottom: isMobile ? 28 : 40 }}>
            <p style={{ ...PJS, fontWeight: 700, fontSize: isMobile ? 22 : 'clamp(22px, 3.5vw, 55px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: '0 0 8px' }}>
              Have you tried GLP-1 medications before?
            </p>
            <p style={{ ...PJS, fontWeight: 500, fontSize: isMobile ? 15 : 'clamp(15px, 2vw, 30px)', lineHeight: 1.8, color: '#1f2937', margin: 0 }}>
              (e.g., Ozempic, Wegovy, Mounjaro)
            </p>
          </motion.div>

          {/* Yes / No buttons */}
          <div style={{ display: 'flex', gap: isMobile ? 12 : 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {OPTIONS.map((opt, i) => {
              const isSelected = selected === opt.value
              return (
                <motion.div
                  key={opt.value}
                  {...fadeUp(0.3 + i * 0.08)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(opt.value)}
                  style={{
                    height: 64,
                    flex: isMobile ? '1 1 120px' : '0 0 auto',
                    minWidth: isMobile ? 0 : 160,
                    padding: '0 32px',
                    background: isSelected ? '#2a9d8f' : '#eee',
                    border: '1px solid #6b7280',
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{opt.emoji}</span>
                  <span style={{ ...PJS, fontWeight: 700, fontSize: 22, letterSpacing: -0.66, color: isSelected ? '#fff' : '#6b7280', lineHeight: 1 }}>
                    {opt.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.5)}
          whileTap={{ scale: 0.97 }}
          onClick={() => onContinue({ triedGlp1: selected })}
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
          <span style={{ ...INT, fontWeight: 600, fontSize: 16, letterSpacing: -0.32, color: '#fff' }}>
            CONTINUE →
          </span>
        </motion.div>

        {/* Footer */}
        <p style={{
          ...INT,
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
