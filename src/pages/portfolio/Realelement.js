import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/realelement';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/realelement'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Ridecamp() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'white', color: 'black'}}
      introTitle={{color: 'black'}}
      subtitle="Сайт для производственной компании"
      title="Real Element"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Сайт",
        <br />,
        "Настройка рекламы"
      ]}
      aboutProject={[
        "Производственная компания REAL ELEMENT занимается наружной рекламой, мебелью для интерьера, архитектурными макетами, 3D моделями и графическим дизайном.",
        <br />,
        <br />,
        "Требовалось разработать сочный узнаваемый стиль для лендинга, создать максимально удобный адаптированный интерфейс."
      ]}

      idea="Донести до клиента профессионализм, надежность и внимание к каждой детали во всех предоставленных услугах, через минималистичный дизайн и яркие цветовые акценты."
      ideaDescription="Мы создали современный сайт, со смелыми цветовыми решениями, подчеркивающие стиль и строгость компании."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#7908ea', color: 'white'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Макеты и типография без поиска подрядчика."
      brandDetail="Вам не придется самостоятельно делать макеты и искать подрядчиков для изготовления рекламных материалов."

      img3={isWebpSupported() ? images[6].webp : images[6].jpg}
      img4={isWebpSupported() ? images[7].webp : images[7].jpg}
    />
    <NextProject 
      nextProject={portfolioList}
    />
    <Cooperation />
    </>
  )
}

export default Ridecamp