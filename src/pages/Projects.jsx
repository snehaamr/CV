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
          <dt>Design choice</dt>
          <dd>{project.choice}</dd>
        </div>
        <div>
          <dt>Constraint</dt>
          <dd>{project.constraint}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>
      <h3 className="arch-title">How it fits together</h3>
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
        Three systems I built to practice production backend patterns—async work, search, payments APIs, and
        authenticated AI tools. Each one has a GitHub repo with code, tests, and how to run it.
      </p>
      <div className="card-list">
        {featuredProjects.map((project) => (
          <CaseStudy key={project.href} project={project} />
        ))}
      </div>
      <h2 className="section-title">Earlier and academic</h2>
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
