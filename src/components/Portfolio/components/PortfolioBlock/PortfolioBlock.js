import './PortfolioBlock.scss';

function PortfolioBlock({ title, href, external }) {
  return (
    <div className="portfolio-block">
      <a href={href} className={`block video ${!external ? 'single' : ''}`} target="_blank" rel="noreferrer">
        <div className="icon">
          <img src="./assets/video-icon.png" alt={title + ' video preview'} />
        </div>
        <p>{title}</p>
      </a>
      {external ?
        <a href={external} className="block external" target="_blank" rel="noreferrer">
          <div className="icon">
            <img src="./assets/external-icon.png" alt={title + ' external link'} />
          </div>
        </a>
      :null}
    </div>
  )
}

export default PortfolioBlock