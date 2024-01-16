import React, { useEffect, useState } from 'react';
import LayoutHome from '../components/layouts/LayoutHome';
import FormClient from '../components/FormClient';
import { useClients } from '../hooks/useClients';
import { ACTIONS } from '../utils/actions';
import { useLocation } from 'wouter';

export default function ClientDetail({ params: { options } }) {
  const action = options.split('')[0];
  const idClient = options.slice(1);
  const { getClientById } = useClients();
  const [client, setClient] = useState(null);
  const setLocation = useLocation()[1];

  useEffect(() => {
    if (action === 'e') {
      getClientById({ id: idClient }).then((client) => {
        if (client?.id) setClient(client);
        else setLocation('/not-found');
      });
    }
  }, []);

  const getAction = (action) => {
    switch (action) {
      case ACTIONS.ADD:
        return 'Add';
      case ACTIONS.EDIT:
        return 'Edit';
      case ACTIONS.DETAIL:
        return 'Detail';
      default:
        return 'Add';
    }
  };

  return (
    <LayoutHome title={` ${getAction(action)} client`}>
      <div className="bg-primary-100 rounded-lg shadow dark:border md:mt-0 max-w-[1000px] mx-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {action === ACTIONS.ADD ? <FormClient action={ACTIONS.ADD} /> : ''}
          {action === ACTIONS.EDIT && client ? (
            <FormClient action={ACTIONS.EDIT} client={client} />
          ) : (
            ''
          )}
        </div>
      </div>
    </LayoutHome>
  );
}
