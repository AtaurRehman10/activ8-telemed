import { useState } from 'react'
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

export default function Question3({ onBack, onContinue }) {
  const [currentWeight, setCurrentWeight] = useState('')
  const [goalWeight,    setGoalWeight]    = useState('')
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5faff',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative bg icon */}
      <div style={{
        position: 'absolute',
        right: -100,
        bottom: -50,
        width: '55vw',
        maxWidth: 700,
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <img src={imgFormDecorIcon} alt="" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 960,
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(20px, 4vw, 40px) clamp(16px, 5%, 48px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>

        {/* Logo */}
        <motion.div {...fadeIn(0)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 41px)', letterSpacing: -1.2, color: '#1b4d7a' }}>Activ</span>
            <img src={imgLogoIcon} alt="" style={{ width: 36, height: 21, objectFit: 'contain', transform: 'rotate(180deg) scaleY(-1)' }} />
          </div>
          <div style={{ ...PJS, fontWeight: 600, fontSize: 9, letterSpacing: 4, color: '#6b7280', textTransform: 'uppercase', marginBottom: 'clamp(20px, 3vw, 36px)' }}>
            Telemedicine, LLC
          </div>
        </motion.div>

        {/* Back button */}
        <BackButton onClick={onBack} />

        {/* Two cards side by side — wrap on small screens */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(12px, 2vw, 24px)',
        }}>

          {/* Left card — current weight */}
          <motion.div
            {...fadeIn(0.1)}
            style={{
              flex: '1 1 clamp(240px, 45%, 440px)',
              minWidth: 0,
              background: '#fff',
              borderRadius: 'clamp(18px, 2.5vw, 30px)',
              boxShadow: '15px 35px 50px 0px rgba(223,240,255,0.5)',
              padding: 'clamp(24px, 4vw, 52px) clamp(20px, 4vw, 44px)',
              boxSizing: 'border-box',
            }}
          >
            <motion.h2
              {...fadeUp(0.2)}
              style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(20px, 3vw, 45px)', lineHeight: 1.2, letterSpacing: -1.35, color: '#1f2937', textAlign: 'center', margin: '0 0 clamp(16px, 2.5vw, 28px)' }}
            >
              What&rsquo;s your current weight?
            </motion.h2>

            <motion.div {...fadeIn(0.3)} style={{ background: '#eee', borderRadius: 20, height: 'clamp(56px, 7vw, 72px)', display: 'flex', alignItems: 'center', padding: '0 20px', boxSizing: 'border-box' }}>
              <input
                type="number"
                placeholder="00.0"
                value={currentWeight}
                onChange={e => setCurrentWeight(e.target.value)}
                className="form-weight-input"
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', ...PJS, fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: -0.66, color: '#6b7280', minWidth: 0 }}
              />
              <span style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: -0.66, color: '#a3a3a3', flexShrink: 0 }}>lbs</span>
            </motion.div>
          </motion.div>

          {/* Right card — goal weight */}
          <motion.div
            {...fadeIn(0.15)}
            style={{
              flex: '1 1 clamp(240px, 45%, 440px)',
              minWidth: 0,
              background: '#fff',
              borderRadius: 'clamp(18px, 2.5vw, 30px)',
              boxShadow: '15px 35px 50px 0px rgba(223,240,255,0.5)',
              padding: 'clamp(24px, 4vw, 52px) clamp(20px, 4vw, 44px)',
              boxSizing: 'border-box',
            }}
          >
            <motion.h2
              {...fadeUp(0.25)}
              style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(20px, 3vw, 45px)', lineHeight: 1.2, letterSpacing: -1.35, color: '#1f2937', textAlign: 'center', margin: '0 0 clamp(16px, 2.5vw, 28px)' }}
            >
              What&rsquo;s your goal weight?
            </motion.h2>

            <motion.div {...fadeIn(0.3)} style={{ background: '#eee', borderRadius: 20, height: 'clamp(56px, 7vw, 72px)', display: 'flex', alignItems: 'center', padding: '0 20px', boxSizing: 'border-box' }}>
              <input
                type="number"
                placeholder="00.0"
                value={goalWeight}
                onChange={e => setGoalWeight(e.target.value)}
                className="form-weight-input"
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', ...PJS, fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: -0.66, color: '#6b7280', minWidth: 0 }}
              />
              <span style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: -0.66, color: '#a3a3a3', flexShrink: 0 }}>lbs</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.45)}
          whileTap={{ scale: 0.97 }}
          onClick={() => onContinue({ currentWeight: currentWeight || '00.0', goalWeight: goalWeight || '00.0' })}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            height: 'clamp(44px, 5vw, 56px)',
            padding: '0 clamp(24px, 3vw, 40px)',
            background: btnHovered ? '#0d3a5c' : '#1b4d7a',
            borderRadius: 50,
            display: 'inline-flex',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.15s ease, transform 0.15s ease',
            transform: btnHovered ? 'scale(1.05)' : 'scale(1)',
            marginTop: 'clamp(16px, 2.5vw, 28px)',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ ...INT, fontWeight: 600, fontSize: 'clamp(13px, 1.2vw, 16px)', letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
            CONTINUE →
          </span>
        </motion.div>

        {/* Footer */}
        <p style={{
          ...INT,
          fontSize: 14,
          color: '#6b7280',
          textAlign: 'center',
          marginTop: 'clamp(20px, 3vw, 32px)',
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
