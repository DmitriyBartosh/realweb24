import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/gratis'
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/gratis'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Gratis() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#e8eae9'}}
      introTitle={{color: '#333'}}
      subtitle="Сайт для проката и аренды машин"
      title="Гратис"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Сайт",
        <br />,
        "Настройка рекламы"
      ]}
      aboutProject={[
        "Гратис представляет автомобили разных классов, что позволяет подобрать идеальный вариант по бюджету. А также Гратис предлагает дополнительно зарабатывать и получать пассивный доход на своем авто, сдав его в аренду.",
        <br />,
        <br />,
        "Перед нами стояла задача совместить два этих направления, а также создать удобный каталог с автопарком в минималистичном стиле."
      ]}

      idea="Максимально упростить процедуру аренды авто, опираясь на минималистичный стиль."
      ideaDescription="Мы создали современный сайт, преимущественно для мужчин 25-45 лет, для тех, у кого нет собственных авто, но есть права, с минималистичным дизайном, но с полным представлением услуг."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#feec4f'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Гратис - это минималистичный дизайн и удобство в использовании."
      brandDetail="Всего несколько простых шагов, чтобы свободно передвигаться на автомобиле по городу."

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

export default Gratis