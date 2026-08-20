import { useEffect } from 'react'
import { site } from '../data/site.js'
import { asset } from '../lib/asset.js'
import SocialLinks from './SocialLinks.jsx'

export default function AboutDialog({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="dialog-backdrop" onClick={onClose} role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="about-title" className="visually-hidden">
          About {site.name}
        </h2>
        <img className="about-photo" src={asset('images/profile-photo.jpg')} alt={site.name} />
        {site.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <p>
          Email:{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="dialog-footer">
          <SocialLinks links={site.social} />
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
