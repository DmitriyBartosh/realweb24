import ridecampPromo from '../../../assets/img/portfolio/preview/4.jpg'
import isensePromo from '../../../assets/img/portfolio/preview/5.jpg'

import ridecampPromoWebp from '../../../assets/webp/portfolio/preview/4.webp'
import isensePromoWebp from '../../../assets/webp/portfolio/preview/5.webp'

export const portfolioList = [
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
  {
    id: 5,
    name: 'Isense',
    desc: 'Свечи для дома',
    service: 'Брендинг',
    promo: isensePromo,
    promoWebp: isensePromoWebp,
    link: '/portfolio/isense',
    orientation: 'portfolioVertical',
  },
]