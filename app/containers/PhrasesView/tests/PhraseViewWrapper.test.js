import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import PhraseViewWrapper from '../PhraseViewWrapper';

describe('<PhraseViewWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<PhraseViewWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<PhraseViewWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<PhraseViewWrapper id={id} />);
    const renderedComponent = enzymeFind(wrapper, PhraseViewWrapper);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<PhraseViewWrapper>{children}</PhraseViewWrapper>);
    const renderedComponent = enzymeFind(wrapper, PhraseViewWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
