import { useLocation } from 'wouter';
import { setMessageError } from '../utils/alerts';

const ERRORSNAME = {
  TOKEN_EXPIRED: 'TokenExpiredError',
  JSON_WEB_TOKEN: 'JsonWebTokenError',
  NOT_BEFORE: 'NotBeforeError',
};

export const useError = () => {
  const router = useLocation();

  const isTokenJWTError = (nameError = '') => {
    return (
      nameError === ERRORSNAME.TOKEN_EXPIRED ||
      nameError === ERRORSNAME.JSON_WEB_TOKEN ||
      nameError === ERRORSNAME.NOT_BEFORE
    );
  };

  const actionsInError = ({ error }) => {
    // MANEJO DE TOKEN
    if (isTokenJWTError(error.name)) {
      router('/login');
    }
  };

  const showMessageErrorForResponse = (responseInJson) => {
    const { message = 'Error de conexion no mapeado' } = responseInJson;

    setMessageError({ message });
  };

  const tryCatchHandler = async (responseFetch) => {
    try {
      const response = responseFetch;
      const data = await response.json();

      if (!response.ok && data) {
        actionsInError({ error: data });

        throw new Error(data.message + '❌');
      }

      return data;
    } catch (error) {
      // Por practicidad usamos SweetAler2
      // Pero la idea es utilizar un componente de error
      showMessageErrorForResponse({ isError: true, message: error.message });
      return null;
    }
  };

  return {
    tryCatchHandler,
  };
};
