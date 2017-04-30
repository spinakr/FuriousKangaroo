import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WinesInStockContainer from '../containers/winesInStockContainer';
import WineArchiveContainer from '../containers/wineArchiveContainer';
import NavComponent from './navComponent';

class AppLayoutComponent extends Component {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <div>
            <div className="page-header">
              <h1>Wine Cooler <small>current wine inventory</small></h1>
              <Route path="/" component={NavComponent} />
            </div>

            <Route path="/inventory" component={WinesInStockContainer} />
            <Route path="/archive" component={WineArchiveContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppLayoutComponent;
