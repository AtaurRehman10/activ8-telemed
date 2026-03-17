import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { imgCtaBg} from '../../assets'
import TiltCard from '../shared/TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

export default function CTA() {
  const navigate = useNavigate()
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section style={{ width: '100%', padding: '0 5% 80px', boxSizing: 'border-box' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ maxWidth: 1240, margin: '0 auto' }}
      >
      <TiltCard
        style={{ position: 'relative', width: '100%' }}
        cardStyle={{
          borderRadius: 30,
          minHeight: 380,
          display: 'flex',
          alignItems: 'stretch',
          background: '#016ac5',
        }}
        max={8}
        scale={1.03}
        glowColor="255,255,255"
        glowOpacity={0.12}
      >
        {/* Couple photo — right side */}
        <img
          alt=""
          className="cta-couple"
          src={imgCtaBg}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '65%',
            objectFit: 'cover',
            objectPosition: 'center top',
            pointerEvents: 'none',
          }}
        />

        {/* Gradient fade: blue left → transparent → blue right */}
        <div className="cta-gradient" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #016ac5 35%, rgba(1,106,197,0) 65%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Content */}
        <div className="cta-content" style={{
          position: 'relative',
          zIndex: 2,
          padding: '60px 6%',
          boxSizing: 'border-box',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          justifyContent: 'center',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(22px, 3.5vw, 43px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#fff', margin: 0 }}
          >
            Done Guessing?<br /> &nbsp;Let&apos;s Build You a Real Plan.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#fff', margin: 0 }}
          >
            Take a 2-minute assessment and book your consultation with Ariel. No pressure, no gimmicks — just a real conversation about what&apos;s possible for your body.
          </motion.p>

          <img
            src={imgCtaBg}
            alt="Real Plan"
            className="cta-couple-mobile"
            style={{
              display: 'none',
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              objectFit: 'cover',
              marginTop: '5px'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="btn-animated"
            style={{
              alignSelf: 'flex-start',
              padding: '0 32px',
              height: 56,
              background: btnHovered ? '#1f7a6f' : '#2a9d8f',
              borderRadius: 50,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <span style={{ ...INT, fontWeight: 600, fontSize: 15, lineHeight: 1.2, letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
              START YOUR ASSESSMENT →
            </span>
          </motion.div>
        </div>
      </TiltCard>
      </motion.div>

      <style>{`
        /* Tablet */
        @media (max-width: 768px) {
          .cta-content {
            width: 60% !important;
            padding: 48px 5% !important;
            gap: 20px !important;
          }
          .cta-couple {
            width: 55% !important;
          }
          .cta-gradient {
            background: linear-gradient(to right, #016ac5 42%, rgba(1,106,197,0) 70%) !important;
          }
        }
        /* Mobile */
        @media (max-width: 560px) {
          section:has(.cta-content) {
            padding: 0 4% 56px !important;
          }
          .cta-content {
            width: 100% !important;
            padding: 40px 7% !important;
            gap: 20px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .cta-content h2, .cta-content p {
            text-align: center !important;
          }
          .btn-animated {
            align-self: center !important;
          }
          .cta-couple {
            display: none !important;
          }
          .cta-couple-mobile {
            display: block !important;
          }
          .cta-gradient {
            background: #016ac5 !important;
          }
        }
      `}</style>
    </section>
  )
}
