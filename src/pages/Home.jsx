import { Link } from 'react-router-dom'
import ProjectCards from '../components/ProjectCards'

function Home() {
  return (
    <section id="intro" className="intro">
      <div className="intro__content">
        <h1 className="intro__name">Mohamed Ibrahim</h1>
        <p className="intro__tagline">
          building on the web. writing on the internet.
        </p>
        <p className="intro__body">
          I build for the web, write about technology, and constantly explore
          new ideas. Whether it&apos;s WordPress websites, React applications,
          AI-powered tools, or open-source projects, I&apos;m passionate about
          creating things that are useful, thoughtful, and worth sharing. This
          is where I document the journey.
        </p>
        <p className="intro__cta">
          <Link to="/about" className="intro__link">
            Let&apos;s explore.
          </Link>
        </p>
        <p className="intro__updated">Updated June 20, 2026</p>
      </div>

      <div id="projects" className="intro__projects">
        <h2 className="intro__projects-title">Projects</h2>
        <p className="intro__projects-text">
          A selection of projects I&apos;ve worked on till now.
        </p>
        <ProjectCards />
      </div>
    </section>
  )
}

export default Home
