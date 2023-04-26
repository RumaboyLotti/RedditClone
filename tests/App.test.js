import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct text', () => {
    const wrapper = shallow(<MyComponent text="Hello, world!" />);
    expect(wrapper.text()).toBe('Hello, world!');
  });
});