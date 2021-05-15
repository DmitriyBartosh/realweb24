import realpeoplePromo from '../../../assets/img/portfolio/preview/1.jpg'
import atlasPromo from '../../../assets/img/portfolio/preview/11.jpg'

import realpeoplePromoWebp from '../../../assets/webp/portfolio/preview/1.webp'
import atlasPromoWebp from '../../../assets/webp/portfolio/preview/11.webp'

export const portfolioList = [
  {
    id: 1,
    name: 'Real People',
    desc: 'Маркетплейс',
    service: 'Сайт и приложение',
    promo: realpeoplePromo,
    promoWebp: realpeoplePromoWebp,
    link: '/portfolio/realpeople',
    orientation: 'portfolioVertical',
  },
  {
    id: 11,
    name: 'Atlas',
    desc: 'Бар-кафетерий',
    service: 'Брендинг',
    promo: atlasPromo,
    promoWebp: atlasPromoWebp,
    link: '/portfolio/atlas',
    orientation: 'portfolioHorizontal',
  },
]