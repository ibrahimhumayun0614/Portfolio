import './ProjectCards.css'

const projects = [
  {
    id: 'credora',
    meta: ['WordPress', '2025', 'Credora Finance'],
    variant: 'purple',
    image: '/projects/credora.png',
    alt: 'Credora Finance website homepage',
    description:
      'A modern financing broker website connecting clients to the right banking solutions in the UAE.',
    href: 'https://credorafinance.com',
  },
  {
    id: 'chowking',
    meta: ['WordPress', '2024', 'Chowking UAE'],
    variant: 'dark',
    image: '/projects/chowking.png',
    alt: 'Chowking UAE website homepage',
    description:
      'A vibrant restaurant website showcasing menu, locations, offers, and delivery options.',
    href: 'https://chowking.ae',
  },
  {
    id: 'chocolate-bar',
    meta: ['WordPress', '2024', 'Chocolate Bar'],
    variant: 'warm',
    image: '/projects/chocolate-bar.png',
    alt: "Alison Nelson's Chocolate Bar website homepage",
    description:
      'An elegant cafe website built to highlight menu, gallery, and table bookings.',
    href: '#',
  },
]

function ProjectCards() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article
          key={project.id}
          className={`project-card project-card--${project.variant}`}
        >
          <a
            href={project.href}
            className="project-card__link-wrap"
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={
              project.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
          >
            <div className="project-card__visual">
              <p className="project-card__meta">
                {project.meta.join(' • ')}
              </p>
              <div className="project-card__preview">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-preview__image"
                />
              </div>
            </div>
          </a>
          <div className="project-card__footer">
            <p className="project-card__description">{project.description}</p>
            <a
              href={project.href}
              className="project-card__arrow"
              aria-label={`View ${project.meta[2]}`}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={
                project.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectCards
