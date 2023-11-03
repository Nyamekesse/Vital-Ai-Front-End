import { ReactNode, useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);

  const value = useMemo(
    () => ({ isLogin, token, setLogin: setIsLogin, setToken }),
    [isLogin, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
