import 'whatwg-fetch'; // Native fetch polyfill
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppLayoutComponent from './components/appLayoutComponent';
import winesModule, { fetchWines } from './modules/winesModule';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  winesModule,
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
