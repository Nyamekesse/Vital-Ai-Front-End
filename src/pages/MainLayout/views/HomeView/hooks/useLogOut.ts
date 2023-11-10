import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../../axios-instance';
import { clearStoredUser } from '../../../../../user-storage';
import { socketServerDisConnection } from '../../../../../sockets/clientSocket';
import { queryClient } from '../../../../../react-query';

export function useLogout() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const logout = () => {
    setIsActive(true);
  };
  useQuery(
    'logOut',

    async () => {
      await axiosInstance.get('auth/logout');
    },
    {
      enabled: isActive,
      onSuccess: () => {
        sessionStorage.clear();
        clearStoredUser();
        queryClient.clear();
        socketServerDisConnection();
        navigate('/log-in', { replace: true });
        setIsActive(false);
      },
    },
  );
  return { logout };
}
