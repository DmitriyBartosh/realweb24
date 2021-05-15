import typemePromo from '../../../assets/img/portfolio/preview/8.jpg'
import kiwiartPromo from '../../../assets/img/portfolio/preview/9.jpg'

import typemePromoWebp from '../../../assets/webp/portfolio/preview/8.webp'
import kiwiartPromoWebp from '../../../assets/webp/portfolio/preview/9.webp'

export const portfolioList = [
  {
    id: 8,
    name: 'Type me',
    desc: 'Психология',
    service: 'Брендинг',
    promo: typemePromo,
    promoWebp: typemePromoWebp,
    link: '/portfolio/typeme',
    orientation: 'portfolioVertical',
  },
  {
    id: 9,
    name: 'Kiwi art',
    desc: 'Украшения ручной работы',
    service: 'Брендинг',
    promo: kiwiartPromo,
    promoWebp: kiwiartPromoWebp,
    link: '/portfolio/kiwiart',
    orientation: 'portfolioHorizontal',
  },
]