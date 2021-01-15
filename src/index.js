import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.generated.css';

import { createBrowserHistory } from 'history'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/SpecialRoutes/PrivateRoute'
import AdminRoute from './components/SpecialRoutes/AdminRoute'
import Header from './components/Header';


const customHistory = createBrowserHistory()

const routing = ( 
  <Router history={customHistory}>
    <Header/>
      <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/" component={Home} />

          </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

