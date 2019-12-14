import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../components/Login';
import Registro from '../components/Registro';
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';
import Player from '../components/Player';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
