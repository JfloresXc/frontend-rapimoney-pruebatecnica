import { useId } from 'react';

export default function InputGroup({
  label = 'Not label',
  placeholder = 'Not placeholder',
  name,
  type = 'text',
  errors,
  validations,
  amountMinLength = 5,
}) {
  const inputId = useId(1, 'login-email-');
  const typeError = errors[name]?.type;
  const isRequired = typeError === 'required';
  const isPatternValid = typeError === 'pattern';
  const isMinLengthValid = typeError === 'minLength';
  // const isInvalid = isRequired || isPatternValid || isMinLengthValid;
  // const colorValidation = isInvalid ? 'red' : 'gray';

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name="email"
        id={inputId}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...validations}
      />
      {isRequired && (
        <p className="mt-2 text-xs text-red-500">
          <span className="font-medium">Oops!</span> Este campo es requerido
        </p>
      )}
      {isPatternValid && (
        <p className="mt-2 text-xs text-red-500">
          <span className="font-medium">Oops!</span> Ingresa un correo válido
        </p>
      )}
      {isMinLengthValid && (
        <p className="mt-2 text-xs text-red-500">
          <span className="font-medium">Oops!</span> Caractéres mínimos es{' '}
          {amountMinLength}
        </p>
      )}
    </div>
  );
}
