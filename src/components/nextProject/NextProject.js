import React from 'react'
import './NextProject.scss'
import '../portfolioBlocks/portfolioBlocks.scss'
import './NextProject.scss'
import Button from '../../components/redButton/RedButton'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {isWebpSupported} from 'react-image-webp/dist/utils';

function NextProject(props) {
  const nextProject = props.nextProject;

  const portfolioBlock = nextProject.map((portfolio) =>
    <Link to={portfolio.link} key={portfolio.id} style={portfolio.style} className={portfolio.orientation}>
      <div className="portfolioPreview">
        <LazyLoadImage 
          src={isWebpSupported() ? portfolio.promoWebp : portfolio.promo} 
          alt={portfolio.name}
          effect="blur"
        />
      </div>
      <div className="portfolioDescription">
        <h4>{portfolio.name}</h4>
        <p>{portfolio.service}</p>
      </div>
    </Link>
  );

  return (
    <div className="nextProject">
      <div className="nextPortfolioTitle container-sm">
        <h2>Следующие<br/><span>проекты</span></h2>
        <Button link="/portfolio" nameBtn="Смотреть все проекты" className="transparentButton" />
      </div>
      <div className="portfolioList">
        {portfolioBlock}
      </div>
    </div>
  )
}

export default NextProject
