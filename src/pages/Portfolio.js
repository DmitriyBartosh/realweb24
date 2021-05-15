import React, { useEffect } from 'react'
import PortfolioList from '../components/portfolioBlocks/PortfolioBlocks'
import Cooperation from '../components/Cooperation/Cooperation'
import '../style/portfolio.scss'

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },)
  return (
    <div className="portfolio">
      <PortfolioList />
      <Cooperation />
    </div>
  )
}

export default Portfolio
