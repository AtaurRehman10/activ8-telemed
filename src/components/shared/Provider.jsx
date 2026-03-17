import { motion } from 'framer-motion'
import {
  imgQuoteDecor,
  imgProviderMask,
  imgProviderPhoto,

  imgCredentials1,
  imgCredentials2,
  imgCredentials3,
} from '../../assets'
import TiltCard from './TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const fromLeft = (delay = 0) => ({
  initial:     { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.7, ease: 'easeOut', delay },
})

const fromRight = (delay = 0) => ({
  initial:     { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.7, ease: 'easeOut', delay },
})

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, ease: 'easeOut', delay },
})

export default function Provider() {
  return (
    <section style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
      {/* Teal background wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="provider-wrapper"
        style={{
          background: '#2a9d8f',
          borderRadius: 50,
          width: '100%',
          boxSizing: 'border-box',
          padding: '80px 0',
        }}
      >
        {/* Inner max-width container */}
        <div
          className="provider-inner"
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Quote row */}
          <div
            className="provider-quote-row"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
              marginBottom: 60,
              flexWrap: 'wrap',
            }}
          >
            {/* Quote decor image */}
            <motion.div
              {...fromLeft(0.1)}
              style={{ flexShrink: 0, width: 'clamp(80px, 13.6vw, 180px)' }}
            >
              <img
                alt=""
                src={imgQuoteDecor}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </motion.div>

            {/* Quote text */}
            <motion.p
              {...fromRight(0.2)}
              style={{
                ...PJS,
                flex: 1,
                minWidth: 240,
                margin: 0,
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.8vw, 35px)',
                lineHeight: 1.6,
                letterSpacing: -1.05,
                color: '#ffffff',
                textAlign: 'right',
              }}
            >
              I don&apos;t prescribe cookie-cutter weight loss plans. Every protocol I build starts with understanding who you are and what your body actually needs.
            </motion.p>
          </div>

          {/* Two-column content row */}
          <div
            className="provider-columns"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 60,
              flexWrap: 'wrap',
            }}
          >
            {/* Left column: photo + credentials */}
            <motion.div
              {...fromLeft(0.15)}
              style={{
                flex: '0 1 45%',
                minWidth: 280,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 24,
              }}
            >
              {/* Photo container with mask and overlay */}
              <TiltCard
                style={{ position: 'relative', width: '100%', maxWidth: 500, cursor: 'pointer', paddingTop: '110%' }}
                cardStyle={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 30,
                  WebkitMaskImage: `url('${imgProviderMask}')`,
                  maskImage: `url('${imgProviderMask}')`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center top',
                  maskPosition: 'center top',
                  WebkitMaskSize: 'cover',
                  maskSize: 'cover',
                }}
                max={10}
                scale={1.04}
                glowColor="255,255,255"
                glowOpacity={0.15}
              >
                <img
                  alt="Ariel Causey NP"
                  src={imgProviderPhoto}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: 30,
                  }}
                />
              </TiltCard>

              {/* Credentials badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                style={{
                  position: 'relative',
                  width: 150,
                  height: 151,
                  flexShrink: 0,
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, bottom: '55.86%', left: 0 }}>
                  <img
                    alt=""
                    src={imgCredentials1}
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                </div>
                <div style={{ position: 'absolute', top: '64.09%', right: '2.38%', bottom: 0, left: '2.85%' }}>
                  <img
                    alt=""
                    src={imgCredentials2}
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                </div>
                <div style={{ position: 'absolute', top: '24.18%', right: '27.56%', bottom: '24.18%', left: '27.56%' }}>
                  <img
                    alt=""
                    src={imgCredentials3}
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right column: label, name, bio */}
            <div
              style={{
                flex: '1 1 40%',
                minWidth: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 16,
              }}
            >
              <motion.p
                {...fadeUp(0.2)}
                style={{
                  ...PJS,
                  margin: 0,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: 1.2,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                YOUR PROVIDER
              </motion.p>

              <motion.p
                {...fadeUp(0.3)}
                style={{
                  ...PJS,
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4.4vw, 55px)',
                  lineHeight: 1.2,
                  letterSpacing: -1.65,
                  color: '#ffffff',
                }}
              >
                Ariel Causey, NP
              </motion.p>

              <motion.p
                {...fadeUp(0.4)}
                style={{
                  ...INT,
                  margin: 0,
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  lineHeight: 1.6,
                  letterSpacing: -0.6,
                  color: '#ffffff',
                }}
              >
                Ariel Causey is a board-certified Nurse Practitioner specializing in metabolic health, GLP-1 therapy, and functional medicine. She&apos;s spent years helping patients who&apos;ve been failed by fad diets and one-size-fits-all programs. At Activ8, she takes the time to understand your unique biology — because a plan that works for someone else might not work for you. When you work with Ariel, you&apos;re not a chart number. You&apos;re a person with a story, and she&apos;s going to listen to every word of it.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .provider-wrapper {
            border-radius: 30px !important;
            padding: 48px 0 !important;
          }

          .provider-inner {
            padding: 0 20px !important;
          }

          .provider-quote-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
            margin-bottom: 36px !important;
          }

          .provider-quote-row p {
            text-align: center !important;
            min-width: unset !important;
          }

          .provider-columns {
            flex-direction: column !important;
            gap: 32px !important;
          }

          .provider-columns > div {
            flex: unset !important;
            min-width: unset !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
