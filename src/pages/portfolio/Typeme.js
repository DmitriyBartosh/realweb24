import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/typeme';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/typeme'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Typeme() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#9f3c8e'}}
      subtitle={["Брендинг для курса",
      <br />,
      "психологии от Елены Лустиной"
      ]}
      title="TYPE ME"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Логотип",
        <br />,
        "Фирменный стиль",
        <br />,
        "Оформление соц. сетей",
        <br />,
        "Паттерны для сайта"
      ]}
      aboutProject={[
        "TYPE ME - научный подход, меняющий жизнь и отношения к лучшему.",
        <br />,
        <br />,
        "На сайте можно пройти тест и определить тип личности, купить руководство по Коду личности, курсы, а также здесь есть интернет- магазин с книгами по психологии."
      ]}

      idea="Создать современный простой графический язык, отталкиваясь от русской версии названия «Код Личности»."
      ideaDescription="Каждый посетитель сайта может будто по кусочкам собрать свой тип личности и узнать, кем он является. Отсюда родилась идея создания игровой мозаики, собирая которую, можно найти все новые и новые комбинации."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#5538a6', color: 'white'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Type Me – научный подход, меняющий жизнь и отношения к лучшему!"
      brandDetail="Узнайте в чём ваша сила ,какие профессии истинно ваши, что может стать делом вашей жизни."

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

export default Typeme