import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">GitHub Projects</h1>
        <Link to="/diy">DIY projects</Link>
      </div>
      <div className="card-list">
        {projects.map((project) => (
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
