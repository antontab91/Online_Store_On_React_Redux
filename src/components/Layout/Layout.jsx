import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../constants'
import Phones from '../Phones/Phones.jsx'
import Basket from '../Basket/Basket.jsx'

const Layout = () => {
  return (
    <Switch>
      <Route to={ROUTES.MAIN} component={Phones} exact></Route>
      <Route to={ROUTES.BASKET} component={Basket}></Route>
      <Redirect to={ROUTES.MAIN}></Redirect>
    </Switch>
  )
}

export default Layout;