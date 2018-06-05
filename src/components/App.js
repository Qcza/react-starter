// @flow
import React, { Component } from 'react';
import '../scss/App.scss';
import type { Dispatch } from '../types/redux';

type Props = {
  color: string,
  changeColor: string => Dispatch
}

class App extends Component<Props> {
  render() {
    const { color, changeColor } = this.props;
    return (
      <div className="app">
        <h1 style={{ color }} onClick={() => changeColor(color === 'blueviolet' ? 'orange' : 'blueviolet')}>react-starter</h1>
      </div>
    );
  }
}

export default App;
