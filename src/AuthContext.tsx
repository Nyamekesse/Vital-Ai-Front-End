import { SetStateAction, createContext } from 'react';

export const AuthContext = createContext({
  token: null,
  setToken: (_token: SetStateAction<null>) => {},
});
