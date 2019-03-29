import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectPhrases,
  makeSelectLocation,
} from 'containers/App/selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({ phrases: [] });
    const mockedState = fromJS({
      global: {
        phrases: [],
      },
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading state', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading: false,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error state', () => {
    const error = true;
    const mockedState = fromJS({
      global: {
        error: true,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectPhrases', () => {
  const phrasesSelector = makeSelectPhrases();
  it('should select the phrases in state', () => {
    const phrases = fromJS([
      {
        id: 1,
        text: 'hello',
        createdat: 'some date',
      },
    ]);
    const mockedState = fromJS({
      global: {
        phrases,
      },
    });
    expect(phrasesSelector(mockedState)).toEqual(phrases);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    );
  });
});
