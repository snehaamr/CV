import { education, jobs } from '../data/resume.js'
import { site } from '../data/site.js'
import SocialLinks from '../components/SocialLinks.jsx'

export default function Resume() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Employment History</h1>
        <SocialLinks links={site.social} />
      </div>
      <div className="card-list">
        {jobs.map((job) => (
          <article className="card" key={`${job.company}-${job.dates}`}>
            <h2>{job.role}</h2>
            <p className="meta">
              <strong>{job.company}</strong> | {job.dates}
            </p>
            <ul className="bullets">
              {job.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
        <article className="card">
          <h2>Education</h2>
          {education.map((item) => (
            <p key={item.school}>
              <strong>
                {item.credential} — {item.school}
              </strong>
              <br />
              {item.dates}
            </p>
          ))}
        </article>
      </div>
    </>
  )
}
