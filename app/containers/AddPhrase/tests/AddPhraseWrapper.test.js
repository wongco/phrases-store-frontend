import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import AddPhraseWrapper from '../AddPhraseWrapper';

describe('<AddPhraseWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<AddPhraseWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<AddPhraseWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<AddPhraseWrapper id={id} />);
    const renderedComponent = enzymeFind(wrapper, AddPhraseWrapper);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<AddPhraseWrapper>{children}</AddPhraseWrapper>);
    const renderedComponent = enzymeFind(wrapper, AddPhraseWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
