import React, { Component, Fragment } from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/productos" component={ProductList} />
          <Route path="/productos/:id" component={Details} />
          <Redirect from="/" to="productos" />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
