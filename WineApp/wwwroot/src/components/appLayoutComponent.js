import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WinesInStockContainer from '../containers/winesInStockContainer';
import WineArchiveContainer from '../containers/wineArchiveContainer';
import NavContainer from './navContainer';

class AppLayoutComponent extends Component {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <div>
            <Route path="/" component={NavContainer} />
            <Route path="/inventory" component={WinesInStockContainer} />
            <Route path="/archive" component={WineArchiveContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppLayoutComponent;
