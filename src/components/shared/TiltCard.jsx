import { useRef, useCallback } from 'react'

/**
 * TiltCard – drop-in wrapper that gives any card:
 *   • 3-D tilt following the mouse
 *   • Moving spotlight / radial glow under the cursor
 *   • Smooth spring-back on mouse leave
 *
 * Props:
 *   style       – outer positioning / sizing (position, left, top, width, height, etc.)
 *   cardStyle   – background, borderRadius, boxShadow that live ON the card face
 *   max         – max tilt degrees (default 10)
 *   scale       – hover scale (default 1.03)
 *   glowColor   – RGB triplet e.g. '42,157,143'
 *   glowOpacity – 0-1 (default 0.18)
 *   children    – card contents
 */
export default function TiltCard({
  style = {},
  cardStyle = {},
  max = 10,
  scale = 1.03,
  glowColor = '42,157,143',
  glowOpacity = 0.18,
  children,
  ...rest
}) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)
  const frameRef = useRef(null)

  const borderRadius = cardStyle.borderRadius ?? style.borderRadius ?? 30

  const onMouseMove = useCallback(
    (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const el = cardRef.current
        const glow = glowRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2
        const nx = (x - cx) / cx
        const ny = (y - cy) / cy
        const rotX = (-ny * max).toFixed(2)
        const rotY = (nx * max).toFixed(2)

        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale},${scale},${scale})`
        el.style.transition = 'transform 0.07s ease'

        if (glow) {
          const pctX = ((x / rect.width)  * 100).toFixed(1)
          const pctY = ((y / rect.height) * 100).toFixed(1)
          glow.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(${glowColor},${glowOpacity}) 0%, transparent 65%)`
          glow.style.opacity = '1'
        }
      })
    },
    [max, scale, glowColor, glowOpacity]
  )

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const el = cardRef.current
    const glow = glowRef.current
    if (el) {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
      el.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)'
    }
    if (glow) {
      glow.style.opacity = '0'
      glow.style.transition = 'opacity 0.4s ease'
    }
  }, [])

  return (
    /* Outer shell — owns absolute positioning so the tilt transform doesn't break layout */
    <div style={{ ...style, position: style.position ?? 'absolute' }}>
      {/* Tilt target */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          width: '100%',
          height: '100%',
          borderRadius,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          overflow: 'hidden',
          ...cardStyle,
        }}
        {...rest}
      >
        {children}

        {/* Spotlight overlay — sits on top of content, pointer-events:none */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius,
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  )
}
