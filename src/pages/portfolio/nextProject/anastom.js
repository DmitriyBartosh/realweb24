import realpeoplePromo from '../../../assets/img/portfolio/preview/1.jpg'
import baggegePromo from '../../../assets/img/portfolio/preview/2.jpg'

import realpeoplePromoWebp from '../../../assets/webp/portfolio/preview/1.webp'
import baggegePromoWebp from '../../../assets/webp/portfolio/preview/2.webp'

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
    id: 2,
    name: 'Baggage',
    desc: 'Презентация сумок и рюкзаков',
    service: 'Сайт',
    promo: baggegePromo,
    promoWebp: baggegePromoWebp,
    link: '/portfolio/baggage',
    orientation: 'portfolioHorizontal',
  },
]