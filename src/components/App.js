import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/App.scss';

class App extends Component {
  render() {
    const { ex, doEx } = this.props;
    return (
      <div className="app">
        <button type="button" onClick={() => doEx(ex === 'on' ? 'off' : 'on')}>doEx</button>
        <em>{ex}</em>
      </div>
    );
  }
}

App.propTypes = {
  ex: PropTypes.string.isRequired,
  doEx: PropTypes.func.isRequired,
};

export default App;
