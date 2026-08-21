import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'

export default function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="main">
        <Outlet />
      </main>
    </div>
  )
}
