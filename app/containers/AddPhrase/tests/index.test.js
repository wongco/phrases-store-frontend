import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Button from 'components/Button';
import H1 from 'components/H1';
import ErrorView from 'components/ErrorView';
import LoadingIndicator from 'components/LoadingIndicator';
import { AddPhrase } from '../index';
import Form from '../Form';
import Input from '../Input';

describe('<AddPhrase>', () => {
  it('renders without crashing', () => {
    shallow(<AddPhrase />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(<AddPhrase />);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  describe('rendering tests', () => {
    it('renders imported components normally on load', () => {
      const wrapper = shallow(<AddPhrase />);

      const H1Component = wrapper.find(H1);
      expect(H1Component).toHaveLength(1);
      const formComponent = wrapper.find(Form);
      expect(formComponent).toHaveLength(1);
      const inputComponent = wrapper.find(Input);
      expect(inputComponent).toHaveLength(1);
      const buttonComponent = wrapper.find(Button);
      expect(buttonComponent).toHaveLength(1);
    });

    it('should not render ErrorView or LoadingIndicator initially', () => {
      const wrapper = shallow(<AddPhrase loading={false} error={false} />);

      const loadingComponent = wrapper.find(LoadingIndicator);
      expect(loadingComponent).toHaveLength(0);
      const errorView = wrapper.find(ErrorView);
      expect(errorView).toHaveLength(0);
    });

    it('when loading is true, renders LoadingIndicator', () => {
      const wrapper = shallow(<AddPhrase loading />);
      const loadingComponent = wrapper.find(LoadingIndicator);
      expect(loadingComponent).toHaveLength(1);
    });

    it('when error is true, renders ErrorView', () => {
      const wrapper = shallow(<AddPhrase error />);
      const errorView = wrapper.find(ErrorView);
      expect(errorView).toHaveLength(1);
    });
  });

  describe('lifecycle method tests', () => {
    it('upon unmount, clearAppError is called', () => {
      const mockClearAppError = jest.fn();
      const wrapper = shallow(<AddPhrase clearAppError={mockClearAppError} />);
      wrapper.unmount();

      expect(mockClearAppError).toHaveBeenCalled();
    });
  });

  describe('component method tests', () => {
    const mockInputEvent = {
      target: {
        name: 'phraseInput',
        value: 'newTest',
      },
    };

    it('handleChange should update state with new event input value', () => {
      const wrapper = shallow(<AddPhrase />);
      const initialState = { ...wrapper.state() };

      wrapper.instance().handleChange(mockInputEvent);
      const updatedState = { ...wrapper.state() };

      expect(initialState).toEqual({ phraseInput: '' });
      expect(updatedState).toEqual({ phraseInput: 'newTest' });
      expect(updatedState).not.toEqual(initialState);
    });

    it('handleSubmit should invoke preventDefault and dispatch addPhrase', () => {
      const mockAddPhrase = jest.fn();
      const mockPreventDefault = jest.fn();
      const mockSubmitEvent = {
        preventDefault: mockPreventDefault,
      };

      const wrapper = shallow(<AddPhrase addPhrase={mockAddPhrase} />);
      wrapper.instance().handleChange(mockInputEvent);
      wrapper.instance().handleSubmit(mockSubmitEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
      expect(mockAddPhrase).toHaveBeenCalled();
      const textArgument = mockAddPhrase.mock.calls[0][0];
      expect(textArgument).toBe('newTest');
    });
  });
});
