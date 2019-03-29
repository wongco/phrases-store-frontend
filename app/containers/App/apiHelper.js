import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT_IN_MS } from './config';

function baseApiRequestData() {
  return {
    url: `${API_BASE_URL}/phrases`,
    timeout: API_TIMEOUT_IN_MS,
  };
}

/**
 * @description shape apiCall request data for getting phrases
 * @return { object} GET request object
 */
export function createGetRequestObj() {
  return {
    method: 'get',
    ...baseApiRequestData(),
  };
}

/**
 * @description shape apiCall request data for adding phrase
 * @param { string } text - user input phrase to add to API
 * @return { object } POST request object
 */
export function createPostRequestObj(text) {
  return {
    method: 'post',
    data: {
      phrase: {
        text,
      },
    },
    ...baseApiRequestData(),
  };
}

/**
 * @description makes api call with provided requestObj
 * @param { object } requestData - API request data incl. method and body/query
 * @return { Promsie <apiResponse> } - Promise of API Response
 */
export function apiCall(requestObj) {
  return axios(requestObj);
}
