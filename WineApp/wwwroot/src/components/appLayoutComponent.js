import React from 'react';
import WinesInStockContainer from '../containers/winesInStockContainer';
import WineArchiveContainer from '../containers/wineArchiveContainer';

const style = {
  border: 'solid',
  margin: 'auto',
  width: '90%',
  textAlign: 'center',
};

const AppLayoutComponent = () => {
  return (
    <div style={style}>
      <h1>Wine Cooler</h1>
      <WinesInStockContainer />
      <WineArchiveContainer />
    </div>
  );
};

export default AppLayoutComponent;
