import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { IntlProvider } from 'react-intl';

import Button from 'components/Button';
import H1 from 'components/H1';
import ErrorView from 'components/ErrorView';
import LoadingIndicator from 'components/LoadingIndicator';
import { AddPhrase } from '../index';
import Form from '../Form';
import Input from '../Input';

describe('<AddPhrase>', () => {
  const mockInputEvent = {
    target: {
      name: 'phraseInput',
      value: 'newTest',
    },
  };

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

  describe('computed props validation', () => {
    describe('when props.loading is true', () => {
      it('Input should be passed the correct computed props', () => {
        const wrapper = mount(
          <IntlProvider locale="en">
            <AddPhrase loading />
          </IntlProvider>,
        );
        const inputComponent = enzymeFind(wrapper, Input);
        const inputComponentProps = inputComponent.props();

        expect(inputComponentProps).toHaveProperty('disabled', true);
      });

      it('Button should be passed the correct computed props', () => {
        const wrapper = mount(
          <IntlProvider locale="en">
            <AddPhrase loading />
          </IntlProvider>,
        );
        const buttonComponent = enzymeFind(wrapper, Button);
        const buttonComponentProps = buttonComponent.props();

        expect(buttonComponentProps).toHaveProperty('disabled', true);
      });
    });

    describe('when props.loading is false or undefined', () => {
      it('Input should be passed the correct computed props', () => {
        const wrapper = mount(
          <IntlProvider locale="en">
            <AddPhrase />
          </IntlProvider>,
        );
        const inputComponent = enzymeFind(wrapper, Input);
        const inputComponentProps = inputComponent.props();

        expect(inputComponentProps).toHaveProperty('disabled', undefined);
      });

      it('Button should be passed the correct computed props with empty PhraseInput', () => {
        const wrapper = mount(
          <IntlProvider locale="en">
            <AddPhrase />
          </IntlProvider>,
        );
        const buttonComponent = enzymeFind(wrapper, Button);
        const buttonComponentProps = buttonComponent.props();

        expect(buttonComponentProps).toHaveProperty('disabled', true);
      });

      it('Button should be passed the correct computed props with valid PhraseInput', () => {
        const wrapper = mount(
          <IntlProvider locale="en">
            <AddPhrase />
          </IntlProvider>,
        );

        // update AddPhrase Component with userInput and get updated Button Component
        let AddPhraseComponent = wrapper.find(AddPhrase);
        AddPhraseComponent.instance().handleChange(mockInputEvent);
        wrapper.update();
        // pick up updated AddPhrase Component
        AddPhraseComponent = wrapper.find(AddPhrase);

        const buttonComponent = enzymeFind(AddPhraseComponent, Button);
        const buttonComponentProps = buttonComponent.props();

        expect(buttonComponentProps).toHaveProperty('disabled', false);
      });
    });
  });
});
