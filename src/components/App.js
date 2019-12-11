import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import BadgeEdit from '../pages/BadgeEdit'
import NotFound from '../pages/NotFound'
import BadgeDetails from '../pages/BadgeDetailsContainer'

function App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/badges" component={Badges}/>
              <Route exact path="/badges/new" component={BadgeNew}/>
              <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
              <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
              <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App