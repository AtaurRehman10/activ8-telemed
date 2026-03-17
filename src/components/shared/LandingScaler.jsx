import { useState, useEffect } from 'react'

const DESIGN_W = 1920

function useScale() {
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / DESIGN_W))
  useEffect(() => {
    function update() {
      setScale(Math.min(1, window.innerWidth / DESIGN_W))
    }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return scale
}

/**
 * Wraps a fixed 1920px-wide landing page so it scales down on smaller screens.
 * naturalHeight — the total pixel height of the 1920-design page (e.g. 7867)
 * children      — the page content (must itself be width:1920 absolutely positioned)
 */
export default function LandingScaler({ naturalHeight, children }) {
  const scale = useScale()
  return (
    <div style={{ position: 'relative', width: '100%', height: naturalHeight * scale }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: DESIGN_W,
          height: naturalHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
