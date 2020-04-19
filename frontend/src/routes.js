import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import main from './pages/main';
import details from './pages/details'

export default function Routes(){

  return (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {main}/>
      <Route path = "/details/:id" component = {details}/>
    </Switch>
  </BrowserRouter>
  );
} 