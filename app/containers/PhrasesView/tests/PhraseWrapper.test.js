import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import PhrasesWrapper from '../PhrasesWrapper';

describe('<PhrasesWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<PhrasesWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<PhrasesWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<PhrasesWrapper id={id} />);
    const renderedComponent = enzymeFind(wrapper, PhrasesWrapper);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<PhrasesWrapper>{children}</PhrasesWrapper>);
    const renderedComponent = enzymeFind(wrapper, PhrasesWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
