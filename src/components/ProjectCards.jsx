import './ProjectCards.css'
import { useReveal } from './Reveal'
import { projects as allProjects } from '../data/projects'

function ProjectCard({ project, index, animated }) {
  const reveal = useReveal({ delay: index * 90, immediate: !animated })

  return (
    <article
      ref={reveal.ref}
      className={`project-card project-card--${project.variant} ${reveal.className}`}
      style={reveal.style}
    >
      <a
        href={project.href}
        className="project-card__link-wrap"
        target={project.href.startsWith('http') ? '_blank' : undefined}
        rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="project-card__visual">
          <p className="project-card__meta">{project.meta.join(' • ')}</p>
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
          rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
  )
}

function ProjectCards({ projects = allProjects, animated = true }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          animated={animated}
        />
      ))}
    </div>
  )
}

export default ProjectCards
