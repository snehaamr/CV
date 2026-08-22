import { useEffect, useState } from 'react'
import { photos } from '../data/photography.js'
import { asset } from '../lib/asset.js'

export default function Photography() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <h1 className="page-title">Photography</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <button
            type="button"
            className="photo-tile"
            key={photo.src}
            onClick={() => setActive(photo)}
          >
            <img src={asset(photo.src)} alt={photo.alt} />
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <img src={asset(active.src)} alt={active.alt} />
        </div>
      ) : null}
    </>
  )
}
