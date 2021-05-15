import comandorPromo from '../../../assets/img/portfolio/preview/10.jpg'
import atlasPromo from '../../../assets/img/portfolio/preview/11.jpg'

import comandorPromoWebp from '../../../assets/webp/portfolio/preview/10.webp'
import atlasPromoWebp from '../../../assets/webp/portfolio/preview/11.webp'

export const portfolioList = [
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