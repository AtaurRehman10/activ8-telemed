import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import BackButton from './BackButton'
import {
  imgLogoIcon,
  imgFormDecorIcon,
  imgFormQ1SelectedCheck,
  imgFormQ1MaleSymbol,
  imgFormQ1FemaleSymbol,
  imgFormQ1NbMask,
  imgFormQ1NbSymbol,
  imgFormQ1NoSymbol,
} from '../../assets'

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

const CARDS = [
  { label: 'Male', value: 0, icon: imgFormQ1MaleSymbol },
  { label: 'Female', value: 1, icon: imgFormQ1FemaleSymbol },
  { label: 'Non-binary', value: 2, icon: imgFormQ1NbSymbol },
  { label: 'Prefer not to say', value: 3, icon: imgFormQ1NoSymbol },
]

function useTilt(max = 0) {
  const ref = useRef(null)
  const glowRef = useRef(null)
  const raf = useRef(null)
  const onMouseMove = useCallback((e) => {
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      const glow = glowRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left, y = e.clientY - r.top
      const nx = (x - r.width / 2) / (r.width / 2)
      const ny = (y - r.height / 2) / (r.height / 2)
      el.style.transform = `perspective(600px) rotateX(${(-ny * max).toFixed(2)}deg) rotateY(${(nx * max).toFixed(2)}deg) scale3d(1,1,1)`
      el.style.transition = 'transform 0.07s ease'
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${((x / r.width) * 100).toFixed(1)}% ${((y / r.height) * 100).toFixed(1)}%, rgba(42,157,143,0.22) 0%, transparent 65%)`
        glow.style.opacity = '1'
      }
    })
  }, [max])
  const onMouseLeave = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current)
    const el = ref.current
    const glow = glowRef.current
    if (el) { el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'; el.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' }
    if (glow) { glow.style.opacity = '0'; glow.style.transition = 'opacity 0.4s ease' }
  }, [])
  return { ref, glowRef, onMouseMove, onMouseLeave }
}

export default function Question1({ onBack, onContinue }) {
  const [selected, setSelected] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)
  const tilts = [useTilt(), useTilt(), useTilt(), useTilt()]

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
            <span style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.5vw, 41px)',
              letterSpacing: -1.2,
              color: '#1b4d7a',
            }}>Activ</span>
            <img src={imgLogoIcon} alt="" style={{ width: 36, height: 21, objectFit: 'contain', transform: 'rotate(180deg) scaleY(-1)' }} />
          </div>
          <div style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontWeight: 600,
            fontSize: 9,
            letterSpacing: 4,
            color: '#6b7280',
            textTransform: 'uppercase',
            marginBottom: 'clamp(20px, 3vw, 36px)',
          }}>
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
            borderRadius: 'clamp(18px, 2.5vw, 30px)',
            boxShadow: '15px 35px 50px 0px rgba(223,240,255,0.5)',
            padding: 'clamp(24px, 4vw, 52px) clamp(20px, 5%, 48px)',
            boxSizing: 'border-box',
          }}
        >
          {/* Question title */}
          <motion.h2
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 55px)',
              lineHeight: 1.2,
              letterSpacing: -1.65,
              color: '#1f2937',
              textAlign: 'center',
              margin: '0 0 clamp(20px, 3vw, 32px)',
            }}
          >
            How do you identify?
          </motion.h2>

          {/* Option cards row */}
          <div style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 'clamp(8px, 1.5vw, 20px)',
            justifyContent: 'center',
          }}>
            {CARDS.map((card, i) => {
              const isSelected = selected === i
              const { ref, glowRef, onMouseMove, onMouseLeave } = tilts[i]
              return (
                <motion.div
                  key={card.label}
                  {...fadeUp(0.3 + i * 0.08)}
                  ref={ref}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(i)}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  style={{
                    width: 'clamp(140px, 22.5%, 210px)',
                    flex: '1 1 clamp(140px, 22.5%, 210px)',
                    background: '#fff',
                    borderRadius: 'clamp(16px, 2vw, 24px)',
                    border: isSelected ? '3px solid #2a9d8f' : '1px solid #6b7280',
                    boxShadow: isSelected
                      ? '10px 25px 50px 0px rgba(42,157,143,0.25), 0 0 0 3px rgba(42,157,143,0.08)'
                      : '0 4px 24px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    overflow: 'hidden',
                    transition: 'border 0.15s ease, box-shadow 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(12px, 2vw, 20px)',
                    padding: 'clamp(24px, 3.5vw, 42px) clamp(12px, 2vw, 24px)',
                    position: 'relative',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Spotlight glow overlay */}
                  <div ref={glowRef} style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', opacity: 0, zIndex: 10 }} />

                  <img
                    src={card.icon}
                    alt=""
                    style={{
                      width: 'clamp(24px, 5.5vw, 52px)',
                      height: 'clamp(24px, 5.5vw, 52px)',
                      objectFit: 'contain',
                      pointerEvents: 'none',
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  />

                  {/* Label inside card */}
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 1.3vw, 18px)',
                    letterSpacing: -0.4,
                    color: isSelected ? '#2a9d8f' : '#6b7280',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    transition: 'color 0.15s ease',
                    zIndex: 1,
                  }}>
                    {card.label}
                  </span>

                  {/* Selected checkmark — top-right */}
                  {isSelected && (
                    <img
                      src={imgFormQ1SelectedCheck}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 'clamp(18px, 2vw, 28px)',
                        height: 'clamp(18px, 2vw, 28px)',
                        pointerEvents: 'none',
                        zIndex: 11,
                      }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          {...fadeUp(0.65)}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onContinue({ gender: CARDS[selected].label })}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="btn-animated"
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
            transition: 'background 0.2s ease, box-shadow 0.2s ease',
            marginTop: 'clamp(16px, 2.5vw, 28px)',
            boxSizing: 'border-box',
          }}
        >
          <span style={{
            fontFamily: "'Inter',sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            letterSpacing: -0.32,
            color: '#fff',
            whiteSpace: 'nowrap',
          }}>
            CONTINUE →
          </span>
        </motion.div>

        {/* Footer */}
        <p style={{
          fontFamily: "'Inter',sans-serif",
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
