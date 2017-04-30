import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import WineListContainer from './containers/wineListContainer';

const style = {
  border: 'solid',
  margin: 'auto',
  width: '90%',
  textAlign: 'center',
};

const App = () => {
  return (
    <div style={style}>
      <h1>Wine Cooler</h1>
      <WineListContainer />
    </div>
  );
};

export default App;
