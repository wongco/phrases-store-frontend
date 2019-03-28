import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<HomePage />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
