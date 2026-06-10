import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { imgFaqArrow } from '../../assets'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const faqs = [
  {
    q: 'What kind of testing do you use?',
    a: 'We use advanced functional medicine diagnostics including comprehensive stool analysis, SIBO breath testing, food sensitivity panels, and microbiome mapping. This goes far beyond the standard GI workup to identify the actual root cause of your symptoms — not just manage them.',
  },
  {
    q: 'Can gut problems cause symptoms outside the gut?',
    a: 'Absolutely. About 70% of the immune system lives in the gut, and the gut-brain axis connects your digestive system directly to your brain and nervous system. Gut dysfunction commonly triggers anxiety, brain fog, skin flare-ups, chronic fatigue, and joint pain — all without obvious digestive symptoms.',
  },
  {
    q: 'What treatments do you use?',
    a: 'Treatment is fully personalized to your test results and symptom picture. Depending on your diagnosis, your protocol may include targeted antimicrobial therapy, prescription medications, therapeutic-grade supplements, an elimination or low-FODMAP diet, and gut-healing nutritional support.',
  },
  {
    q: 'How long does it take to heal the gut?',
    a: 'Most patients notice meaningful improvement within 4–8 weeks. Full gut healing typically takes 3–6 months depending on the severity and duration of the imbalance. We track your progress with follow-up testing so your protocol is always adjusted to where you actually are.',
  },
  {
    q: 'Will I have to stop eating everything I love?',
    a: 'Not permanently, and not blindly. Rather than applying blanket restrictions, we use testing to identify your specific triggers. Many patients find they can reintroduce foods they thought were off-limits once the underlying gut imbalance is addressed and the gut lining has had a chance to heal.',
  },
]

export default function DigestiveFAQ() {
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
            Gut Health
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form?type=digestive')}
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
            onClick={() => navigate('/form?type=digestive')}
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
              textAlign: 'center',
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
