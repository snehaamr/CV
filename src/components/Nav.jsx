import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site.js'

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <NavLink to="/" className="nav-brand" end>
          {site.name}
        </NavLink>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
