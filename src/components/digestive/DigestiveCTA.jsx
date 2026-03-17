import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { imgDigestiveCtaBg} from '../../assets'
import TiltCard from '../shared/TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

export default function DigestiveCTA() {
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
            overflow: 'hidden',
            minHeight: 480,
            display: 'flex',
            alignItems: 'center',
            background: '#dad7d2',
          }}
          max={8}
          scale={1.03}
          glowColor="255,255,255"
          glowOpacity={0.12}
        >
          {/* Background image */}

        <img
          alt=""
          className="cta-bg-img"
          src={imgDigestiveCtaBg}
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

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #dad7d2 38%, rgba(218,215,210,0) 58%)',
        }} />

        {/* Mobile fallback overlay (darker) */}
        <div
          className="digestive-cta-mobile-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(180,177,172,0.80)',
            display: 'none',
          }}
        />

        {/* Content */}
        <div
          className="cta-content"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '80px 6%',
            boxSizing: 'border-box',
            maxWidth: '55%',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            style={{ ...PJS, fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 55px)', lineHeight: 1.2, letterSpacing: -1.65, color: '#1f2937', margin: 0 }}
          >
            Stop Suffering Through Every Meal. Start Healing.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            style={{ ...PJS, fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 20px)', lineHeight: 1.6, letterSpacing: -0.5, color: '#6b7280', margin: 0 }}
          >
            Take a 2-minute gut health assessment and book your consultation with Ariel. Let&apos;s find the root cause — not just another band-aid.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/form')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="cta-btn"
            style={{
              alignSelf: 'flex-start',
              padding: '0 40px',
              height: 60,
              background: btnHovered ? '#1f7a6f' : '#2a9d8f',
              borderRadius: 50,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(42, 157, 143, 0.2)',
            }}
          >
            <span style={{ ...INT, fontWeight: 600, fontSize: 16, lineHeight: 1.2, letterSpacing: -0.32, color: '#fff', whiteSpace: 'nowrap' }}>
              START YOUR GUT HEALTH ASSESSMENT →
            </span>
          </motion.div>
        </div>
        </TiltCard>
      </motion.div>

      <style>{`
        /* Tablet */
        @media (max-width: 991px) {
          .cta-content {
            max-width: 70% !important;
            padding: 60px 5% !important;
          }
        }

        @media (max-width: 768px) {
          .cta-content {
            max-width: 85% !important;
            padding: 48px 6% !important;
            gap: 20px !important;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          section:has(.cta-content) {
            padding: 0 4% 50px !important;
          }
          .cta-content {
            max-width: 100% !important;
            padding: 50px 20px !important;
            gap: 20px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .cta-content h2 {
            font-size: 28px !important;
            letter-spacing: -1px !important;
          }
          .cta-content p {
            font-size: 16px !important;
            line-height: 1.5 !important;
          }
          .cta-btn {
            align-self: center !important;
            width: 100% !important;
            max-width: 320px;
            padding: 16px 20px !important;
            height: auto !important;
            min-height: 56px !important;
          }
          .cta-btn span {
            font-size: 13px !important;
            letter-spacing: 0.5px !important;
            white-space: normal !important;
            text-align: center !important;
            line-height: 1.3 !important;
          }
          .cta-bg-img {
            width: 100% !important;
            opacity: 0.5 !important;
          }
          .digestive-cta-mobile-overlay { 
            display: block !important; 
            background: rgba(218, 215, 210, 0.92) !important;
          }
        }
      `}</style>
    </section>
  )
}
