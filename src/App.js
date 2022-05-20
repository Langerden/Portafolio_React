import React from 'react';
import { Route, Switch } from 'wouter';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/homepage/:email' component={Homepage} />
        <Route><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;