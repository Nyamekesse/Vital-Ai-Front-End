import { ReactNode, useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState(null);

  const value = useMemo(() => ({ token, setToken }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
