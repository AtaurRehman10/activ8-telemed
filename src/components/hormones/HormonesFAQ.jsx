import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { imgFaqArrow } from '../../assets'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const faqs = [
  {
    q: 'What hormones do you test?',
    a: 'We run a comprehensive panel covering testosterone, estrogen, progesterone, DHEA, cortisol, thyroid hormones (TSH, free T3, free T4), and IGF-1. This gives your provider a full picture — not just the single marker most standard labs check.',
  },
  {
    q: 'What are bio-identical hormones?',
    a: 'Bio-identical hormones share the exact molecular structure as the hormones your body produces naturally. Because they fit your receptors precisely, they can be dosed more accurately and tend to cause fewer side effects than traditional synthetic hormones.',
  },
  {
    q: 'Is this for men and women?',
    a: 'Yes — hormone imbalances affect everyone. We treat men and women dealing with fatigue, low libido, unexplained weight gain, brain fog, sleep disruption, and mood changes, all of which are commonly driven by hormonal dysfunction.',
  },
  {
    q: 'How quickly will I feel a difference?',
    a: 'Most patients notice improvements in energy, mood, and sleep within 2–4 weeks of starting treatment. Changes in body composition and libido typically develop over 2–3 months as levels stabilize and your protocol is fine-tuned.',
  },
  {
    q: 'How much does ongoing treatment cost?',
    a: 'Most patients invest $150–$350/month depending on their protocol. We operate on a transparent cash-pay model with no hidden fees — your provider will walk you through exact costs before you start anything.',
  },
]

export default function HormonesFAQ() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(null)
  const [btnHovered, setBtnHovered] = useState(false)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section style={{ width: '100%', padding: '80px 0 100px', boxSizing: 'border-box' }}>
      <div style={{
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
            Hormone Optimization
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form?type=hormones')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="hfaq-btn-desktop"
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
              START YOUR HORMONE ASSESSMENT →
            </span>
          </motion.div>
        </div>

        {/* ── Right column: accordion ── */}
        <div style={{ flex: '1 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                style={{ borderBottom: '1px solid #e5e7eb' }}
              >
                <div
                  onClick={() => toggle(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '22px 0',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.6, letterSpacing: -0.5, color: isOpen ? '#1f2937' : '#6b7280', transition: 'color 0.2s' }}>
                    {item.q}
                  </span>
                  <motion.img
                    alt=""
                    src={imgFaqArrow}
                    animate={{ rotate: isOpen ? 270 : 90 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ width: 9, height: 15, objectFit: 'contain', flexShrink: 0 }}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ ...PJS, fontWeight: 400, fontSize: 'clamp(14px, 1.3vw, 18px)', lineHeight: 1.7, color: '#6b7280', margin: '0 0 20px', paddingRight: 32 }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}

          {/* Mobile-only button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form?type=hormones')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="hfaq-btn-mobile"
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
              textAlign: 'center',
            }}
          >
            <span style={{ ...INT, fontWeight: 700, fontSize: 13, lineHeight: 1.3, letterSpacing: 0.5, color: '#fff', textTransform: 'uppercase' }}>
              START YOUR HORMONE ASSESSMENT →
            </span>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hfaq-btn-desktop { display: none !important; }
          .hfaq-btn-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
