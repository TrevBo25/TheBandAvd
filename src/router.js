import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import TheBand from './components/TheBand'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/band" component={TheBand} />
  </Switch>
)