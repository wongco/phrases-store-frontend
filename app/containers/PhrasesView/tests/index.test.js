import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import { IntlProvider } from 'react-intl';

import ErrorView from 'components/ErrorView';
import LoadingIndicator from 'components/LoadingIndicator';
import { PhrasesView } from '../index';
import PhrasesWrapper from '../PhrasesWrapper';
import Phrase from '../Phrase';
import NoticeWrapper from '../NoticeWrapper';

describe('<PhrasesView />', () => {
  const phrases = [
    {
      id: 1,
      text: 'first phrase!',
    },
    {
      id: 2,
      text: 'second phrase!',
    },
  ];
  const mockLoadPhrases = jest.fn();

  it('renders without crashing', () => {
    shallow(<PhrasesView phrases={phrases} loadPhrases={mockLoadPhrases} />);
  });

  it('matches snapshot for default criteria', () => {
    const wrapper = shallow(
      <PhrasesView phrases={phrases} loadPhrases={mockLoadPhrases} />,
    );
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  describe('rendering tests', () => {
    it('renders imported components normally on load', () => {
      const wrapper = shallow(
        <PhrasesView phrases={phrases} loadPhrases={mockLoadPhrases} />,
      );
      const PhrasesWrapperComponent = wrapper.find(PhrasesWrapper);
      expect(PhrasesWrapperComponent).toHaveLength(1);
      const PhraseComponent = wrapper.find(Phrase);
      expect(PhraseComponent).toHaveLength(2);
    });

    it('should not render ErrorView or LoadingIndicator initially', () => {
      const wrapper = shallow(
        <PhrasesView
          phrases={phrases}
          loadPhrases={mockLoadPhrases}
          loading={false}
          error={false}
        />,
      );
      const loadingComponent = wrapper.find(LoadingIndicator);
      expect(loadingComponent).toHaveLength(0);
      const errorView = wrapper.find(ErrorView);
      expect(errorView).toHaveLength(0);
    });

    it('when loading is true, renders LoadingIndicator, no phrases rendered', () => {
      const wrapper = shallow(
        <PhrasesView phrases={phrases} loadPhrases={mockLoadPhrases} loading />,
      );
      const loadingComponent = wrapper.find(LoadingIndicator);
      expect(loadingComponent).toHaveLength(1);
      const PhraseComponent = wrapper.find(Phrase);
      expect(PhraseComponent).toHaveLength(0);
    });

    it('when error is true, renders ErrorView', () => {
      const wrapper = shallow(
        <PhrasesView phrases={phrases} loadPhrases={mockLoadPhrases} error />,
      );
      const errorView = wrapper.find(ErrorView);
      expect(errorView).toHaveLength(1);
    });

    it('render notice if there are no phrases on api', () => {
      const mockPhrasesEmpty = [];
      const wrapper = mount(
        <IntlProvider locale="en">
          <PhrasesView
            phrases={mockPhrasesEmpty}
            loadPhrases={mockLoadPhrases}
          />
        </IntlProvider>,
      );
      const NoticeWrapperComponent = enzymeFind(wrapper, NoticeWrapper);
      expect(NoticeWrapperComponent).toHaveLength(1);
    });
  });

  describe('lifecycle method tests', () => {
    it('upon mounting, loadPhrases is called', () => {
      const loadPhrasesLocal = jest.fn();
      shallow(<PhrasesView phrases={phrases} loadPhrases={loadPhrasesLocal} />);

      expect(loadPhrasesLocal).toHaveBeenCalled();
    });

    it('upon unmount, clearAppError is called', () => {
      const mockClearAppError = jest.fn();
      const wrapper = shallow(
        <PhrasesView
          phrases={phrases}
          loadPhrases={mockLoadPhrases}
          clearAppError={mockClearAppError}
        />,
      );
      wrapper.unmount();

      expect(mockClearAppError).toHaveBeenCalled();
    });
  });
});
