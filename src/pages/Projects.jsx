import { Link } from 'react-router-dom'
import ProjectsTabs from '../components/ProjectsTabs'
import Reveal from '../components/Reveal'

function Projects() {
  return (
    <section className="intro">
      <Reveal immediate>
        <div className="intro__content">
          <Link to="/" className="about__back">
            ← Home
          </Link>

          <h1 className="intro__name">Projects</h1>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="intro__projects">
          <ProjectsTabs />
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
