import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT_IN_MS } from '../config';
import {
  createPostRequestObj,
  createGetRequestObj,
  apiCall,
} from '../apiHelper';

// jest axios mock setup
jest.mock('axios');

describe('apiHelper methods', () => {
  const text = 'userInput';
  it('createGetRequestObj returns the correct options', () => {
    const expectedRequestObj = {
      method: 'get',
      url: `${API_BASE_URL}/phrases`,
      timeout: API_TIMEOUT_IN_MS,
    };
    expect(createGetRequestObj()).toEqual(expectedRequestObj);
  });

  it('createPostRequestObj returns the correct options', () => {
    const expectedRequestObj = {
      method: 'post',
      data: {
        phrase: {
          text,
        },
      },
      url: `${API_BASE_URL}/phrases`,
      timeout: API_TIMEOUT_IN_MS,
    };
    expect(createPostRequestObj(text)).toEqual(expectedRequestObj);
  });

  it('apiCall should invoke axios library exactly once', async () => {
    const mockPostObj = createPostRequestObj(text);
    await apiCall(mockPostObj);
    expect(axios.mock.calls).toHaveLength(1);
  });
});
