import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import NoticeWrapper from '../NoticeWrapper';

describe('<NoticeWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<NoticeWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<NoticeWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<NoticeWrapper id={id} />);
    const renderedComponent = enzymeFind(wrapper, NoticeWrapper);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<NoticeWrapper>{children}</NoticeWrapper>);
    const renderedComponent = enzymeFind(wrapper, NoticeWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
