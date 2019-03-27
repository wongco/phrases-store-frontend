import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_PHRASE } from 'containers/App/constants';
import { addPhraseCompleted, addPhraseError } from 'containers/App/actions';
import { push } from 'connected-react-router';

// Individual exports for testing

export function addPhraseToAPI(text) {
  return axios({
    method: 'post',
    url: 'http://localhost:5000/phrases',
    data: {
      phrase: {
        text,
      },
    },
  });
}

// watcher saga: listens for action dispatched to the store, starts worker saga
export default function* addPhraseSaga() {
  yield takeLatest(ADD_PHRASE, addPhrase);
}

// worker saga: gets invoked when watcher sees action and dispatches result
export function* addPhrase(action) {
  try {
    const { text } = action;
    yield call(addPhraseToAPI, text);
    yield put(addPhraseCompleted());
    yield put(push('/phrases'));
  } catch (error) {
    yield put(addPhraseError(error));
  }
}
