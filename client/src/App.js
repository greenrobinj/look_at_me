import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Apps from './components/Apps'
import AppView from './components/AppView'
import Wrong from './components/Wrong'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apps" component={Apps} />
    <Route exact path="/apps/:id" component={AppView} />
    <Route component={Wrong} />
  </Switch>
);

export default App;
