import css from './TitleLabelListBlock.module.scss';

import Badge from 'elements/Badge/Badge';
import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import Text from 'elements/Text/Text';

function TitleLabelListBlock({ title, href, external, labels }) {
  return (
    <div className={css.titleLabelListBlock}>
      <div className={`portfolio-block-content ${labels ? 'with-tech-stack' : ''}`}>
        {external &&
          <Link link={external} className="block external" target="_blank" rel="noreferrer">
            <div className="icon">
              <Icon name="external-link" />
            </div>
          </Link>
        }
        <Link href={href} className={`block video ${!external ? 'single' : ''}`} target="_blank" rel="noreferrer">
          <div className="icon">
            <Icon name="video" /> 
          </div>
          <Text>{title}</Text>
        </Link>
      </div>
      {labels &&
        <div className="tech-stack">
          {labels.map((label, i) => (
            <Badge className="tech-stack-item" key={i}>{label.title}</Badge>
          ))}
        </div>
      }
    </div>
  )
}

export default TitleLabelListBlock;