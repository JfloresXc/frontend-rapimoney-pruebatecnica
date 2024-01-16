import { useState } from 'react';
import {
  getClientByIdService,
  getClientsService,
  postClientService,
  putClientService,
} from '../services/clients';
import { useError } from './useError';
import { useLocation } from 'wouter';

export const useClients = () => {
  const { tryCatchHandler } = useError();
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setPage] = useState(1);
  const setLocation = useLocation()[1];

  const getClients = async () => {
    setIsLoading(true);
    const data = tryCatchHandler(
      await getClientsService({ page: actualPage }),
    ).finally(() => {
      setIsLoading(false);
    });
    return data;
  };

  const getClientById = async ({ id }) => {
    setIsLoading(true);
    const data = await tryCatchHandler(
      await getClientByIdService({ id }),
    ).finally(() => {
      setIsLoading(false);
    });
    return data;
  };

  const postClient = async (client) => {
    const data = await tryCatchHandler(await postClientService(client));
    setLocation('/home');
    return data;
  };

  const editClient = async (client) => {
    const data = await tryCatchHandler(await putClientService(client));
    setLocation('/home');
    return data;
  };

  return {
    getClients,
    postClient,
    editClient,
    getClientById,
    isLoading,
    actualPage,
    setPage,
  };
};
