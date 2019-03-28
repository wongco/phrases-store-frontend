import React from 'react';
import { enzymeFind } from 'styled-components/test-utils';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmojiWrapper from '../EmojiWrapper';

describe('<EmojiWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<EmojiWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<EmojiWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<EmojiWrapper>{children}</EmojiWrapper>);
    const renderedComponent = enzymeFind(wrapper, EmojiWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
