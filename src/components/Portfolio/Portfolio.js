import './Portfolio.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import PortfolioBlock  from './components/PortfolioBlock/PortfolioBlock';

function Portfolio() {
  const { pageData } = useContext(GlobalContext)
  const { portfolio } = pageData

  return (
    portfolio ? (
      <section id="portfolio">
        <h2>Portfolio</h2>
        {portfolio.map((portfolioItem, i) => (
          <div className="wrap" key={i}>
            <h3>{portfolioItem.title}</h3>
            {portfolioItem.content.map((item, index) => (
              <PortfolioBlock {...item} key={index} />
            ))}
          </div>
        ))}
      </section>
    ) : null
  )
}

export default Portfolio