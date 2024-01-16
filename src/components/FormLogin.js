import { useForm } from 'react-hook-form';
import InputGroup from './InputGroup';
import { useAuth } from '../hooks/useAuth';
import { expressions } from '../utils/expressions';
import { Link } from 'wouter';

export default function FormLogin({ isSignup = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: !isSignup ? 'jfloresxc' : '',
      password: !isSignup ? 'jfloresxc' : '',
    },
  });

  const { login, signup } = useAuth();

  const handleSubmitOwn = async (data) => {
    const { username, password, confirmpassword } = data;

    if (!isSignup) await login({ username, password });
    else await signup({ username, password, confirmpassword });
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleSubmitOwn)}
    >
      {/* <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your username
        </label>
        <input
          type="username"
          name="username"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
      </div> */}
      <InputGroup
        name="username"
        label="Your username"
        placeholder="name@company.com"
        pattern={expressions.username}
        errors={errors}
        validations={{
          ...register('username', {
            required: true,
            pattern: expressions.username,
          }),
        }}
      />
      <InputGroup
        type="password"
        name="password"
        label="Your password"
        placeholder="********"
        errors={errors}
        validations={{ ...register('password', { required: true }) }}
      />
      {isSignup && (
        <InputGroup
          type="password"
          name="confirmpassword"
          label="Confirm password"
          placeholder="********"
          errors={errors}
          validations={{ ...register('confirmpassword', { required: true }) }}
        />
      )}
      {/*
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
         <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a> 
      </div>
        */}
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {!isSignup ? 'Sign in' : 'Create an account'}
      </button>
      {isSignup ? (
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      ) : (
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <Link
            to="/signup"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      )}
    </form>
  );
}
