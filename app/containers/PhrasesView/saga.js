import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PHRASES } from 'containers/App/constants';
import { phrasesLoaded, phrasesLoadingError } from 'containers/App/actions';
import axios from 'axios';

function fetchPhrases() {
  return axios({
    method: 'get',
    url: 'http://localhost:5000/phrases',
  });
}

// watcher saga: listens for action dispatched to the store, starts worker saga
export default function* phrasesViewSaga() {
  yield takeLatest(LOAD_PHRASES, getPhrases);
}

// worker saga: gets invoked when watcher sees action and dispatches result
// export function* getPhrases(action) { // this is action from the origina action object dispatched by LOAD_PHRASES
export function* getPhrases() {
  try {
    const apiResponse = yield call(fetchPhrases);
    const { phrases } = apiResponse.data;
    yield put(phrasesLoaded(phrases));
  } catch (error) {
    yield put(phrasesLoadingError(error));
  }
}
