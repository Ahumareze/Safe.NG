import React, { useEffect } from 'react';
import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';

//Imported Screens
import { Home, Crime } from './screens';
import { useDispatch } from 'react-redux';

//Imported components
import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.init())
  }, [])

  return (
    <Switch>
      <Route path={'/'} exact component={Home} />
      <Route path={'/crimes'} component={Crime} />
    </Switch>
  );
}

export default App;
