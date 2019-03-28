import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import H1 from '../index';

describe('<H1 />', () => {
  it('renders without crashing', () => {
    shallow(<H1 />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<H1 />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H1 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H1);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<H1>{children}</H1>);
    const renderedComponent = enzymeFind(wrapper, H1);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
