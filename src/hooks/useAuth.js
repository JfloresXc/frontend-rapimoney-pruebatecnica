import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { setMessageError, setMessageSuccess } from '../utils/alerts';
import { useLocation } from 'wouter';
import { useError } from './useError';
import { loginService, signupService } from '../services/auth';

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const setLocation = useLocation()[1];
  const { tryCatchHandler } = useError();

  const login = async ({ username, password }) => {
    const user = await tryCatchHandler(
      await loginService({ username, password }),
    );

    if (user) {
      setUser(user);
      setLocation('/home');
    }
  };

  const signup = async ({ username, password, confirmpassword }) => {
    if (!comparePassword(password, confirmpassword)) {
      return setMessageError({ message: 'Passwords do not match' });
    }

    const user = await tryCatchHandler(
      await signupService({ username, password }),
    );

    if (user) {
      setMessageSuccess({ message: 'User created successfully' });
      setLocation('/login');
    }
  };

  const logout = async () => {
    window.localStorage.clear();
    setUser(null);
    setLocation('/login');
  };

  const comparePassword = (password, confirmpassword) => {
    return password === confirmpassword;
  };

  return {
    isLogged: Boolean(user?.id),
    idUser: user?.id,
    user,
    setUser,
    signup,
    login,
    logout,
  };
}
