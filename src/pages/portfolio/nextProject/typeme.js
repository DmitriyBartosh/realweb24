import kiwiartPromo from '../../../assets/img/portfolio/preview/9.jpg'
import comandorPromo from '../../../assets/img/portfolio/preview/10.jpg'

import kiwiartPromoWebp from '../../../assets/webp/portfolio/preview/9.webp'
import comandorPromoWebp from '../../../assets/webp/portfolio/preview/10.webp'

export const portfolioList = [
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
  {
    id: 10,
    name: 'Командор',
    desc: 'Служба контроля',
    service: 'Логотип',
    promo: comandorPromo,
    promoWebp: comandorPromoWebp,
    link: '/portfolio/comandor',
    orientation: 'portfolioHorizontal',
  },
]