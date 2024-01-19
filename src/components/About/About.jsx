import css from './About.module.scss';

import Avatar from 'components/Avatar/Avatar';
import Text from 'elements/Text/Text';

function About({ about, info }) {
  return ((info && about) &&
    <section id="about" className={css.about}>
      <div className="about-me">
        <Avatar picture={info.picture} name={info.name} />
      </div>
      <div className="info">
        <div className="row mobile">
          <Text>{info.name}</Text>
        </div>
        {about.map((block, i) => (
          <div className="block" key={i}>
            {block.map((row, j) => (
              <div className={`row ${row.class || ''}`} key={j}>
                <Text><strong>{row.title}:</strong> {row.text}</Text>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About