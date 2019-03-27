import axios from 'axios';
import { API_BASE_URL } from './constants';

export function addPhraseToAPI(text) {
  return axios({
    method: 'post',
    url: `${API_BASE_URL}/phrases`,
    data: {
      phrase: {
        text,
      },
    },
  });
}

export function getPhrasesfromAPI() {
  return axios({
    method: 'get',
    url: `${API_BASE_URL}/phrases`,
  });
}
