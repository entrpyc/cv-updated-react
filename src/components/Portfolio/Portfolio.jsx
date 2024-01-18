import css from './Portfolio.module.scss';

import Title from 'elements/Title/Title';

import PortfolioBlock  from './components/PortfolioBlock/PortfolioBlock';

function Portfolio({ portfolio }) {
  return (portfolio &&
    <section id="portfolio" className={css.portfolio}>
      <Title>Portfolio</Title>
      {portfolio.map((portfolioItem, i) => (
        <div className="wrap" key={i}>
          <Title tag="h3">{portfolioItem.title}</Title>
          {portfolioItem.content.map((item, index) => (
            <PortfolioBlock {...item} key={index} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default Portfolio