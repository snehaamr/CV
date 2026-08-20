import { useState } from 'react'
import { site } from '../data/site.js'
import AboutDialog from '../components/AboutDialog.jsx'
import ParticleField from '../components/ParticleField.jsx'

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <>
      <ParticleField />
      <div className="main">
        <h1 className="display-name">{site.name}</h1>
        <p className="tagline">{site.title}</p>
        <div className="home-actions">
          <button type="button" className="btn btn-primary" onClick={() => setAboutOpen(true)}>
            About
          </button>
        </div>
      </div>
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  )
}
