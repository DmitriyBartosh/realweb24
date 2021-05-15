import baggegePromo from '../../../assets/img/portfolio/preview/2.jpg'
import realelementPromo from '../../../assets/img/portfolio/preview/3.jpg'

import baggegePromoWebp from '../../../assets/webp/portfolio/preview/2.webp'
import realelementPromoWebp from '../../../assets/webp/portfolio/preview/3.webp'

export const portfolioList = [
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
  {
    id: 3,
    name: 'RealElement',
    desc: 'Производственная компания',
    service: 'Сайт',
    promo: realelementPromo,
    promoWebp: realelementPromoWebp,
    link: '/portfolio/realelement',
    orientation: 'portfolioHorizontal',
  },
]