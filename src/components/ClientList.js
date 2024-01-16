import ClientItem from './ClientItem';
import Button from './Button';
import AddIcon from './icons/Add';
import InputSearch from './InputSearch';
import { useEffect, useState } from 'react';

export default function ClientList({ clients = [] }) {
  const [filteredClients, setFilteredClients] = useState(clients);

  useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

  const searchClients = (filteredClients) => {
    setFilteredClients(filteredClients);
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <Button text="Add client" icon={<AddIcon />} link="/client/a" />
          <div
            id="dropdownAction"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <InputSearch searchClients={searchClients} arraySearch={clients} />
      </div>
      <div className="overflow-x-scroll 2xl:overflow-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Names
              </th>
              <th scope="col" className="px-6 py-3">
                DNI
              </th>
              <th scope="col" className="px-6 py-3">
                Birthday
              </th>

              <th scope="col" className="px-6 py-3">
                Phonenumber
              </th>
              <th scope="col" className="px-6 py-3">
                Bank
              </th>
              <th scope="col" className="px-6 py-3">
                Bank Account
              </th>
              {/* <th scope="col" className="px-6 py-3">
                State
              </th> */}
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredClients?.length > 0 ? (
              filteredClients.map((clientKey, index) => (
                <ClientItem index={index + 1} key={index} {...clientKey} />
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No clients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
