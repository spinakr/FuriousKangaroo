import 'whatwg-fetch'; // Native fetch polyfill
import React, { Component } from 'react';
import WineListComponent from '../components/wineListComponent';
import getWines from '../services/wineCoolerService';

class WineListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: [{}],
    };
  }
  componentDidMount() {
    getWines().then((wines) => {
      this.setState({
        wines: JSON.parse(wines),
      });
    });
  }

  render() {
    return (
      <div>
        <WineListComponent wines={this.state.wines} />
      </div>
    );
  }
}

export default WineListContainer;
