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
  {
    value: 'semaglutide',
    lines: ['Semaglutide', '(Ozempic / Wegovy)'],
    tall: true,
  },
  {
    value: 'tirzepatide',
    lines: ['Tirzepatide', '(Mounjaro / Zepbound)'],
    tall: true,
  },
  {
    value: 'other',
    lines: ['Other'],
    tall: false,
  },
  {
    value: 'not-sure',
    lines: ['Not sure'],
    tall: false,
  },
]

export default function Question5({ onBack, onContinue }) {
  const [selected, setSelected] = useState('tirzepatide')
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
          {/* Question title */}
          <motion.h2
            {...fadeUp(0.2)}
            style={{
              ...PJS,
              fontWeight: 700,
              fontSize: isMobile ? 22 : 'clamp(24px, 3.5vw, 55px)',
              lineHeight: 1.2,
              letterSpacing: -1.65,
              color: '#1f2937',
              textAlign: 'center',
              margin: isMobile ? '0 0 24px' : '0 0 36px',
            }}
          >
            Which medication did you try?
          </motion.h2>

          {/* Options grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? 12 : 16,
          }}>
            {OPTIONS.map((opt, i) => {
              const isSelected = selected === opt.value
              return (
                <motion.div
                  key={opt.value}
                  {...fadeUp(0.3 + i * 0.07)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(opt.value)}
                  style={{
                    flex: '1 1 200px',
                    minHeight: isMobile ? (opt.tall ? 100 : 60) : (opt.tall ? 140 : 80),
                    background: isSelected ? '#2a9d8f' : '#fff',
                    border: isSelected ? 'none' : '1px solid #6b7280',
                    borderRadius: isSelected ? 30 : 20,
                    boxShadow: isSelected ? '10px 25px 50px 0px rgba(42,157,143,0.15)' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: isMobile ? '14px 16px' : '20px 24px',
                    boxSizing: 'border-box',
                  }}
                >
                  {opt.lines.map((line, li) => (
                    <p
                      key={li}
                      style={{
                        ...PJS,
                        fontWeight: 700,
                        fontSize: isMobile ? 15 : 'clamp(16px, 2vw, 30px)',
                        lineHeight: 1.4,
                        letterSpacing: -0.9,
                        color: isSelected ? '#fff' : '#6b7280',
                        margin: 0,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.55)}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onContinue({ medication: selected })}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="btn-animated"
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
            transition: 'background 0.2s ease, box-shadow 0.2s ease',
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
