import iamstudioPromo from '../../../assets/img/portfolio/preview/6.jpg'
import gratisPromo from '../../../assets/img/portfolio/preview/7.jpg'

import iamstudioPromoWebp from '../../../assets/webp/portfolio/preview/6.webp'
import gratisPromoWebp from '../../../assets/webp/portfolio/preview/7.webp'

export const portfolioList = [
  {
    id: 6,
    name: 'I am Studio',
    desc: 'Магазин женской одежды',
    service: 'Брендинг',
    promo: iamstudioPromo,
    promoWebp: iamstudioPromoWebp,
    link: '/portfolio/iamstudio',
    orientation: 'portfolioHorizontal',
  },
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
]