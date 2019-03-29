import React from 'react';
import { enzymeFind } from 'styled-components/test-utils';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '../Input';

describe('<Input />', () => {
  it('renders without crashing', () => {
    shallow(<Input />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Input />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const disabled = true;
    const type = 'text';
    const wrapper = mount(<Input disabled type="text" />);
    const renderedComponent = enzymeFind(wrapper, Input);
    expect(renderedComponent.prop('disabled')).toBe(disabled);
    expect(renderedComponent.prop('type')).toBe(type);
  });
});
