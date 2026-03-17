import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Glp1LandingPage      from './pages/Glp1LandingPage'
import HormonesLandingPage  from './pages/HormonesLandingPage'
import DigestiveLandingPage from './pages/DigestiveLandingPage'
import FormPage             from './pages/FormPage'

const DESIGN_WIDTH  = 1920
const DESIGN_HEIGHT = 1080

function ScaledPage({ children, fullscreen = false }) {
  const [scale, setScale]           = useState(1)
  const [offset, setOffset]         = useState({ x: 0, y: 0 })
  const [pageHeight, setPageHeight] = useState(0)
  const innerRef = useRef(null)

  useEffect(() => {
    function update() {
      const sx = window.innerWidth  / DESIGN_WIDTH
      const sy = window.innerHeight / DESIGN_HEIGHT
      if (fullscreen) {
        // cover: scale up so canvas fills entire screen, centered
        const s = Math.max(sx, sy)
        setScale(s)
        setOffset({
          x: (window.innerWidth  - DESIGN_WIDTH  * s) / 2,
          y: (window.innerHeight - DESIGN_HEIGHT * s) / 2,
        })
      } else {
        setScale(sx)
        if (innerRef.current) setPageHeight(innerRef.current.scrollHeight * sx)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [fullscreen])

  if (fullscreen) {
    return (
      <div style={{ width: '100vw', height: '100dvh', overflow: 'hidden', position: 'fixed', top: 0, left: 0, background: '#f5faff' }}>
        <div
          ref={innerRef}
          style={{
            width:  DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transformOrigin: 'top left',
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: pageHeight, overflow: 'hidden', position: 'relative' }}>
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"          element={<Glp1LandingPage />} />
        <Route path="/hormones"  element={<HormonesLandingPage />} />
        <Route path="/digestive" element={<DigestiveLandingPage />} />
        <Route path="/form"      element={<FormPage />} />
        <Route path="*"          element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
