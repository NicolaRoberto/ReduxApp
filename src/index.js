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

import NotFound from "./components/NotFound";
import Counter from "./components/Counter";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import UserDetail from "./components/UserDetail";
import Login from "./components/Login";

import { Nav } from "react-bootstrap";

//Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

//Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const routing = (
  <Router>
      <Nav>
        <Nav.Item>
          <Nav.Link className="py-2 mx-10" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 mx-10" href="/counter">Counter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 mx-10" href="/addUser">Aggiungi Utente</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 mx-10" href="/users">Lista Utenti</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link className="py-2 mx-10" href="/login">Login</Nav.Link>
        </Nav.Item> */}
      </Nav>

      <hr />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={App} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/userDetails/:id" component={UserDetail} />
        <Route exact path="/userList" component={Users} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>, document.getElementById("root"));

serviceWorker.unregister();