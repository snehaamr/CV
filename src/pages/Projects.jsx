import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <h2>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h2>
      <p>{project.description}</p>
    </article>
  )
}

export default function Projects() {
  const recent = projects.filter((project) => !project.school)
  const school = projects.filter((project) => project.school)

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">GitHub Projects</h1>
        <Link to="/diy">DIY projects</Link>
      </div>
      <div className="card-list">
        {recent.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
      <p className="list-tag">School projects</p>
      <div className="card-list">
        {school.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </>
  )
}
