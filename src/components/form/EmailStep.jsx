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

function InputBox({ value, onChange, onKeyDown, type = 'text', placeholder, hasError }) {
  return (
    <div style={{
      background: '#eee',
      borderRadius: 20,
      height: 'clamp(56px, 7vw, 72px)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
      border: hasError ? '2px solid #e63946' : '2px solid transparent',
      transition: 'border 0.2s ease',
    }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          ...PJS,
          fontWeight: 600,
          fontSize: 'clamp(16px, 2vw, 22px)',
          letterSpacing: -0.5,
          color: '#1f2937',
          minWidth: 0,
        }}
      />
    </div>
  )
}

export default function EmailStep({ onBack, onSubmit }) {
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [btnHovered, setBtnHovered] = useState(false)

  function handleSubmit() {
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Please enter your name.'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = 'Please enter a valid email address.'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setErrors({})
    onSubmit({ name: name.trim(), email: email.trim() })
  }

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
          <motion.h2
            {...fadeUp(0.2)}
            style={{
              ...PJS,
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 55px)',
              lineHeight: 1.2,
              letterSpacing: -1.65,
              color: '#1f2937',
              textAlign: 'center',
              margin: '0 0 clamp(8px, 1.5vw, 16px)',
            }}
          >
            Almost there!
          </motion.h2>

          <motion.p
            {...fadeUp(0.28)}
            style={{
              ...PJS,
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.6vw, 20px)',
              lineHeight: 1.6,
              color: '#6b7280',
              textAlign: 'center',
              margin: '0 0 clamp(20px, 3vw, 36px)',
            }}
          >
            We&rsquo;ll send your personalized plan and consultation details here.
          </motion.p>

          {/* Two fields side by side on wide screens, stacked on mobile */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(12px, 2vw, 20px)',
          }}>

            {/* Name */}
            <motion.div {...fadeIn(0.3)} style={{ flex: '1 1 clamp(220px, 45%, 420px)', minWidth: 0 }}>
              <p style={{ ...PJS, fontWeight: 600, fontSize: 'clamp(13px, 1.2vw, 16px)', color: '#1f2937', margin: '0 0 8px' }}>
                Full Name
              </p>
              <InputBox
                placeholder="Jane Smith"
                value={name}
                onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                hasError={!!errors.name}
              />
              {errors.name && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                  style={{ ...INT, fontSize: 13, color: '#e63946', margin: '8px 0 0' }}>
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div {...fadeIn(0.38)} style={{ flex: '1 1 clamp(220px, 45%, 420px)', minWidth: 0 }}>
              <p style={{ ...PJS, fontWeight: 600, fontSize: 'clamp(13px, 1.2vw, 16px)', color: '#1f2937', margin: '0 0 8px' }}>
                Email Address
              </p>
              <InputBox
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })) }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                hasError={!!errors.email}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                  style={{ ...INT, fontSize: 13, color: '#e63946', margin: '8px 0 0' }}>
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

          </div>
        </motion.div>

        {/* Submit button */}
        <motion.div
          {...fadeUp(0.5)}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
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
          <span style={{ ...INT, fontWeight: 600, fontSize: 'clamp(13px, 1.2vw, 16px)', letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
            SUBMIT →
          </span>
        </motion.div>

        {/* Footer */}
        <p style={{ ...INT, fontSize: 14, color: '#6b7280', textAlign: 'center', marginTop: 'clamp(20px, 3vw, 32px)', paddingTop: 24, marginBottom: 0, position: 'relative', zIndex: 2 }}>
          © 2026 Activ8 Telemedicine, LLC. All rights reserved.
        </p>

      </div>
    </div>
  )
}
