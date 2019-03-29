/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { ADD_PHRASE } from 'containers/App/constants';
import { addPhraseCompleted, addPhraseError } from 'containers/App/actions';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import addPhraseSaga, { addPhrase } from '../saga';

describe('addPhraseSaga Watcher Saga', () => {
  const addPhraseSagaListener = addPhraseSaga();
  it('should start task to watch for ADD_PHRASE action', () => {
    const takeLatestDescriptor = addPhraseSagaListener.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_PHRASE, addPhrase));
  });
});

describe('addPhrase Worker Saga', () => {
  let addPhraseGenerator;

  // reinit test, one for success response, one for failure response
  beforeEach(() => {
    const text = 'testUserInput';
    addPhraseGenerator = addPhrase({ text });

    const callDescriptor = addPhraseGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the addPhrasesCompleted then push to /phrases if api response succeeds', () => {
    const putDescriptor = addPhraseGenerator.next().value;
    expect(putDescriptor).toEqual(put(addPhraseCompleted()));

    const putPushDescriptor = addPhraseGenerator.next().value;
    expect(putPushDescriptor).toEqual(put(push('/phrases')));
  });

  it('should call the addPhraseError action if api response errors', () => {
    const error = new Error('Some API error');
    const putDescriptor = addPhraseGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(addPhraseError(error)));
  });
});
