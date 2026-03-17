import { motion } from 'framer-motion'
import { imgAppScreen, imgConsult, imgRect51, imgDigestiveStep3 } from '../../assets'
import TiltCard from '../shared/TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }

const slideUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.65, ease: 'easeOut', delay },
})

export default function DigestiveProcess() {
  return (
    <section style={{ width: '100%', padding: '80px 0 100px', boxSizing: 'border-box' }}>

      {/* ── Heading ── */}
      <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 5%' }}>
        <motion.p
          {...slideUp(0)}
          style={{ ...PJS, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: '#2a9d8f', textTransform: 'uppercase', margin: '0 0 12px' }}
        >
          How It Works
        </motion.p>
        <motion.h2
          {...slideUp(0.1)}
          style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 55px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: 0 }}
        >
          Getting Started is Simple
        </motion.h2>
      </div>

      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '0 5%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}>

        {/* ── Step 1: full-width card ── */}
        <motion.div {...slideUp(0.2)} style={{ width: '100%' }}>
          <TiltCard
            style={{ position: 'relative', width: '100%', height: 'auto' }}
            cardStyle={{ background: '#e7f4eb', borderRadius: 30, minHeight: 380 }}
            max={6} scale={1.02} glowColor="42,157,143" glowOpacity={0.15}
          >
            <div
              className="digestive-step1-inner"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '5%',
                padding: '48px 56px',
                boxSizing: 'border-box',
              }}>
              {/* Text */}
              <div className="digestive-step1-text" style={{ flex: '1 1 40%', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', zIndex: 1 }}>
                <h3 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.2, letterSpacing: -1.2, color: '#1f2937', margin: 0 }}>
                  Take the Assessment
                </h3>
                <p className="digestive-step1-desc" style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 22px)', lineHeight: 1.5, letterSpacing: -0.5, color: '#6b7280', margin: 0, maxWidth: 380, alignSelf: 'flex-end', textAlign: 'right' }}>
                  Describe your symptoms, diet, and what you&apos;ve tried so far. Takes about 2 minutes.
                </p>
              </div>

              {/* Images */}
              <div className="digestive-step1-images" style={{ flex: '0 0 45%', position: 'relative', height: 380, zIndex: 1 }}>
                <img
                  alt=""
                  src={imgAppScreen}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Steps 2 + 3 side by side ── */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>

          {/* Step 2 */}
          <motion.div {...slideUp(0.1)} style={{ flex: '1 1 calc(50% - 12px)', minWidth: 280 }}>
            <TiltCard
              style={{ position: 'relative', width: '100%', height: 'auto' }}
              cardStyle={{ background: '#dff0ff', borderRadius: 30, minHeight: 560 }}
              max={9} scale={1.03} glowColor="27,77,122" glowOpacity={0.14}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 36px 40px', boxSizing: 'border-box', gap: 24, position: 'relative', zIndex: 1 }}>
                {/* Image area */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: 20, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    alt=""
                    src={imgConsult}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                  />
                  <img
                    alt=""
                    src={imgRect51}
                    style={{ position: 'absolute', inset: 0, width: '50%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: 1.2, letterSpacing: -0.9, color: '#1f2937', margin: 0 }}>
                    Book Your Consultation
                  </h3>
                  <p style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#6b7280', margin: 0 }}>
                    Ariel goes deep into your digestive history, diet, and lifestyle. She&apos;ll recommend advanced testing to identify root causes your regular doctor isn&apos;t looking for.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Step 3 */}
          <motion.div {...slideUp(0.2)} style={{ flex: '1 1 calc(50% - 12px)', minWidth: 280 }}>
            <TiltCard
              style={{ position: 'relative', width: '100%', height: 'auto' }}
              cardStyle={{ background: '#eeeeee', borderRadius: 30, minHeight: 560 }}
              max={9} scale={1.03} glowColor="42,157,143" glowOpacity={0.12}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 36px 40px', boxSizing: 'border-box', gap: 24, position: 'relative', zIndex: 1 }}>
                {/* Image area */}
                <div style={{
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: 10,
                  overflow: 'hidden',
                  background: 'rgba(173,173,173,0.38)',
                  flexShrink: 0,
                  position: 'relative',
                }}>
                  <img
                    alt=""
                    src={imgDigestiveStep3}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>

                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: 1.2, letterSpacing: -0.9, color: '#1f2937', margin: 0 }}>
                    Get Your Root-Cause Plan
                  </h3>
                  <p style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#6b7280', margin: 0 }}>
                    Receive a personalized gut-healing protocol based on your test results — targeted supplementation, dietary strategies, and ongoing monitoring.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .digestive-step1-inner {
            flex-direction: column !important;
            padding: 32px 24px !important;
            gap: 24px !important;
          }
          .digestive-step1-text {
            flex: unset !important;
            width: 100% !important;
          }
          .digestive-step1-desc {
            align-self: flex-start !important;
            text-align: left !important;
            max-width: 100% !important;
          }
          .digestive-step1-images {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
