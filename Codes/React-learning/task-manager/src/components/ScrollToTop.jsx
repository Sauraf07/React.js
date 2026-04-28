import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// useRef + useEffect: Scroll to top on route change
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const wrapperRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    // Optional: scroll specific element if needed
    if (wrapperRef.current) wrapperRef.current.scrollTop = 0
  }, [pathname])

  return <div ref={wrapperRef} style={{ display: 'none' }} />
}
