import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_PHRASE } from 'containers/App/constants';
import { addPhraseCompleted, addPhraseError } from 'containers/App/actions';
import { push } from 'connected-react-router';
import { createPostRequestObj, apiCall } from 'containers/App/apiHelper';

// watcher saga: listens for action dispatched to the store, starts worker saga
export default function* addPhraseSaga() {
  yield takeLatest(ADD_PHRASE, addPhrase);
}

// worker saga: gets invoked when watcher sees action and dispatches result
export function* addPhrase(action) {
  try {
    const { text } = action;
    const requestObj = createPostRequestObj(text);
    yield call(apiCall, requestObj);
    yield put(addPhraseCompleted());
    yield put(push('/phrases'));
  } catch (error) {
    yield put(addPhraseError(error));
  }
}
