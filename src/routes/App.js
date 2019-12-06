import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../components/Login';
import Registro from '../components/Registro';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Registro} />
    </Switch>
  </Router>
);

export default App;
