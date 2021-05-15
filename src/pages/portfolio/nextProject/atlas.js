import realpeoplePromo from '../../../assets/img/portfolio/preview/1.jpg'
import anastomPromo from '../../../assets/img/portfolio/preview/12.jpg'

import anastomPromoWebp from '../../../assets/webp/portfolio/preview/12.webp'
import realpeoplePromoWebp from '../../../assets/webp/portfolio/preview/1.webp'

export const portfolioList = [
  {
    id: 12,
    name: 'Энастом',
    desc: 'Стоматологическое производство',
    service: 'Логотип',
    promo: anastomPromo,
    promoWebp: anastomPromoWebp,
    link: '/portfolio/anastom',
    orientation: 'portfolioHorizontal',
  },
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
]