import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  imgHormonesSymptomsBg, imgHormonesCenter,
  imgHormonesIcon1, imgHormonesIcon2, imgHormonesIcon3,
  imgHormonesIcon4, imgHormonesIcon5, imgHormonesIcon6,
} from '../../assets'

const VP = { once: true, amount: 0.15 }
const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const leftSymptoms = [
  { icon: imgHormonesIcon1, text: 'Exhausted no matter how much you sleep',                           delay: 0.1 },
  { icon: imgHormonesIcon2, text: 'Unexplained weight gain especially around the midsection',         delay: 0.2 },
  { icon: imgHormonesIcon3, text: 'Your sex drive has all but disappeared',                           delay: 0.3 },
]

const rightSymptoms = [
  { icon: imgHormonesIcon4, text: 'Brain fog, mood swings, or anxiety that feels completely out of character',                  delay: 0.1 },
  { icon: imgHormonesIcon5, text: 'Sleep is a constant battle falling asleep, staying asleep, or waking up refreshed',         delay: 0.2 },
  { icon: imgHormonesIcon6, text: 'You\u2019ve been told \u201cyour labs are normal\u201d despite feeling terrible',           delay: 0.3 },
]

export default function HormonesSymptoms() {
  const navigate = useNavigate()
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section style={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: 50, background: '#fff' }}>

      {/* BG image layer */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: 0.35,
        transform: 'rotate(180deg)',
        zIndex: 0,
      }}>
        <img
          alt=""
          src={imgHormonesSymptomsBg}
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
              When &ldquo;Normal Labs&rdquo; Don&apos;t Match How You Feel
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
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={VP} transition={{ duration: 0.6, ease: 'easeOut', delay }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, justifyContent: 'flex-end', cursor: 'pointer' }}
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
            style={{ flex: '0 0 44%', alignSelf: 'stretch', position: 'relative', minHeight: 560, marginTop: -40, marginBottom: -40 }}
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
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                cursor: 'pointer',
              }}
            >
              <img
                alt=""
                src={imgHormonesCenter}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', transform: 'scale(1.18)', transformOrigin: 'center' }}
              />
            </motion.div>
          </div>

          {/* Right symptoms */}
          <div className="symptoms-col" style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {rightSymptoms.map(({ icon, text, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={VP} transition={{ duration: 0.6, ease: 'easeOut', delay }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, cursor: 'pointer' }}
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
            style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(18px, 2vw, 28px)', lineHeight: 1.5, color: '#6b7280', margin: 0, maxWidth: 660 }}
          >
            Hormone imbalance affects everything. Let&apos;s find out what&apos;s really going on.
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
            <span className="symptoms-btn-text" style={{ ...INT, fontWeight: 600, fontSize: 16, letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
              START YOUR HORMONE ASSESSMENT →
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
