const KIND_LABEL = {
  poker: '♠',
  quiz: '?',
  music: '♪',
}

export function WhatsOn({ venue }) {
  const { programme, social } = venue

  return (
    <section id="whats-on" className="section whats-on" data-reveal>
      <div className="section__intro">
        <p className="eyebrow">{programme.eyebrow}</p>
        <h2 className="section__title">{programme.title}</h2>
      </div>

      <ul className="programme">
        {programme.events.map((event) => (
          <li className="programme__item" key={event.name}>
            <span className="programme__mark" aria-hidden="true">
              {KIND_LABEL[event.kind] || '·'}
            </span>
            <div>
              <h3 className="programme__name">{event.name}</h3>
              <p className="programme__when">{event.when}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="programme__note">
        {programme.note}{' '}
        <a href={social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </p>
    </section>
  )
}
