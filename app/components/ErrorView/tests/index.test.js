import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';
import ErrorView from '../index';
import EmojiWrapper from '../EmojiWrapper';
import ErrorMessageWrapper from '../ErrorMessageWrapper';

describe('<ErrorView />', () => {
  it('renders without crashing', () => {
    shallow(<ErrorView />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<ErrorView />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<ErrorView id={id} />);
    const renderedComponent = wrapper.find(ErrorView);
    expect(renderedComponent.prop('id')).toBe('testId');
  });

  it('should render its children', () => {
    const children = 'Text';
    const wrapper = mount(<ErrorView>{children}</ErrorView>);
    const renderedComponent = wrapper.find(ErrorView);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

describe('<ErrorView.Image />', () => {
  it('renders without crashing', () => {
    shallow(<ErrorView.Image />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<ErrorView.Image />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const emoji = '🛑';
    const wrapper = mount(<ErrorView.Image emoji={emoji} />);
    const renderedComponent = wrapper.find(ErrorView.Image);
    expect(renderedComponent.prop('emoji')).toBe('🛑');
  });

  it('should render an EmojiWrapper', () => {
    const emoji = '🛑';
    const wrapper = mount(<ErrorView.Image emoji={emoji} />);
    const renderedComponent = enzymeFind(wrapper, EmojiWrapper);
    expect(renderedComponent).toHaveLength(1);
    expect(renderedComponent.text()).toBe(emoji);
  });
});

describe('<ErrorView.Message />', () => {
  it('renders without crashing', () => {
    shallow(<ErrorView.Message />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<ErrorView.Message />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render child prop', () => {
    const text = 'testId';
    const wrapper = mount(<ErrorView.Message>{text}</ErrorView.Message>);
    const renderedComponent = enzymeFind(wrapper, ErrorMessageWrapper);
    expect(renderedComponent).toHaveLength(1);
    expect(renderedComponent.text()).toBe(text);
  });
});
