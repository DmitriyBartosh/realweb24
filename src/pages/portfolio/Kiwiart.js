import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/kiwiart';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/kiwiart'

import {isWebpSupported} from 'react-image-webp/dist/utils';

function Kiwiart() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#ede9e4', color: "#333"}}
      introTitle={{color: '#333'}}
      subtitle={["Брендинг для магазина",
      <br />,
      "украшений ручной работы"
      ]}
      title="Kiwi Art"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Логотип",
        <br />,
        "Фирменный стиль",
        <br />,
        "Оформление соц. сетей"
      ]}
      aboutProject={[
        "Kiwi Art - мастерская ювелирных изделий, сделанных вручную по индивидуальным заказам из серебра и натуральных камней.",
        <br />,
        <br />,
        "Авторы используют «растительно - звериные темы» в своих работах. Задачей являлось создать концепт, не перегруженный декором и легкий для восприятия, как и сами украшения."
      ]}

      idea="Подчеркнуть особенность украшений ручной работы через графический язык."
      ideaDescription="Опираясь на идею «сложное в простом», которая прослеживается в работе авторов ювелирных украшений, мы передали смысл и красоту в нескольких линиях, минималистично запаковав все в фирменный стиль, используя нежные и утонченные цвета и растительные, животные паттерны."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#d8ccc2'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Kiwi Art – Минималистичные украшения ручной работы, с изюминкой для Вас."
      brandDetail="Самобытные украшения из серебра для тех, кто хочет быть особенным."

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

export default Kiwiart