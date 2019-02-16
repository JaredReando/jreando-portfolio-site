import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Project from './Project';
import ProjectList from './ProjectList';
import HomePage from './HomePage';
import Error404 from './Error404';
import Modal from './Modal';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={HomePage}
        />
        <Route
          exact path='/modal'
          component={Modal}
        />
        <Route
          component={Error404}
        />
      </Switch>
    </div>
  );
}




export default App;
