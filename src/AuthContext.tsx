import { SetStateAction, createContext } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  token: null,
  setLogin: (_isLogin: boolean) => {},
  setToken: (_token: SetStateAction<null>) => {},
});
