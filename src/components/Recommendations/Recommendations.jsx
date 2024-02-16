
import css from './Recommendations.module.scss';

import Title from 'elements/Title/Title';

function Recommendations({ recommendations, id }) {
  return (recommendations &&
    <section id={id} className={css.experience}>
      <Title>Recommendations</Title>
      {recommendations.map((item, index) => (
        <div className="block-container" key={index} >
          <p>{item.name}</p>
          <p>{item.title}</p>
          <p>{item.relation}</p>
          {item.recommendation.map(text => (
            <p>{text}</p>
          ))}
        </div>
      ))}
    </section>
  )
}
 
export default Recommendations