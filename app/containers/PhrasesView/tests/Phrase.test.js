import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Phrase from '../Phrase';

describe('<Phrase />', () => {
  it('renders without crashing', () => {
    shallow(<Phrase />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<Phrase />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const text = 'inputText';
    const wrapper = mount(<Phrase text={text} />);
    const PhraseComponent = wrapper.find(Phrase);
    expect(PhraseComponent.prop('text')).toBe(text);
  });

  it('should render an li element', () => {
    const wrapper = mount(<Phrase />);
    const PhraseComponent = wrapper.find('li');
    expect(PhraseComponent).toHaveLength(1);
  });
});
