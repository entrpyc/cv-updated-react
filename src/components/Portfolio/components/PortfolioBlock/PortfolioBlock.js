import './PortfolioBlock.scss';

function PortfolioBlock({ title, href, external, techStack }) {
  return (
    <div className="portfolio-wrapper">
      <div className={`portfolio-block ${techStack ? 'with-tech-stack' : ''}`}>
        <a href={href} className={`block video ${!external ? 'single' : ''}`} target="_blank" rel="noreferrer">
          <div className="icon">
            <img src="./assets/video-icon.png" alt={title + ' video preview'} />
          </div>
          <p>{title}</p>
        </a>
        {external &&
          <a href={external} className="block external" target="_blank" rel="noreferrer">
            <div className="icon">
              <img src="./assets/external-icon.png" alt={title + ' external link'} />
            </div>
          </a>
        }
      </div>
      {techStack &&
        <div className="tech-stack">{techStack.map((techStackItem, i) => (
          <div className="tech-stack-item" key={i}>{techStackItem.title}</div>
        ))}</div>
      }
    </div>
  )
}

export default PortfolioBlock