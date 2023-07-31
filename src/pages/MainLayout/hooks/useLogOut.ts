import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios-instance';
import { clearStoredUser } from '../../../user-storage';

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
        clearStoredUser();
        navigate('/log-in', { replace: true, relative: 'route' });
      },
    },
  );
  return { logout };
}
