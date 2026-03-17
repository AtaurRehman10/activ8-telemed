import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { imgQuoteIcon, imgAvatarDenise, imgAvatarRina, imgAvatarDella } from '../../assets'
import TiltCard from './TiltCard'

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" }
const INT = { fontFamily: "'Inter', sans-serif" }

const reviews = [
  {
    name: 'Denise',
    avatar: imgAvatarDenise,
    text: '"After an in-depth consultation, I was started on hormone therapy and thyroid medication. It has been positively life changing. I sleep deeply, have more energy, and feel more like my old self. Ariel and her team focus on well care versus sick care."',
  },
  {
    name: 'Rina',
    avatar: imgAvatarRina,
    text: '"Ariel embodies the true essence of a holistic healthcare provider. She assessed my lifestyle, diet, stress levels, and other factors, offering a comprehensive care plan tailored to my unique needs. Her compassion and empathy are truly commendable."',
  },
  {
    name: 'Della',
    avatar: imgAvatarDella,
    text: 'She truly takes her time to listen and understand you. Ariel tries her best to meet your needs and if the plan isn\'t working, she\'s flexible and will adapt. She\'s a provider who thinks outside the box."  She assessed my lifestyle, diet, stress levels',
  },
]

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

export default function Reviews() {
  const isMobile = useIsMobile(640)

  return (
    <section
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: isMobile ? '60px 24px 60px' : '80px 40px 80px',
      }}
    >
      {/* Max-width container */}
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Section headings */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            ...PJS,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 1.2,
            color: '#2a9d8f',
            textTransform: 'uppercase',
            textAlign: 'center',
            letterSpacing: 1,
            margin: '0 0 12px',
          }}
        >
          PATIENT STORIES
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{
            ...PJS,
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 55px)',
            lineHeight: 1.2,
            letterSpacing: -1.65,
            color: '#1f2937',
            textAlign: 'center',
            margin: '0 0 48px',
          }}
        >
          Real People. Real Results.
        </motion.p>

        {/* Cards row */}
        <div
          className="reviews-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 24,
          }}
        >
          {reviews.map(({ name, avatar, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              style={{
                flex: '1 1 340px',
                maxWidth: 400,
                width: '100%',
                /* Ensure the motion.div participates in flow so TiltCard height is respected */
                display: 'flex',
              }}
            >
              <TiltCard
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  flex: 1,
                }}
                cardStyle={{
                  background: '#f1f1f1',
                  borderRadius: 30,
                  padding: '36px 36px 40px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  height: '100%',
                }}
                max={8}
                scale={1.04}
                glowColor="42,157,143"
                glowOpacity={0.14}
              >
                {/* Quote icon — top right */}
                <div
                  style={{
                    position: 'absolute',
                    top: 32,
                    right: 32,
                  }}
                >
                  <img
                    alt=""
                    src={imgQuoteIcon}
                    style={{ display: 'block', width: 60, height: 60 }}
                  />
                </div>

                {/* Avatar + name row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginBottom: 24,
                    marginTop: 4,
                  }}
                >
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      alt={name}
                      src={avatar}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  <p
                    style={{
                      ...PJS,
                      fontWeight: 700,
                      fontSize: 28,
                      lineHeight: 1.3,
                      letterSpacing: -0.96,
                      color: '#6b7280',
                      margin: 0,
                    }}
                  >
                    {name}
                  </p>
                </div>

                {/* Review text */}
                <p
                  style={{
                    ...INT,
                    fontWeight: 500,
                    fontSize: 'clamp(16px, 1.3vw, 20px)',
                    lineHeight: 1.6,
                    letterSpacing: -0.6,
                    color: '#6b7280',
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .reviews-row {
            gap: 16px !important;
          }

          .reviews-row > div {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
