import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackButton from './BackButton'
import { imgLogoIcon, imgFormDecorIcon, imgFormQ1SelectedCheck } from '../../assets'

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

export default function AssessmentQuestion({ question, stepNumber, totalSteps, onBack, onContinue }) {
  const { title, subtitle, options, multiSelect } = question
  const [selected, setSelected] = useState(multiSelect ? [] : null)
  const [btnHovered, setBtnHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  function toggle(opt) {
    if (multiSelect) {
      setSelected(prev => prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt])
    } else {
      setSelected(opt)
    }
  }

  const hasSelection = multiSelect ? selected.length > 0 : !!selected

  return (
    <div style={{
      minHeight: '100vh',
      height: isMobile ? 'auto' : '100vh',
      overflow: isMobile ? 'visible' : 'auto',
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
        padding: isMobile ? '24px 20px 40px' : '32px 5%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
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
            padding: isMobile ? '28px 20px' : '40px 5%',
            boxSizing: 'border-box',
          }}
        >
          {totalSteps && (
            <p style={{ ...INT, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, color: '#2a9d8f', textTransform: 'uppercase', textAlign: 'center', margin: '0 0 12px' }}>
              Question {stepNumber} of {totalSteps}
            </p>
          )}

          <motion.h2
            {...fadeUp(0.2)}
            style={{
              ...PJS,
              fontWeight: 700,
              fontSize: isMobile ? 22 : 'clamp(22px, 3vw, 38px)',
              lineHeight: 1.25,
              letterSpacing: -1,
              color: '#1f2937',
              textAlign: 'center',
              margin: subtitle ? '0 0 8px' : (isMobile ? '0 0 24px' : '0 0 32px'),
            }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              {...fadeUp(0.25)}
              style={{ ...PJS, fontWeight: 500, fontSize: isMobile ? 14 : 16, color: '#6b7280', textAlign: 'center', margin: isMobile ? '0 0 24px' : '0 0 32px' }}
            >
              {subtitle}
            </motion.p>
          )}

          {multiSelect && (
            <p style={{ ...INT, fontSize: 13, color: '#6b7280', textAlign: 'center', margin: '0 0 20px' }}>
              Select all that apply
            </p>
          )}

          {/* Options */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 10 : 14 }}>
            {options.map((opt, i) => {
              const isSelected = multiSelect ? selected.includes(opt) : selected === opt
              return (
                <motion.div
                  key={opt}
                  {...fadeUp(0.3 + i * 0.04)}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggle(opt)}
                  style={{
                    flex: '1 1 calc(50% - 7px)',
                    minWidth: isMobile ? '100%' : 220,
                    minHeight: isMobile ? 52 : 60,
                    background: isSelected ? '#2a9d8f' : '#fff',
                    border: isSelected ? 'none' : '1px solid #6b7280',
                    borderRadius: isSelected ? 20 : 16,
                    boxShadow: isSelected ? '8px 20px 40px 0px rgba(42,157,143,0.15)' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: isMobile ? '12px 16px' : '14px 20px',
                    boxSizing: 'border-box',
                    position: 'relative',
                  }}
                >
                  {multiSelect && (
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      border: isSelected ? 'none' : '2px solid #6b7280',
                      background: isSelected ? '#fff' : 'transparent',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {isSelected && <img src={imgFormQ1SelectedCheck} alt="" style={{ width: 16, height: 16 }} />}
                    </div>
                  )}
                  <span style={{
                    ...PJS,
                    fontWeight: 600,
                    fontSize: isMobile ? 14 : 16,
                    lineHeight: 1.4,
                    letterSpacing: -0.3,
                    color: isSelected ? '#fff' : '#374151',
                  }}>
                    {opt}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.5)}
          whileHover={hasSelection ? { scale: 1.06, y: -4 } : {}}
          whileTap={hasSelection ? { scale: 0.97 } : {}}
          onClick={() => hasSelection && onContinue(selected)}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="btn-animated"
          style={{
            height: 52,
            padding: '0 36px',
            background: !hasSelection ? '#a0b4c4' : (btnHovered ? '#0d3a5c' : '#1b4d7a'),
            borderRadius: 50,
            display: isMobile ? 'flex' : 'inline-flex',
            width: isMobile ? '100%' : 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: hasSelection ? 'pointer' : 'not-allowed',
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
        <p style={{ ...INT, fontSize: 14, color: '#6b7280', textAlign: 'center', marginTop: isMobile ? 32 : 'auto', paddingTop: 24, marginBottom: 0, position: 'relative', zIndex: 2 }}>
          © 2026 Activ8 Telemedicine, LLC. All rights reserved.
        </p>

      </div>
    </div>
  )
}
