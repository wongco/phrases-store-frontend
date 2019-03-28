import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT_IN_MS } from './config';

/**
 * @description shape apiCall request data for adding phrase and make api call
 * @param { string } text - user input phrase to add to API
 * @return { Promise <apiResponse> } Promise of API Response
 */
export function addPhraseToAPI(text) {
  const requestData = {
    method: 'post',
    data: {
      phrase: {
        text,
      },
    },
  };
  return apiCall(requestData);
}

/**
 * @description shape apiCall request data for getting phrases and make api call
 * @return { Promise <apiResponse> } Promise of API Response
 */
export function getPhrasesFromAPI() {
  const requestData = {
    method: 'get',
  };
  return apiCall(requestData);
}

/**
 * @description combines API request data with base data and make api call
 * @param { object } requestData - API request data incl. method and body/query
 * @return { Promsie <apiResponse> } - Promise of API Response
 */
export function apiCall(requestData) {
  return axios({
    url: `${API_BASE_URL}/phrases`,
    timeout: API_TIMEOUT_IN_MS,
    ...requestData,
  });
}
