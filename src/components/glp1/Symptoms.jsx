import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  imgSymptomsBg, imgSymptomsCenter,
  imgSymptomIcon1, imgSymptomIcon2, imgSymptomIcon3,
  imgSymptomIcon4, imgSymptomVector, imgSymptomIcon5,
} from '../../assets'

const VP = { once: true, amount: 0.15 }
const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const leftSymptoms = [
  { icon: imgSymptomIcon1, text: "You've tried every diet, every app, every program and nothing sticks long-term", delay: 0.1 },
  { icon: imgSymptomIcon2, text: "Your metabolism feels like it's working against you no matter what you eat",     delay: 0.2 },
  { icon: imgSymptomIcon3, text: "Cravings control your day, and willpower alone isn't cutting it",               delay: 0.3 },
]

const rightSymptoms = [
  { icon: imgSymptomIcon4,  text: 'Your doctor has mentioned prediabetes, insulin resistance, or metabolic syndrome',    delay: 0.1 },
  { icon: imgSymptomVector, text: "You've heard about Ozempic or Mounjaro but don't know where to start or who to trust", delay: 0.2 },
  { icon: imgSymptomIcon5,  text: "You're tired of being judged — you want a provider who understands the science",       delay: 0.3 },
]

export default function Symptoms() {
  const navigate = useNavigate()
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section style={{ width: '100%', position: 'relative', background: '#fff' }}>

      {/* BG image layer */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: 0.35,
        transform: 'rotate(180deg)',
        zIndex: 0,
      }}>
        <img
          alt=""
          src={imgSymptomsBg}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Color blend overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#1b4d7a',
        mixBlendMode: 'color',
        zIndex: 1,
      }} />

      {/* Fade-out top */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 15%)',
        zIndex: 2,
      }} />

      {/* Content wrapper */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: 1240,
        margin: '0 auto',
        padding: '80px 5% 100px',
        boxSizing: 'border-box',
      }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.p
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ ...PJS, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: '#2a9d8f', margin: '0 0 12px' }}
          >
            SOUND FAMILIAR?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 55px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: 0 }}>
              {"You've Tried Everything."}<br />But the Weight Keeps Coming Back
            </h2>
          </motion.div>
        </div>

        {/* Three-column layout */}
        <div className="symptoms-columns" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4%',
        }}>

          {/* Left symptoms */}
          <div className="symptoms-col" style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {leftSymptoms.map(({ icon, text, delay }, i) => (
              <motion.div
                key={i}
                className="symptom-item-left"
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP} 
                transition={{ duration: 0.6, ease: 'easeOut', delay }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 16, 
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                }}
              >
                <p style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.5, color: '#6b7280', margin: 0, textAlign: 'right' }}>
                  {text}
                </p>
                <img src={icon} alt="" style={{ width: 52, height: 52, objectFit: 'contain', flexShrink: 0 }} />
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <div
            className="symptoms-center-img"
            style={{ flex: '0 0 28%', alignSelf: 'stretch', position: 'relative', minHeight: 480 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VP} transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { type: 'spring', stiffness: 400, damping: 17 }
              }}
              style={{
                position: 'absolute', inset: 0,
                overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 92%)',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 92%)',
                cursor: 'pointer',
              }}
            >
              <img
                alt=""
                src={imgSymptomsCenter}
                style={{ width: '100%', height: '130%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </motion.div>
          </div>

          {/* Right symptoms */}
          <div className="symptoms-col" style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {rightSymptoms.map(({ icon, text, delay }, i) => (
              <motion.div
                key={i}
                className="symptom-item-right"
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP} 
                transition={{ duration: 0.6, ease: 'easeOut', delay }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 16,
                  cursor: 'pointer',
                }}
              >
                <img src={icon} alt="" style={{ width: 52, height: 52, objectFit: 'contain', flexShrink: 0 }} />
                <p style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.5, color: '#6b7280', margin: 0 }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <motion.p
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(18px, 2vw, 28px)', lineHeight: 1.5, color: '#6b7280', margin: 0, maxWidth: 640 }}
          >
            {'If any of this sounds like you, '}
            <span style={{ fontWeight: 800, color: '#2a9d8f' }}>GLP-1 therapy </span>
            {'might be the missing piece.'}
          </motion.p>

          <motion.div
            className="symptoms-btn"
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              padding: '0 32px',
              height: 60,
              background: btnHovered ? '#0d3a5c' : '#1b4d7a',
              borderRadius: 50,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.08s ease',
            }}
          >
            <span className="symptoms-btn-text" style={{ ...INT, fontWeight: 600, fontSize: 16, letterSpacing: -0.32, color: '#fff' }}>
              START YOUR ASSESSMENT →
            </span>
          </motion.div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .symptoms-center-img { display: none !important; }

          .symptoms-columns {
            flex-direction: column !important;
            gap: 16px !important;
          }

          .symptoms-col {
            flex: unset !important;
            width: 100% !important;
            gap: 24px !important;
          }

          .symptom-item-left {
            flex-direction: row-reverse !important;
            justify-content: flex-end !important;
          }

          .symptom-item-left p {
            text-align: left !important;
          }

          .symptoms-btn {
            width: 100% !important;
            height: 46px !important;
            padding: 0 20px !important;
          }

          .symptoms-btn-text {
            font-size: 12px !important;
            letter-spacing: -0.2px !important;
          }
        }
      `}</style>
    </section>
  )
}
