import { Link, useLocation } from 'react-router-dom'

const links = [
  { path: '/',         label: 'HOME'     },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/resume',   label: 'RESUME'   },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <span className="nav-prompt">~/portfolio$</span>
      <div className="nav-links">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`nav-link${pathname === path ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
