import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { imgFooterIcon, imgSocialIcons } from '../../assets'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  )
  useEffect(() => {
    function handle() {
      setIsMobile(window.innerWidth < breakpoint)
    }
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [breakpoint])
  return isMobile
}

export default function Footer() {
  const isMobile = useIsMobile(640)

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        width: '100%',
        background: '#0b1e30',
        borderRadius: '50px 50px 0 0',
        boxSizing: 'border-box',
        padding: isMobile ? '48px 24px 32px' : '56px 64px 32px',
      }}
    >
      {/* Max-width container */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 32 : 48,
        }}
      >
        {/* Top row: logo left, tagline + social right */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            justifyContent: 'space-between',
            gap: isMobile ? 32 : 60,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Left: logo block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: 4,
            }}
          >
            {/* "Activ" + icon on the same baseline row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <p
                style={{
                  ...PJS,
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  lineHeight: 1.2,
                  letterSpacing: -1.5,
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                Activ
              </p>
              <img
                alt=""
                src={imgFooterIcon}
                style={{
                  width: 'clamp(40px, 3.6vw, 58px)',
                  height: 'auto',
                  transform: 'rotate(180deg) scaleY(-1)',
                  display: 'block',
                }}
              />
            </div>

            {/* Subtitle */}
            <p
              style={{
                ...PJS,
                fontWeight: 600,
                fontSize: 'clamp(8px, 0.85vw, 12px)',
                lineHeight: 1.2,
                letterSpacing: 5.5,
                color: '#ffffff',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                margin: 0,
              }}
            >
              Telemedicine, LLC
            </p>
          </div>

          {/* Right: tagline + social */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: 18,
              maxWidth: isMobile ? '100%' : 460,
              flex: '0 1 auto',
            }}
          >
            <p
              style={{
                ...INT,
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.15vw, 16px)',
                lineHeight: 1.65,
                letterSpacing: -0.3,
                color: '#ffffff',
                margin: 0,
              }}
            >
              Personalized telehealth for people who want more than
              &quot;normal.&quot; Proudly serving all of California.
            </p>

            <img
              alt=""
              src={imgSocialIcons}
              style={{
                width: 'clamp(120px, 10vw, 150px)',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 20,
          }}
        >
          <p
            style={{
              ...INT,
              fontWeight: 400,
              fontSize: 'clamp(12px, 1vw, 15px)',
              lineHeight: 1.8,
              letterSpacing: -0.3,
              color: '#ffffff',
              margin: 0,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            © 2026 Activ8 Telemedicine, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
