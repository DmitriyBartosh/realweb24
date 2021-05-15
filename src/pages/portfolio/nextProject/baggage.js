import realelementPromo from '../../../assets/img/portfolio/preview/3.jpg'
import ridecampPromo from '../../../assets/img/portfolio/preview/4.jpg'

import realelementPromoWebp from '../../../assets/webp/portfolio/preview/3.webp'
import ridecampPromoWebp from '../../../assets/webp/portfolio/preview/4.webp'

export const portfolioList = [
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
  {
    id: 4,
    name: 'Ride Camp',
    desc: 'Спортивный лагерь',
    service: 'Брендинг',
    promo: ridecampPromo,
    promoWebp: ridecampPromoWebp,
    link: '/portfolio/ridecamp',
    orientation: 'portfolioHorizontal',
  },
]