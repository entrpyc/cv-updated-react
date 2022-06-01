import './Portfolio.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import PortfolioBlock  from './components/PortfolioBlock/PortfolioBlock';

function Portfolio() {
  const { portfolio } = useContext(GlobalContext)
  const { webDevelopment, animationAndGraphicDesign } = portfolio

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="wrap">
        <h3>Web Development</h3>
        {webDevelopment.map((item, index) => (
          <PortfolioBlock {...item} key={index} />
        ))}
      </div>
      <div className="wrap">
        <h3>Animations and Graphic Design</h3>
        {animationAndGraphicDesign.map((item, index) => (
          <PortfolioBlock {...item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio