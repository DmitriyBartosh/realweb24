import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/ridecamp';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/ridecamp'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Ridecamp() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#289d97'}}
      subtitle="Брендинг для спортивного лагеря"
      title="RIDE camp"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Фирменный стиль",
        <br />,
        "Полиграфия",
      ]}
      aboutProject={[
        "RIDE CAMP - лагерь для детей от 8 до 16 лет, увлекающихся активными хобби и экстремальным спортом.",
        <br />,
        <br />,
        "В лагере есть разные направления: смена по трюковому самокату, тренировки по паркуру, тренировки по спортивным направлениям, тренировки по Брейк дэнсу, BMX."
      ]}

      idea="Создать яркий, молодежный стиль, опираясь на основные направления лагеря и ее аудиторию."
      ideaDescription="Используя атрибуты юных тинэйджеров: самокаты, трамплины, велосипеды, а также расположение лагеря - лесная зона, мы создали яркий и сочный стиль, отражающий в первую очередь культуру ребят, приезжающих в лагерь."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#f3cf00'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="RIDE CAMP - лагерь для настоящих экстремалов!"
      brandDetail="В лагере есть всё необходимое для комфортного проживания, развлечений и спортивных тренировок."

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