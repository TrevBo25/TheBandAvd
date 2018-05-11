import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import TheBand from './components/TheBand'
import Tour from './components/Tour';
import Media from './components/Media';
import Store from './components/Store';
import Contact from './components/Contact';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/band" component={TheBand} />
    <Route path="/tour" component={Tour} />
    <Route path="/media" component={Media} />
    <Route path="/store" component={Store} />
    <Route path="/contact" component={Contact} />
  </Switch>
)