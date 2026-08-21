import { site } from '../data/site.js'
import { asset } from '../lib/asset.js'
import SocialLinks from '../components/SocialLinks.jsx'

export default function Home() {
  return (
    <section className="intro">
      <div className="intro-copy">
        <h1 className="visually-hidden">{site.name}</h1>
        <p className="eyebrow">
          {site.title}
          <span aria-hidden="true"> · </span>
          {site.location}
        </p>
        {site.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <ul className="focus-list">
          {site.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <SocialLinks links={site.social} />
      </div>
      <div className="intro-photo">
        <img src={asset(site.photo)} alt={site.name} />
      </div>
    </section>
  )
}
