import { Link } from 'wouter';
import EditIcon from './icons/Edit';
import React from 'react';
import { formatToShortDate } from '../utils/date';

function ClientItem({
  index,
  id,
  dni,
  names,
  surnames,
  birthday,
  phonenumber,
  email,
  bank,
  bankaccount,
  idUser,
}) {
  const regularItems = [
    dni,
    formatToShortDate(birthday),
    phonenumber,
    bank,
    bankaccount,
  ];

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
          alt="Jese"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">
            {names} {surnames}
          </div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      {regularItems.map((value, index) => (
        <td className="px-6 py-4 whitespace-nowrap" key={index}>
          <div className="text-sm text-gray-900">{value}</div>
        </td>
      ))}
      {/* <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
          Actived
        </div>
      </td> */}
      <td className="px-6 py-4">
        <Link to={`/client/e${id}`} className="font-medium">
          <p className="cursor-pointer text-blue-600 hover:underline">
            <EditIcon />
          </p>
        </Link>
      </td>
    </tr>
  );
}

export default React.memo(ClientItem);
