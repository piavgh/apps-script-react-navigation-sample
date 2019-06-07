import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import PageOne from './pageone'
import PageTwo from './pagetwo'

export default class Sidebar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Redirect to="/" />
        <Switch>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </Switch>
      </BrowserRouter>
    )
  }
}
