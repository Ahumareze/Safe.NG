import React from 'react';
import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';

//Imported Screens
import { Home, Crime } from './screens';

function App() {
  return (
    <Switch>
      <Route path={'/'} exact component={Home} />
      <Route path={'/crimes'} component={Crime} />
    </Switch>
  );
}

export default App;
