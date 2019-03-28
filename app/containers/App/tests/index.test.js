import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Route } from 'react-router-dom';

import GlobalStyle from '../../../global-styles';
import NavBar from '../NavBar';
import App from '../index';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<App />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render the navbar', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(NavBar)).toHaveLength(1);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });

  it('should render global styles', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(GlobalStyle)).toHaveLength(1);
  });
});
