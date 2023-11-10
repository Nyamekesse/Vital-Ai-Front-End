import { SetStateAction, createContext } from 'react';

const isLoggedIn =
  sessionStorage.getItem('isLoggedIn') ||
  sessionStorage.setItem('isLoggedIn', 'false');

export const AuthContext = createContext({
  isLogin: isLoggedIn,
  token: null,
  setLogin: (_isLogin: boolean) => {},
  setToken: (_token: SetStateAction<null>) => {},
});
