import React from 'react'
import { portfolioList } from './portfolioData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion'
import './portfolioBlocks.scss'
import { Link } from 'react-router-dom';

import {isWebpSupported} from 'react-image-webp/dist/utils';

function PortfolioBlocks() {

  const portfolioBlock = portfolioList.map((portfolio) =>
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
    <>
    <div className="portfolioTitle">
      <div className='container'>
      <motion.h2
        initial={{ opacity: 0, y: -30}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: -30}}
        transition={{duration: 0.4, type: "tween"}}
      ><span>Наши работы</span> полны<br />креатива, творчества и технологий</motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: 15}}
        transition={{duration: 0.6, delay: 0.3, type: "tween"}}
      >Мы знаем как трансформировать эффективность хорошего дизайна в прибыль наших клиентов.
      </motion.p>
      </div>
    </div>
    <motion.div 
      initial={{y: 300, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.8, type: "tween", delay: 0.3}}
      className="portfolioList">
      {portfolioBlock}
    </motion.div>
    </>
  )
}

export default PortfolioBlocks
