import { motion } from "framer-motion";
import { useState } from "react";
import {
  imgLogoIcon,
  imgFormWelcomePhoto,
  imgFormDecorIcon,
  imgFormPhotoMask,
} from "../../assets";
import { useTilt } from "../../hooks/useTilt";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function WelcomeScreen({ onStart }) {
  const [btnHovered, setBtnHovered] = useState(false);
  const {
    ref: photoRef,
    baseStyle: photoTiltStyle,
    onMouseMove: photoMove,
    onMouseLeave: photoLeave,
  } = useTilt({
    max: 10,
    scale: 1.03,
    glowColor: "27,77,122",
    glowOpacity: 0.12,
    borderRadius: 20,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5faff",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bg icon
      <motion.div
        {...fadeIn(0.2)}
        style={{
          position: 'absolute',
          right: -100,
          bottom: -50,
          width: '55vw',
          maxWidth: 700,
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img src={imgFormDecorIcon} alt="" style={{ width: '100%', height: 'auto', transform: 'scaleX(-1)' }} />
      </motion.div> */}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 960,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(20px, 4vw, 40px) clamp(16px, 5%, 48px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Logo */}
        <motion.div {...fadeIn(0)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 41px)",
                letterSpacing: -1.2,
                color: "#1b4d7a",
              }}
            >
              Activ
            </span>
            <img
              src={imgLogoIcon}
              alt=""
              style={{
                width: 36,
                height: 21,
                objectFit: "contain",
                transform: "rotate(180deg) scaleY(-1)",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 600,
              fontSize: 9,
              letterSpacing: 4,
              color: "#6b7280",
              textTransform: "uppercase",
              marginBottom: "clamp(20px, 3vw, 36px)",
            }}
          >
            Telemedicine, LLC
          </div>
        </motion.div>

        {/* Two-column row — wraps automatically on small viewports */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(16px, 3vw, 32px)",
            alignItems: "stretch",
            flex: 1,
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {/* Left — white card */}
          <motion.div
            {...fadeIn(0.1)}
            style={{
              flex: "1 1 280px",
              minWidth: 0,
              background: "#fff",
              borderRadius: "clamp(18px, 2.5vw, 30px)",
              boxShadow: "15px 35px 50px 0px #dff0ff",
              padding: "clamp(24px, 4vw, 52px) clamp(20px, 4vw, 44px)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.h1
              {...fadeUp(0.3)}
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 4vw, 45px)",
                lineHeight: 1.2,
                letterSpacing: -1.65,
                color: "#1f2937",
                margin: "0 0 clamp(12px, 2vw, 20px)",
              }}
            >
              Let&rsquo;s Find Your Weight Loss Plan
            </motion.h1>

            <motion.p
              {...fadeUp(0.45)}
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.4vw, 20px)",
                lineHeight: 1.6,
                letterSpacing: -0.6,
                color: "#6b7280",
                margin: "0 0 clamp(20px, 3vw, 32px)",
              }}
            >
              Answer a few quick questions so Ariel can prepare for your
              consultation. Everything you share is private and HIPAA-compliant.
            </motion.p>

            <motion.div
              {...fadeUp(0.6)}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStart}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="btn-animated"
              style={{
                height: "clamp(44px, 5vw, 56px)",
                padding: "0 clamp(24px, 3vw, 40px)",
                background: btnHovered ? "#0d3a5c" : "#1b4d7a",
                borderRadius: 50,
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s ease, box-shadow 0.2s ease",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  letterSpacing: -0.32,
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                LET&rsquo;S GET STARTED →
              </span>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            {...fadeIn(0.35)}
            style={{
              flex: "1 1 clamp(220px, 38%, 360px)",
              maxWidth: "min(360px, 100%)",
              minHeight: "clamp(220px, 55vw, 400px)",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <div
              ref={photoRef}
              onMouseMove={photoMove}
              onMouseLeave={photoLeave}
              style={{
                ...photoTiltStyle,
                width: "100%",
                height: "100%",
                WebkitMaskImage: `url('${imgFormPhotoMask}')`,
                maskImage: `url('${imgFormPhotoMask}')`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            >
              <img
                src={imgFormWelcomePhoto}
                alt="Woman checking weight progress"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          {...fadeIn(0.8)}
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 14,
            color: "#6b7280",
            textAlign: "center",
            marginTop: "clamp(20px, 3vw, 32px)",
            paddingTop: 24,
            marginBottom: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          © 2026 Activ8 Telemedicine, LLC. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
}
