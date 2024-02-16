import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CycleTracking from './views/cycle-tracking'
import ProductPage from './views/product-page'
import BlogPage from './views/blog-page'
import PremiumPlans from './views/premium-plans'
import SubscriptionPage from './views/subscription-page'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={CycleTracking} exact path="/cycle-tracking" />
        <Route component={ProductPage} exact path="/product-page" />
        <Route component={BlogPage} exact path="/blog-page" />
        <Route component={PremiumPlans} exact path="/premium-plans" />
        <Route component={SubscriptionPage} exact path="/subscription-page" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
