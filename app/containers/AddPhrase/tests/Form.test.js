import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import Form from '../Form';

describe('<Form />', () => {
  it('renders without crashing', () => {
    shallow(<Form />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Form />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<Form id={id} />);
    const renderedComponent = enzymeFind(wrapper, Form);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<Form>{children}</Form>);
    const renderedComponent = enzymeFind(wrapper, Form);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
