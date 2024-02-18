import css from './TextListBlock.module.scss';

import Text from 'elements/Text/Text';

function TextListBlock({ text }) {
  return (
    <div className={css.textListBlock}>
      {text.map((textContent, i) => (
        <div className="content" key={i}>
          {textContent.map((row, j) => (
            <div className={`row ${row.class || ''}`} key={j}>
              <Text><strong>{row.title}:</strong> {row.text}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default TextListBlock