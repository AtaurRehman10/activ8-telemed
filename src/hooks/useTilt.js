import { useRef, useCallback } from 'react'

/**
 * Premium 3D tilt + spotlight glow on mouse move.
 *
 * Usage:
 *   const { ref, style, onMouseMove, onMouseLeave } = useTilt({ max: 12, glowColor: '42,157,143' })
 *   <div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
 *
 * Options:
 *   max         – max tilt angle in degrees (default 10)
 *   scale       – scale on hover (default 1.03)
 *   glowColor   – RGB triplet string, e.g. '42,157,143' (default '42,157,143')
 *   glowOpacity – spotlight opacity 0–1 (default 0.18)
 *   speed       – transition speed in ms (default 300)
 *   borderRadius– card border-radius px (default 30)
 */
export function useTilt({
  max = 10,
  scale = 1.03,
  glowColor = '42,157,143',
  glowOpacity = 0.18,
  speed = 300,
  borderRadius = 30,
} = {}) {
  const ref = useRef(null)
  const frameRef = useRef(null)

  const onMouseMove = useCallback(
    (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left   // px from left edge
        const y = e.clientY - rect.top    // px from top edge
        const cx = rect.width / 2
        const cy = rect.height / 2
        // Normalised -1 → +1
        const nx = (x - cx) / cx
        const ny = (y - cy) / cy
        const rotateX = -ny * max
        const rotateY =  nx * max
        // Spotlight position as %
        const pctX = ((x / rect.width)  * 100).toFixed(1)
        const pctY = ((y / rect.height) * 100).toFixed(1)

        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
        el.style.transition = `transform 0.08s ease`
        el.style.setProperty('--glow-x', `${pctX}%`)
        el.style.setProperty('--glow-y', `${pctY}%`)
        el.style.setProperty('--glow-opacity', glowOpacity)
      })
    },
    [max, scale, glowOpacity]
  )

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
    el.style.transition = `transform ${speed}ms cubic-bezier(0.23,1,0.32,1)`
    el.style.setProperty('--glow-opacity', 0)
  }, [speed])

  // Static base style — the ::before pseudo spotlight is injected via CSS
  // Instead we add a real overlay div inside — handled by TiltCard wrapper.
  const baseStyle = {
    position: 'relative',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    borderRadius,
    overflow: 'hidden',
  }

  return { ref, baseStyle, onMouseMove, onMouseLeave }
}
