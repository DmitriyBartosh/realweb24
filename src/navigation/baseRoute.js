import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Main from '../pages/MainPage'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Chair from '../components/About/chair/Chair'

import Atlas from '../pages/portfolio/Atlas'
import Baggage from '../pages/portfolio/Baggage'
import Iamstudio from '../pages/portfolio/Iamstudio'
import Ridecamp from '../pages/portfolio/Ridecamp'
import Typeme from '../pages/portfolio/Typeme'
import Realelement from '../pages/portfolio/Realelement'
import Kiwiart from '../pages/portfolio/Kiwiart'
import Gratis from '../pages/portfolio/Gratis'
import Isense from '../pages/portfolio/Isense'
import Comandor from '../pages/portfolio/Comandor'
import Realpeople from '../pages/portfolio/Realpeople'
import Anastom from '../pages/portfolio/Anastom'

import Header from '../components/header/Header'
import Links from '../components/Links/Links'

const routes = [
  {  path: '/', name: "Main", Component: Main },
  {  path: '/about', name: "About", Component: About },
  {  path: '/portfolio', name: "Portfolio", Component: Portfolio },
  {  path: '/contact', name: "Contact", Component: Contact },
  {  path: '/chair', name: "Chair", Component: Chair },

  {  path: '/portfolio/atlas', name: "Atlas", Component: Atlas },
  {  path: '/portfolio/baggage', name: "Baggage", Component: Baggage },
  {  path: '/portfolio/iamstudio', name: "Iamstudio", Component: Iamstudio },
  {  path: '/portfolio/ridecamp', name: "Ridecamp", Component: Ridecamp },
  {  path: '/portfolio/typeme', name: "Typeme", Component: Typeme },
  {  path: '/portfolio/realelement', name: "Realelement", Component: Realelement },
  {  path: '/portfolio/kiwiart', name: "Kiwiart", Component: Kiwiart },
  {  path: '/portfolio/gratis', name: "Gratis", Component: Gratis },
  {  path: '/portfolio/isense', name: "Isense", Component: Isense },
  {  path: '/portfolio/comandor', name: "Comandor", Component: Comandor },
  {  path: '/portfolio/realpeople', name: "Realpeople", Component: Realpeople },
  {  path: '/portfolio/anastom', name: "Anastom", Component: Anastom },
]

function BaseRoute() {
  const location = useLocation();
  
  return (
    <>
    <Header />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {routes.map(({path, name, Component}) => (
          <Route key={name} path={path} exact>
            <Component />
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
    <Links />
    </>
  )
}

export default BaseRoute
