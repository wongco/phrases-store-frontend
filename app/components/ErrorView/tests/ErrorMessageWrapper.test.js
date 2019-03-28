import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';

import ErrorMessageWrapper from '../ErrorMessageWrapper';

describe('<ErrorMessageWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<ErrorMessageWrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<ErrorMessageWrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(
      <ErrorMessageWrapper>{children}</ErrorMessageWrapper>,
    );
    const renderedComponent = enzymeFind(wrapper, ErrorMessageWrapper);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
