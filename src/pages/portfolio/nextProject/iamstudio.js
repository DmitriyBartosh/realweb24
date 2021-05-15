import gratisPromo from '../../../assets/img/portfolio/preview/7.jpg'
import typemePromo from '../../../assets/img/portfolio/preview/8.jpg'

import gratisPromoWebp from '../../../assets/webp/portfolio/preview/7.webp'
import typemePromoWebp from '../../../assets/webp/portfolio/preview/8.webp'

export const portfolioList = [
  {
    id: 7,
    name: 'Гратис',
    desc: 'Прокат автомобилей',
    service: 'Сайт',
    promo: gratisPromo,
    promoWebp: gratisPromoWebp,
    link: '/portfolio/gratis',
    orientation: 'portfolioHorizontal',
  },
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
]