import css from './LabelsBlock.module.scss';

import Badge from 'elements/Badge/Badge';
import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import Text from 'elements/Text/Text';

function PortfolioBlock({ title, links, labels }) {
  return (
    <div className={css.portfolioBlock}>
      <div className={`portfolio-block-content ${labels ? 'with-tech-stack' : ''}`}>
        <div className="block" target="_blank" rel="noreferrer">
          <Text>{title}</Text>
        </div>
        {links && links.map((item, i) => (
          <Link href={item.link} key={i} className="block external" target="_blank" rel="noreferrer">
            <div className="icon">
              <Icon name={item.icon} />
            </div>
          </Link>
        ))}
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

export default PortfolioBlock