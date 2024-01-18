import css from './PortfolioBlock.module.scss';

import Badge from 'elements/Badge/Badge';
import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import Text from 'elements/Text/Text';

function PortfolioBlock({ title, href, external, techStack }) {
  return (
    <div className={css.portfolioBlock}>
      <div className={`portfolio-block-content ${techStack ? 'with-tech-stack' : ''}`}>
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
      {techStack &&
        <div className="tech-stack">
          {techStack.map((techStackItem, i) => (
            <Badge className="tech-stack-item" key={i}>{techStackItem.title}</Badge>
          ))}
        </div>
      }
    </div>
  )
}

export default PortfolioBlock