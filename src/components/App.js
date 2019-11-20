import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'

function App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/Badges" component={Badges}/>
              <Route path="/Badge/new" component={BadgeNew}/>
              <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App