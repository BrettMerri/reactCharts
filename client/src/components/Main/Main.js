import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import RandomNumbers from '../RandomNumbers/RandomNumbers';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/random-numbers' component={RandomNumbers}/>
    </Switch>
  </main>
);

export default Main;