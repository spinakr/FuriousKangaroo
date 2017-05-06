import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WinesInStockContainer from '../containers/winesInStockContainer';
import WineArchiveContainer from '../containers/wineArchiveContainer';
import NavContainer from '../containers/navContainer';
import FormContainer from '../containers/formContainer';

class AppLayoutComponent extends Component {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <div>
            <Route path="/" component={NavContainer} />
            <Route exact path="/" component={FormContainer} />
            <Route path="/inventory" component={WinesInStockContainer} />
            <Route path="/archive" component={WineArchiveContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppLayoutComponent;
