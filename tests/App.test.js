import React from 'react';
import { connect } from 'react-redux';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('first test', () => {
  it('should render button', () => {
    const expectedState = { color: 'blueviolet' };
    const mapStateToProps = state => ({
      state
    });
    const ConnectedComponent = connect(mapStateToProps)(App);
    const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
    expect(component.props().state).toBe(expectedState);
  });
});
