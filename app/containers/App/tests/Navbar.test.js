import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../NavBar';

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Navbar />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
