import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import WinesInStockContainer from '../containers/winesInStockContainer';
import WineArchiveContainer from '../containers/wineArchiveContainer';
import GridComponent from './gridComponent';

const AppLayoutComponent = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Wine Cooler <small>current wine inventory</small></h1>
      </div>

      <GridComponent>
        <WinesInStockContainer />
        <WineArchiveContainer />
      </GridComponent>
    </div>
  );
};

export default AppLayoutComponent;
