import { motion } from 'framer-motion'
import { imgAppScreen, imgConsult, imgRect51, imgPlan } from '../../assets'
import TiltCard from '../shared/TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }

const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

export default function Process() {
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
            <div className="process-step1-inner" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '65px 8%',
              boxSizing: 'border-box',
              maxHeight: 450,
            }}>
              {/* Left: Headline */}
              <div className="process-step1-left" style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
                <h3 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 40px)', lineHeight: 1.05, letterSpacing: -2, color: '#1f2937', margin: 0, maxWidth: 320 }}>
                  Take the <br /> Assessment
                </h3>
              </div>

              {/* Center: Image */}
              <div className="process-step1-img" style={{ flex: '1 1 45%', position: 'relative', height: 420, zIndex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', alignSelf: 'flex-end', marginBottom: -110 }}>
                <img
                  alt=""
                  src={imgAppScreen}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.3)', transformOrigin: 'bottom center' }}
                />
              </div>

              {/* Right: Description */}
              <div className="process-step1-right" style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                <p className="process-step1-p" style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(18px, 1.8vw, 18px)', lineHeight: 1.3, letterSpacing: -0.6, color: '#6b7280', margin: 0, maxWidth: 360, textAlign: 'right' }}>
                  Answer a few quick questions about your weight history, goals, and what you&apos;ve tried. Takes about 2 minutes.
                </p>
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
                    Meet with Ariel Causey, NP on a private video call. She&apos;ll review your answers, assess your health history, and determine if GLP-1 therapy is right for you.
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
                    src={imgPlan}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>

                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(20px, 2vw, 30px)', lineHeight: 1.2, letterSpacing: -0.9, color: '#1f2937', margin: 0 }}>
                    Start Your Personalized Protocol
                  </h3>
                  <p style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#6b7280', margin: 0 }}>
                    Receive a GLP-1 treatment plan built around your biology. Ongoing monitoring, dose adjustments, and real clinical support from the same provider every time.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .process-step1-inner {
            flex-direction: column !important;
            padding: 28px 24px !important;
            gap: 24px !important;
          }

          .process-step1-left, .process-step1-right {
            flex: unset !important;
            width: 100% !important;
            text-align: left !important;
            justify-content: flex-start !important;
          }

          .process-step1-p {
            text-align: left !important;
            max-width: 100% !important;
          }

          .process-step1-img {
            flex: unset !important;
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  )
}
