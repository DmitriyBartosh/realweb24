import isensePromo from '../../../assets/img/portfolio/preview/5.jpg'
import iamstudioPromo from '../../../assets/img/portfolio/preview/6.jpg'

import isensePromoWebp from '../../../assets/webp/portfolio/preview/5.webp'
import iamstudioPromoWebp from '../../../assets/webp/portfolio/preview/6.webp'

export const portfolioList = [
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
]