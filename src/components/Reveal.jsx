import { useEffect, useRef, useState } from 'react'

export function useReveal({ delay = 0, immediate = false } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) {
      return
    }

    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [immediate])

  return {
    ref,
    className: `reveal${visible ? ' reveal--visible' : ''}`,
    style: { '--reveal-delay': `${delay}ms` },
  }
}

function Reveal({ children, className = '', delay = 0, immediate = false }) {
  const reveal = useReveal({ delay, immediate })

  return (
    <div
      ref={reveal.ref}
      className={`${reveal.className}${className ? ` ${className}` : ''}`}
      style={reveal.style}
    >
      {children}
    </div>
  )
}

export default Reveal
