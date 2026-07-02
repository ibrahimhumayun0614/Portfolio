import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProjectCards from './ProjectCards'
import { projects as allProjects } from '../data/projects'

function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState('work')
  const [indicator, setIndicator] = useState({ width: 0, left: 0 })

  const tabListRef = useRef(null)
  const workTabRef = useRef(null)
  const personalTabRef = useRef(null)

  const workProjects = allProjects.filter((project) => project.kind !== 'personal')
  const personalProjects = allProjects.filter((project) => project.kind === 'personal')

  const updateIndicator = () => {
    const list = tabListRef.current
    const activeButton =
      activeTab === 'work' ? workTabRef.current : personalTabRef.current

    if (!list || !activeButton) {
      return
    }

    const listRect = list.getBoundingClientRect()
    const tabRect = activeButton.getBoundingClientRect()

    setIndicator({
      width: tabRect.width,
      left: tabRect.left - listRect.left,
    })
  }

  useLayoutEffect(() => {
    updateIndicator()
  }, [activeTab])

  useEffect(() => {
    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeTab])

  return (
    <div className="projects-tabs">
      <div className="projects-tabs__header">
        <p className="projects-tabs__description">
          A selection of projects I&apos;ve worked on till now.
        </p>

        <div
          ref={tabListRef}
          className="projects-tabs__list"
          role="tablist"
          aria-label="Project categories"
        >
          <span
            className="projects-tabs__indicator"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
            }}
            aria-hidden="true"
          />

          <button
            ref={workTabRef}
            type="button"
            role="tab"
            id="tab-work"
            className={`projects-tabs__tab${activeTab === 'work' ? ' projects-tabs__tab--active' : ''}`}
            aria-selected={activeTab === 'work'}
            aria-controls="panel-work"
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
          <button
            ref={personalTabRef}
            type="button"
            role="tab"
            id="tab-personal"
            className={`projects-tabs__tab${activeTab === 'personal' ? ' projects-tabs__tab--active' : ''}`}
            aria-selected={activeTab === 'personal'}
            aria-controls="panel-personal"
            onClick={() => setActiveTab('personal')}
          >
            Personal
          </button>
        </div>
      </div>

      <div className="projects-tabs__panes">
        <div
          role="tabpanel"
          id="panel-work"
          aria-labelledby="tab-work"
          aria-hidden={activeTab !== 'work'}
          className={`projects-tabs__pane${activeTab === 'work' ? ' projects-tabs__pane--active' : ''}`}
        >
          <ProjectCards projects={workProjects} animated={false} />
        </div>

        <div
          role="tabpanel"
          id="panel-personal"
          aria-labelledby="tab-personal"
          aria-hidden={activeTab !== 'personal'}
          className={`projects-tabs__pane${activeTab === 'personal' ? ' projects-tabs__pane--active' : ''}`}
        >
          {personalProjects.length > 0 ? (
            <ProjectCards projects={personalProjects} animated={false} />
          ) : (
            <p className="intro__projects-text projects-tabs__empty">
              Add personal projects in <code>src/data/projects.js</code> by setting{' '}
              <code>kind: &apos;personal&apos;</code>.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsTabs
