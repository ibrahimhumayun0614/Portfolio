import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace('#', '')

    if (!hash) {
      return
    }

    const el = document.getElementById(hash)
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return null
}

export default ScrollToHash

