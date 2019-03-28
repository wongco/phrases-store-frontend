import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import toJson from 'enzyme-to-json';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('renders without crashing', () => {
    shallow(<Wrapper />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Wrapper />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render children properly', () => {
    const wrapper = mount(
      <Wrapper>
        <div>Hello!</div>
      </Wrapper>,
    );
    const renderedComponent = enzymeFind(wrapper, Wrapper);
    const divs = renderedComponent.find('div');
    expect(divs).toHaveLength(2);
    expect(divs.last().text()).toEqual('Hello!');
  });
});
