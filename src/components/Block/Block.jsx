import css from "./Block.module.scss";

import Title from 'elements/Title/Title'
import Text from 'elements/Text/Text'

function Block({ title, subTitle, text }) {
  return (
    <div className={css.block}>
      <Title tag="h3">{title}</Title>
      <Text className="sub">{subTitle}</Text>
      <div className="block-text">
        {text.map((row, i) => (
          <Text key={i}>{row}</Text>
        ))}
      </div>
    </div>
  )
}

export default Block