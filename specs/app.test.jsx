import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/app.jsx';

describe('<App />', () => {
  it('assert exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});