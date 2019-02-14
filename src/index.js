import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './components/LogIn'
import ShowContainer from './components/ShowContainer'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <App />
      <Route exact path='/' component={LogIn} />
      <Route exact path='/shows' component={ShowContainer} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
