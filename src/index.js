import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';

import Users from "./components/Users";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Counter from "./components/Counter";

import { Nav } from "react-bootstrap";

//Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

//Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

//const store = createStore(rootReducers);

const routing = (
  <Router>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/counter">Counter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>

      <hr />

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={Users} />
        <Route exact path="/counter" component={Counter} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>, document.getElementById("root"));

serviceWorker.unregister();