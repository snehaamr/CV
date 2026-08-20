import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site.js'

export default function Nav({ transparent = false }) {
  return (
    <header className={transparent ? 'site-header site-header-transparent' : 'site-header'}>
      <nav className="nav" aria-label="Primary">
        <NavLink to="/" className="nav-brand" end>
          {site.name}
        </NavLink>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
