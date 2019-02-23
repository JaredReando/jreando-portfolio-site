import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Error404 from './Error404';
import styled from 'styled-components';


const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route
          exact path='/'
          component={Main}
        />
        <Route
          component={Error404}
        />
      </Switch>
    </Wrapper>
  );
}

export default App;
