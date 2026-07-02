import { Link } from 'react-router-dom'
import ProjectsTabs from '../components/ProjectsTabs'
import Reveal from '../components/Reveal'

function Home() {
  return (
    <section id="intro" className="intro">
      <Reveal immediate>
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
      </Reveal>

      <Reveal delay={80}>
        <div id="projects" className="intro__projects">
          <h2 className="intro__projects-title">Projects</h2>
          <ProjectsTabs />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div id="skills" className="intro__skills">
          <h2 className="intro__projects-title">Skills</h2>
          <p className="intro__projects-text">
            Building with React, WordPress, JavaScript, Cloudflare, AI tools,
            Figma, Git, and Linux. Focused on creating fast, accessible,
            SEO-friendly experiences that are simple to use and enjoyable to
            explore.
          </p>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div id="contact" className="intro__contact">
          <h2 className="intro__projects-title">Contact</h2>
          <p className="intro__projects-text">
            Want to work together or just say hi? Reach me here.
          </p>
          <ul className="intro__contact-list">
            <li>
              <a className="intro__contact-link" href="mailto:muhammedibrim97@gmail.com">
                Email
                <span className="intro__contact-value">muhammedibrim97@gmail.com</span>
                <span aria-hidden="true" className="intro__contact-arrow">
                  ↗
                </span>
              </a>
            </li>
            <li>
              <a
                className="intro__contact-link"
                href="https://www.linkedin.com/in/mohamed-ibrahim-h-811152225"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span className="intro__contact-value">/in/mohamed-ibrahim-h-811152225</span>
                <span aria-hidden="true" className="intro__contact-arrow">
                  ↗
                </span>
              </a>
            </li>
            <li>
              <a
                className="intro__contact-link"
                href="https://thewriterslaundry.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
                <span className="intro__contact-value">thewriterslaundry.com</span>
                <span aria-hidden="true" className="intro__contact-arrow">
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default Home
