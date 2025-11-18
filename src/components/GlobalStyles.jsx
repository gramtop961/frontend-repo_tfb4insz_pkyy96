import React, { useEffect } from 'react'

export default function GlobalStyles() {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--navy', '#0B1F33')
    root.style.setProperty('--gold', '#D4B98C')
    root.style.setProperty('--warmWhite', '#F5F5F3')
    root.style.setProperty('--gray', '#A2A8AE')
  }, [])
  return null
}
