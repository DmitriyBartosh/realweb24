import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/anastom';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/anastom'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Anastom() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#3fa9f5'}}
      subtitle={[
      "Логотип для производственной",
      <br />,
      "стоматологической компании"
      ]}
      title="Энастом"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Логотип",
        <br />,
        "Полиграфия"
      ]}
      aboutProject={[
        "Для проведения высококачественного лечения в клиниках необходим целый спектр различных материалов узкого применения и новейшее оборудование, позволяющее применять современные технологии.",
        <br />,
        <br />,
        "Качественные материалы необходимо приобретать у надежных производителей, зарекомендовавших себя как надежных партнеров, такой и является компания «Энастом»"
      ]}

      idea="Создать яркий, но в тоже время простой и понятный образ, засчет минималистичного подхода к созданию логотипа."
      ideaDescription="Мы создали строгий, но в то же время лаконичный и стильный логотип, который в последствие можно использовать на любых носителях, мы не побоялись использовать яркую палитру. Благодаря ярким акцентам, компания Энастом сильно отличается среди конкурентов."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: 'white'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Энастом – ваш надежный партнер в бизнесе!"
      brandDetail="Энастом - это опытная команда профессионалов высокого уровня. Квалифицированные специалисты, которые постоянно следят за новыми тенденциями и окажут вам профессиональную поддержку и помощь."

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

export default Anastom