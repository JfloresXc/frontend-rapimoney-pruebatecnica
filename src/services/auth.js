import { API_URL_BACKEND } from '../settings/envs';
import { HEADERS } from '../utils/headersAPI';

const MODULE = 'user';

export const loginService = async ({ username, password }) => {
  const URL = `${API_URL_BACKEND}/${MODULE}/login`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ username, password }),
  });
  return response;
};

export const signupService = async ({ username, password }) => {
  const URL = `${API_URL_BACKEND}/${MODULE}/signup`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ username, password }),
  });
  return response;
};
