import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/realpeople';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/realpeople'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Realpeople() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'black'}}
      subtitle="Брендинг и приложение для компании"
      title="REAL PEOPLE"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Приложение",
        <br />,
        "Логотип",
        <br />,
        "Фирменный стиль"
      ]}
      aboutProject={[
        "Real People - удобный ресурс, на котором в пару кликов можно найти подходящий качественный товар или услугу в Красноярске.",
        <br />,
        <br />,
        "Требовалось создать фирменный стиль и приложение."
      ]}

      idea="Создать яркий, удобный и лаконичный дизайн для приложения."
      ideaDescription="Real People — это ресурс, где объединяют лучших города Красноярска. Перед нами стояла нелегкая задача разделить фрилансеров и компании на категории. Чтобы обеспечить быстрое и удобное использование, мы создали интуитивно понятные категории и выделили каждую за счет иллюстраций и цвета."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#000000', color: 'white'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan={"Выбирай категорию и находи товар или услугу в пару кликов!"}
      brandDetail="Мы объединили лучших тщательно провели отбор, разделили фрилансеров и компании на категории."

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

export default Realpeople