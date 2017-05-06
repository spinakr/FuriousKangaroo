import 'whatwg-fetch'; // Native fetch polyfill
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppLayoutComponent from './components/appLayoutComponent';
import wines, { fetchWines } from './modules/wines';
import form from './modules/form';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  combineReducers({ wines, form }),
  composeEnhancers(applyMiddleware(thunk)),
);

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchWines());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <AppLayoutComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
