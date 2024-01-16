import { useForm } from 'react-hook-form';
import InputGroup from './InputGroup';
import { expressions } from '../utils/expressions';
import { useClients } from '../hooks/useClients';
import { useEffect } from 'react';
import { ACTIONS } from '../utils/actions';
import { formatToShortDate } from '../utils/date';

export default function FormClient({ action = 'a', client }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      bankaccount: '1214-1412-1231-1245',
      bank: 'BBVA',
      email: 'jflorexc@gmail.com',
      phonenumber: '912415121',
      birthday: '2002-07-29',
      surnames: 'Flores Chamba',
      names: 'Jose',
      dni: '51215121',
    },
  });

  useEffect(() => {
    if (action === 'e') {
      setValue('dni', client.dni);
      setValue('names', client.names);
      setValue('surnames', client.surnames);
      setValue('birthday', formatToShortDate(client.birthday));
      setValue('phonenumber', client.phonenumber);
      setValue('email', client.email);
      setValue('bank', client.bank);
      setValue('bankaccount', client.bankaccount);
    }
  }, []);

  const { postClient, editClient } = useClients();

  const handleSubmitOwn = async (data) => {
    if (action === ACTIONS.ADD) {
      await postClient({ ...data });
    } else if (action === ACTIONS.EDIT) {
      await editClient({ ...data, id: client.id });
    }
  };

  return (
    <form
      className="space-y-4 md:space-y-6 
      grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 md:gap-6 items-center"
      onSubmit={handleSubmit(handleSubmitOwn)}
    >
      <InputGroup
        label="Your dni"
        name="dni"
        placeholder="51215121"
        errors={errors}
        validations={{
          ...register('dni', {
            required: true,
          }),
        }}
      />
      <InputGroup
        label="Your names"
        name="names"
        placeholder="Jose"
        errors={errors}
        validations={{
          ...register('names'),
        }}
      />
      <InputGroup
        label="Your surnames"
        name="surnames"
        placeholder="Flores Chamba"
        errors={errors}
        validations={{
          ...register('surnames'),
        }}
      />
      <InputGroup
        label="Your birthday"
        name="birthday"
        placeholder="2002-07-24"
        errors={errors}
        validations={{
          ...register('birthday'),
        }}
        type="date"
      />
      <InputGroup
        label="Your phonenumber"
        name="phonenumber"
        placeholder="912415121"
        errors={errors}
        validations={{
          ...register('phonenumber'),
        }}
        type="number"
      />
      <InputGroup
        label="Your email"
        name="email"
        placeholder="jflorexc@gmail"
        errors={errors}
        validations={{
          ...register('email', { pattern: expressions.email }),
        }}
      />
      <InputGroup
        label="Your name of bank"
        name="bank"
        placeholder="BBVA"
        errors={errors}
        validations={{
          ...register('bank'),
        }}
      />
      <InputGroup
        label="Your bank account"
        name="bankaccount"
        placeholder="1214-1412-1231-1245"
        errors={errors}
        validations={{
          ...register('bankaccount'),
        }}
      />
      <button
        type="submit"
        className="col-span-1 sm:col-span-2 w-[300px] m-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {action === 'a' ? 'Add client' : 'Update client'}
      </button>
    </form>
  );
}
