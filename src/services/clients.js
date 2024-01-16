import { API_URL_BACKEND } from '../settings/envs';
import { HEADERS } from '../utils/headersAPI';

const MODULE = 'client';

export const getClientsService = async ({ page = 1 }) => {
  const URL = `${API_URL_BACKEND}/${MODULE}?page=${page}`;
  const response = await fetch(URL, {
    method: 'GET',
    headers: HEADERS,
  });
  return response;
};

export const getClientByIdService = async ({ id }) => {
  const URL = `${API_URL_BACKEND}/${MODULE}/${id}`;
  const response = await fetch(URL, {
    method: 'GET',
    headers: HEADERS,
  });
  return response;
};

export const postClientService = async (client) => {
  const URL = `${API_URL_BACKEND}/${MODULE}`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ ...client }),
  });
  return response;
};

export const putClientService = async (client) => {
  const URL = `${API_URL_BACKEND}/${MODULE}/${client.id}`;
  const response = await fetch(URL, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify({ ...client }),
  });
  return response;
};
