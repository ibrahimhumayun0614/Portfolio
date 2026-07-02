import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './About.css'

const leftParagraphs = [
  <>
    I&apos;m a <strong>Web Developer</strong> in <strong>Dubai, UAE</strong>,
    building websites, digital experiences, and tools that solve real problems.
    I work with <strong>WordPress</strong>, <strong>React</strong>, and modern
    front-end technologies to help businesses create fast, functional, and
    user-friendly online experiences.
  </>,
  <>
    My work spans custom <strong>WordPress development</strong>,{' '}
    <strong>React applications</strong>, <strong>UI implementation</strong>,{' '}
    <strong>SEO</strong>, and <strong>performance optimization</strong>—turning
    ideas into products that are visually appealing, practical, and easy to use.
  </>,
  <>
    Beyond client work, I explore <strong>AI-powered applications</strong>,{' '}
    automation workflows, <strong>open-source software</strong>,{' '}
    <strong>Linux</strong>, and developer tools through side projects, learning
    by building, and sharing what I discover.
  </>,
]

const rightParagraphs = [
  <>
    <strong>Writing</strong> is a big part of my journey. On my{' '}
    <strong>blog</strong>, I break down technology, cybersecurity, AI, and
    open-source topics into simple stories—and I write about tech in{' '}
    <strong>Tamil</strong> to make complex ideas accessible to more readers.
  </>,
  <>
    When I&apos;m not coding or contributing to open-source, I{' '}
    <strong>volunteer at blood donation campaigns</strong>, read tech blogs, and
    play <strong>cricket</strong>—I love bowling and the discipline and teamwork
    the sport brings.
  </>,
  <>
    A lifelong <strong>Liverpool supporter</strong>, I rarely miss a match. This
    site collects my work, projects, writing, and experiments—staying curious,
    growing continuously, and making the most of every opportunity.
  </>,
]

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <Reveal immediate>
          <Link to="/" className="about__back">
            ← Home
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="about__title">Hey, I&apos;m Mohamed!</h1>
        </Reveal>

        <div className="about__columns">
          <div className="about__column">
            {leftParagraphs.map((paragraph, index) => (
              <Reveal key={`left-${index}`} delay={120 + index * 70}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <div className="about__column">
            {rightParagraphs.map((paragraph, index) => (
              <Reveal key={`right-${index}`} delay={160 + index * 70}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
