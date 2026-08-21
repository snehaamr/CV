import { education, jobs, skills, summary } from '../data/resume.js'

export default function Resume() {
  return (
    <>
      <h1 className="page-title">Resume</h1>
      <p className="resume-summary">{summary}</p>
      <div className="card-list">
        <h2 className="section-title">Employment</h2>
        {jobs.map((job) => (
          <article className="card" key={`${job.company}-${job.dates}`}>
            <div className="job-head">
              <h3>{job.role}</h3>
              <p className="job-dates">{job.dates}</p>
            </div>
            <p className="meta">{job.company}</p>
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
        <article className="card">
          <h2>Skills</h2>
          <ul className="focus-list">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </>
  )
}
