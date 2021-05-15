import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/atlas';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/atlas'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Atlas() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#c4ac90'}}
      subtitle="Брендинг для бар-кафетерия"
      title="Atlas buy&fly"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Фирменный стиль",
        <br />,
        "Полиграфия"
      ]}
      aboutProject={[
        "Atlas buy&fly — это уютный бар - кафетерий, с большой винотекой крымских вин который находится в международном аэропорту Симферополя.",
        <br />,
        <br />,
        "Требовалось создать единый дизайн-код в наружном оформлении и печатной продукции"
      ]}

      idea="Используя географию места и формат заведения, создать понятные и узнаваемые паттерны."
      ideaDescription="Опираясь на этимологию названия «Атлас», определяем главное: атлас - сборник таблиц, географических карт и т д. Эта простая мысль помогла нам создать основные паттерны: карты, отметки, точки, пунктиры, волны. Также были использованы атрибуты, определяющие основную тему: самолет, компас, направляющие."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#e1e1e1'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan={[
        "Хорошо проведи время",
        <br />,
        "в ожидании рейса!"
      ]}
      brandDetail="Атлас — это особое место, в котором витает атмосфера скорого путешествия, запах кофе и свежей выпечки."

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

export default Atlas
