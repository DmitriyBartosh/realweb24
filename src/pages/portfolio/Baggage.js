import React from 'react'
import Portfolio from '../../components/portfolioDetail/PortfolioDetail'
import NextProject from '../../components/nextProject/NextProject'
import { portfolioList } from './nextProject/baggage';
import Cooperation from '../../components/Cooperation/Cooperation'
import images from './picture/baggage'

import {isWebpSupported} from 'react-image-webp/dist/utils';


function Baggage() {
  return (
    <>
    <Portfolio 
      mainColor={{backgroundColor:'#2a2f19'}}
      subtitle={[
        "Сайт для магазина",
        <br />,
        "сумок и рюкзаков"
      ]}
      title="Baggage"
      preview={isWebpSupported() ? images[0].webp : images[0].jpg}

      services={[
        "Сайт",
        <br />,
        "Фото/видео"
      ]}
      aboutProject={[
        "Baggage родом из самого Сердца Сибири. Команда изготавливает рюкзаки и сумки: крепкие, как настоящие морозы и красивые как сибирские девушки.",
        <br />,
        <br />,
        "Используются лучшие материалы для изготовления. Японские молнии YKK и итальянская фурнитура 2М делают надежными рюкзаки и сумки."
      ]}

      idea="Используя основную концепцию бренда, создать удобный и простой для пользователя сайт-визитку с карточками товара."
      ideaDescription="Мы создали сайт-визитку с карточками товара и лукбуком. Таким образом партнеры смогут наглядно на моделях посмотреть и сразу же выбрать в каталоге нужный товар. Цветовая палитра подобрана исходя из основной идеи «Родом из самого сердца Сибири» Зеленые, черные, серые и белые оттенки создают общее настроение для сайта."
      ideaPhoto={isWebpSupported() ? images[1].webp : images[1].jpg}
      colorIdea={{backgroundColor: '#ececec'}}

      img1={isWebpSupported() ? images[2].webp : images[2].jpg}
      img2={isWebpSupported() ? images[3].webp : images[3].jpg}

      backPhoto={isWebpSupported() ? images[4].webp : images[4].jpg}
      backPhotoMob={isWebpSupported() ? images[4].mobWebp : images[4].mob}

      brandLogo={isWebpSupported() ? images[5].webp : images[5].jpg}
      brandSlogan="Цель Baggage сделать отдых и путешествия приятными и комфортными для клиентов"
      brandDetail="Baggage-это братство людей,которые любят жизнь,сворачивают горы и покоряют цели."

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