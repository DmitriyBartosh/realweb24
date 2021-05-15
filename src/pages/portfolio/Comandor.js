import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/comandor';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/comandor'

import {isWebpSupported} from 'react-image-webp/dist/utils';


function Comandor() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'black'}}
      subtitle={[
        "Логотип Службы Контроля",
        <br />,
        "для сети «Командор»"
      ]}
      title="Служба Контроля"
      preview={isWebpSupported() ?images[0].webp : images[0].jpg}

      services="Логотип"
      aboutProject={[
        "Служба Контроля сети «Командор» проводит мероприятия по внутреннему контролю (проверки).",
        <br />,
        <br />,
        "Также оформляет результаты проверок, подготавливает рекомендации по устранению выявленных недостатков и осуществляет последующий контроль над их устранением."
      ]}

      idea="Разработать визуальный образ - современный, динамичный, подчёркивающий специализацию компании."
      ideaDescription="Специфика деятельности Службы Контроля сети Командора предъявляла жёсткие требования к стилистике и функциональности её визуального образа. С одной стороны, он должен быть «сдержанным» и «нейтральным», чтобы не привлекать к себе излишнего внимания. С другой – «сильным» и «технологичным», выражая индивидуальность бренда и вызывая ассоциации с прогрессивной специальной службой контроля."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#dcdcdc'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Прогрессивная служба контроля залог успешной работы всей сети!"
      brandDetail="Новый логотип будет последовательно распространён на большое количество носителей – от спецодежды персонала и деловой документации до транспортных средств и экстерьера и интерьера представительств Службы Контроля «Командор»."

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

export default Comandor