import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import Button from '../index';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Button />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const disabled = true;
    const color = 'blue';
    const wrapper = mount(<Button disabled color="blue" />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.prop('disabled')).toBe(disabled);
    expect(renderedComponent.prop('color')).toBe(color);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<Button>{children}</Button>);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
