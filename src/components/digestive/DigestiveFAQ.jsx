import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { imgFaqArrow } from '../../assets'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const questions = [
  'What kind of testing do you use?',
  'Can gut problems cause symptoms outside the gut?',
  'What treatments do you use?',
  'How long does it take to heal the gut?',
  'Will I have to stop eating everything I love?',
]

export default function DigestiveFAQ() {
  const navigate = useNavigate()
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section style={{ width: '100%', padding: '80px 0 100px', boxSizing: 'border-box' }}>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 5%',
          boxSizing: 'border-box',
          display: 'flex',
          gap: '8%',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>

        {/* ── Left column ── */}
        <div style={{ flex: '0 0 auto', minWidth: 240, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ ...PJS, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: '#2a9d8f', textTransform: 'uppercase', margin: 0, whiteSpace: 'nowrap' }}
          >
            Your Questions Answered
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 55px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: 0 }}
          >
            Gut Health
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="dfaq-btn-desktop"
            style={{
              alignSelf: 'flex-start',
              padding: '0 28px',
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
            <span style={{ ...INT, fontWeight: 600, fontSize: 16, lineHeight: 1.2, letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
              START YOUR GUT HEALTH ASSESSMENT →
            </span>
          </motion.div>
        </div>

        {/* ── Right column: FAQ rows ── */}
        <div style={{ flex: '1 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '22px 0',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <span style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#6b7280' }}>
                {q}
              </span>
              <img
                alt=""
                src={imgFaqArrow}
                style={{ width: 9, height: 15, objectFit: 'contain', flexShrink: 0, transform: 'rotate(90deg)' }}
              />
            </motion.div>
          ))}

          {/* Mobile-only button — shown below questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="dfaq-btn-mobile"
            style={{
              display: 'none',
              marginTop: 36,
              padding: '16px 24px',
              minHeight: 56,
              background: btnHovered ? '#0d3a5c' : '#1b4d7a',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              width: '100%',
              maxWidth: 320,
              alignSelf: 'center',
              boxSizing: 'border-box',
              textAlign: 'center'
            }}
          >
            <span style={{ ...INT, fontWeight: 700, fontSize: 13, lineHeight: 1.3, letterSpacing: 0.5, color: '#fff', textTransform: 'uppercase' }}>
              START YOUR GUT HEALTH ASSESSMENT →
            </span>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .dfaq-btn-desktop { display: none !important; }
          .dfaq-btn-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
