import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'home' : undefined}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav transparent={isHome} />
      <main id="main" className={isHome ? undefined : 'main'}>
        <Outlet />
      </main>
    </div>
  )
}
