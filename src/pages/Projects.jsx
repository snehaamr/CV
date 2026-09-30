import { Link } from 'react-router-dom'
import { earlierProjects, featuredProjects } from '../data/projects.js'

function ArchitectureFlow({ steps }) {
  return (
    <ol className="arch-flow">
      {steps.map((step, index) => (
        <li key={step}>
          <span>{step}</span>
          {index < steps.length - 1 ? (
            <span className="arch-arrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function CaseStudy({ project }) {
  return (
    <article className="card case-study">
      <div className="case-study-head">
        <h2>{project.title}</h2>
        <a href={project.href} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
      <p>{project.summary}</p>
      <dl className="case-study-points">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>What I did</dt>
          <dd>{project.choice}</dd>
        </div>
        <div>
          <dt>The catch</dt>
          <dd>{project.constraint}</dd>
        </div>
        <div>
          <dt>How it went</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>
      <h3 className="arch-title">Rough flow</h3>
      <ArchitectureFlow steps={project.architecture} />
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <Link to="/diy">DIY projects</Link>
      </div>
      <p className="resume-summary">
        A few backends I've been building on the side. Code is on GitHub if you want to poke around.
      </p>
      <div className="card-list">
        {featuredProjects.map((project) => (
          <CaseStudy key={project.href} project={project} />
        ))}
      </div>
      <h2 className="section-title">Older / school</h2>
      <div className="card-list">
        {earlierProjects.map((project) => (
          <article className="card" key={project.href}>
            <h2>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </>
  )
}
