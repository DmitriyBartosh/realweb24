import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/iamstudio';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/iamstudio'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Baggage() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#a19ca0'}}
      subtitle={[
        "Брендинг для магазина",
        <br />,
        "женской одежды"
      ]}
      title="I AM STUDIO"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Фирменный стиль",
        <br />,
        "Полиграфия"
      ]}
      aboutProject={[
        "Бренд I AM Studio является основоположником middle-up сегмента российской модной индустрии. Концепция «доступной роскоши» была продумана и реализована основателем и главным дизайнером марки Дарьей Самкович на раннем этапе ее создания.",
        <br />,
        <br />,
        "Идея разработки кэжуал моделей с яркими дизайнерскими акцентами составляет ДНК бренда, ставшего залогом коммерческого успеха и имиджевой популярности I AM Studio."
      ]}

      idea="Опираясь на элегантность и простоту, создать уникальный стиль."
      ideaDescription="Мы создали концепт, соответствующий идее самого бренда: легкие,теплые,сближенные тона, простота и лаконичность в каждом элементе, но при этом не потеряли изюминку."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#e9dedc'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="I am studio – основоположник сегмента middle-up в российской индустрии."
      brandDetail="Сочетание уникальной идеи, правильного ценового позиционирования и высокого качества изделий стало залогом популярности I AM Studio."

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

export default Baggage