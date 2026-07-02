import { Link } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { label: 'Intro', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Contact', to: '/#contact' },
]

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:muhammedibrim97@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 7.5 12 13l9-5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/mohamed-ibrahim-h-811152225',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__section" aria-label="Site navigation">
        <p className="sidebar__label">Navigation</p>
        <ul className="sidebar__list">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="sidebar__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__section">
        <p className="sidebar__label">Contacts</p>
        <ul className="sidebar__list sidebar__list--contacts">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="sidebar__link sidebar__link--contact"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                <span className="sidebar__icon">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
