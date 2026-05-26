import { motion } from 'framer-motion'
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

export default function ThankYou() {
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

        {/* Centered card */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            {...fadeIn(0.1)}
            style={{
              background: '#fff',
              borderRadius: 'clamp(18px, 2.5vw, 30px)',
              boxShadow: '15px 35px 50px 0px rgba(223,240,255,0.5)',
              padding: 'clamp(40px, 6vw, 80px) clamp(32px, 6%, 80px)',
              boxSizing: 'border-box',
              textAlign: 'center',
              maxWidth: 600,
              width: '100%',
            }}
          >
            {/* Checkmark circle */}
            <motion.div
              {...fadeUp(0.2)}
              style={{
                width: 'clamp(64px, 8vw, 96px)',
                height: 'clamp(64px, 8vw, 96px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2a9d8f, #1b4d7a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(20px, 3vw, 32px)',
              }}
            >
              <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <motion.h2
              {...fadeUp(0.3)}
              style={{
                ...PJS,
                fontWeight: 700,
                fontSize: 'clamp(26px, 4vw, 52px)',
                lineHeight: 1.2,
                letterSpacing: -1.65,
                color: '#1f2937',
                margin: '0 0 clamp(12px, 2vw, 20px)',
              }}
            >
              Your form is submitted!
            </motion.h2>

            <motion.p
              {...fadeUp(0.4)}
              style={{
                ...PJS,
                fontWeight: 500,
                fontSize: 'clamp(15px, 1.8vw, 22px)',
                lineHeight: 1.7,
                color: '#6b7280',
                margin: 0,
              }}
            >
              Thank you! Our team will review your information and reach out shortly to schedule your consultation.
            </motion.p>
          </motion.div>
        </div>

        {/* Footer */}
        <p style={{ ...INT, fontSize: 14, color: '#6b7280', textAlign: 'center', marginTop: 'clamp(20px, 3vw, 32px)', paddingTop: 24, marginBottom: 0, position: 'relative', zIndex: 2 }}>
          © 2026 Activ8 Telemedicine, LLC. All rights reserved.
        </p>

      </div>
    </div>
  )
}
