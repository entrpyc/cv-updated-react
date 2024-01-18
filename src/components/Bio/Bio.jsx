import css from './Bio.module.scss';

import Title from 'elements/Title/Title'

import BioBlock from './components/BioBlock/BioBlock';

function Bio({ bio }) {
  return (
    <section id="bio" className={css.bio}>
      <Title>Bio</Title>
      <div className="wrap">
        {bio.map((bio, i) => (
          <BioBlock key={i} {...bio} />
        ))}
      </div>
    </section>
  )
}

export default Bio