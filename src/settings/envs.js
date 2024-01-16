const envs = {
  development: process.env.NEXT_PUBLIC_BACKEND_HOST_DEV,
  test: process.env.DATABASE_CONECTION_TEST,
  production: process.env.NEXT_PUBLIC_BACKEND_HOST_PROD,
};
const API_URL_SERVER_BACKEND = `${envs[process.env.NODE_ENV]}/api`;
const API_URL_FRONTEND = '/api';
const API_URL_BACKEND = `http://localhost:3002/api`;
// const API_URL_BACKEND = `/api`;

export { API_URL_SERVER_BACKEND, API_URL_BACKEND, API_URL_FRONTEND };
