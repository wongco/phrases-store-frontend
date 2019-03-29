import { fromJS } from 'immutable';
import appReducer from '../reducer';
import {
  loadPhrases,
  phrasesLoaded,
  phrasesLoadingError,
  addPhrase,
  addPhraseCompleted,
  addPhraseError,
  clearAppError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      phrases: [],
    });
  });

  it('providing no action or incorrect action returns original state', () => {
    const targetAction = {
      action: 'Random Action',
    };

    const newState = appReducer(state, targetAction);
    expect(newState).toEqual(state);
  });

  it('should handle the loadPhrases action correctly', () => {
    const expectedResult = state.set('loading', true).set('error', false);

    const newState = appReducer(state, loadPhrases());
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the phrasesLoaded action correctly', () => {
    const phrases = [{ id: 1, text: 'yay', createdat: 'somedate' }];
    const expectedResult = state.set('phrases', phrases).set('error', false);

    const newState = appReducer(state, phrasesLoaded(phrases));
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the phrasesLoadingError action correctly', () => {
    const error = new Error('some error');
    const expectedResult = state.set('error', error).set('loading', false);

    const newState = appReducer(state, phrasesLoadingError(error));
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the addPhrase action correctly', () => {
    const expectedResult = state.set('loading', true).set('error', false);

    const newState = appReducer(state, addPhrase());
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the addPhraseCompleted action correctly', () => {
    const expectedResult = state.set('loading', false);

    const newState = appReducer(state, addPhraseCompleted());
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the addPhraseError action correctly', () => {
    const error = new Error('some error');
    const expectedResult = state.set('error', error).set('loading', false);

    const newState = appReducer(state, addPhraseError(error));
    expect(newState).toEqual(expectedResult);
  });

  it('should handle the clearAppError action correctly', () => {
    const expectedResult = state.set('error', false);

    const newState = appReducer(state, clearAppError());
    expect(newState).toEqual(expectedResult);
  });
});
