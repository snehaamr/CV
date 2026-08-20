import { diyProjects } from '../data/diy.js'
import { asset } from '../lib/asset.js'

export default function Diy() {
  return (
    <>
      <h1 className="page-title">Do It Yourself</h1>
      <div className="card-list">
        {diyProjects.map((project) => (
          <article className="card diy-card" key={project.id}>
            <img src={asset(project.image)} alt={project.alt} />
            <div className="diy-copy">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
