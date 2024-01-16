import { useClients } from '../hooks/useClients';
import { useEffect, useState } from 'react';

import ClientList from '../components/ClientList';
import LayoutHome from '../components/layouts/LayoutHome';

export default function Home() {
  const [clients, setClients] = useState([]);
  const { getClients, isLoading, setPage, actualPage } = useClients();

  useEffect(() => {
    getClients().then((clients) => {
      setClients((clientsPrev) => clientsPrev.concat(clients));
    });
  }, [setClients, actualPage]);

  return (
    <LayoutHome title={'List of clients'}>
      {clients.length > 0 && <ClientList clients={clients} />}
      {!isLoading && clients.length === 0 && (
        <h2 className="text-xl">No hay clientes</h2>
      )}
      {isLoading && <h2 className="text-xl mb-10">Loading...</h2>}
      {!isLoading && (
        <div className="flex justify-center">
          <button
            className="mt-3 w-[300px] bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setPage((pagePreview) => pagePreview + 1);
            }}
          >
            View more ... ⬇️
          </button>
        </div>
      )}
    </LayoutHome>
  );
}
