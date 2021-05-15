import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/isense';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/isense'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Isense() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#e8e9e4'}}
      introTitle={{color: '#333'}}
      subtitle={[
        "Брендинг для магазина",
        <br />,
        "свечей для дома"
      ]}
      title="Isense"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Логотип",
        <br />,
        "Фирменный стиль"
      ]}
      aboutProject={[
        "ESENSE — это свечи не просто для уюта и аромата.",
        <br />,
        <br />,
        "Эти свечи являются личным проводником и помощником девушки для единства с собой и гармонии внутри. Это то, что пробуждает те чувства, о которых мы так часто забываем в суете жизни."
      ]}

      idea="Создать концепт, который несёт за собой стиль и гармонию."
      ideaDescription="Мы передали нежность, минимализм , связь с природой и душой , чтобы создавался момент «здесь и сейчас». За счёт ароматов Isense - девушки погружаются в свои мысли и фантазии, наслаждаясь атмосферой."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#e7e9e8'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="ISENSE. Я чувствую наслаждение, я чувствую расслабление. Я чувствую любовь."
      brandDetail="Личный проводник к настоящей тебе, через особую атмосферу и волшебные ароматы."

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

export default Isense