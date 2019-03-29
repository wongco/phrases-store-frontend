/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { LOAD_PHRASES } from 'containers/App/constants';
import { phrasesLoaded, phrasesLoadingError } from 'containers/App/actions';
import { put, takeLatest } from 'redux-saga/effects';
import phrasesViewSaga, { getPhrases } from '../saga';

describe('phrasesViewSaga Watcher Saga', () => {
  const getPhrasesViewSaga = phrasesViewSaga();
  it('should start task to watch for LOAD_PHRASES action', () => {
    const takeLatestDescriptor = getPhrasesViewSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_PHRASES, getPhrases));
  });
});

describe('getPhrases Worker Saga', () => {
  let getPhraseGenerator;

  // reinit test, one for success response, one for failure response
  beforeEach(() => {
    getPhraseGenerator = getPhrases();

    const callDescriptor = getPhraseGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch phrasesLoaded if api response succeeds', () => {
    const phrases = [{ id: 1, text: 'hello', createdat: 'some date' }];
    const mockAPIResponse = {
      data: {
        phrases,
      },
    };
    const putDescriptor = getPhraseGenerator.next(mockAPIResponse).value;
    expect(putDescriptor).toEqual(put(phrasesLoaded(phrases)));
  });

  it('should call the phrasesLoadingError action if api response errors', () => {
    const error = new Error('Some API error');
    const putDescriptor = getPhraseGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(phrasesLoadingError(error)));
  });
});
