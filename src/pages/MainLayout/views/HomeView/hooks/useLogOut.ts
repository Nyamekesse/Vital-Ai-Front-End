import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { clearStoredUser } from '../../../../../user-storage';

export function useLogout() {
  const queryClient = useQueryClient();
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
        queryClient.removeQueries([
          queryKeys.appointments,
          queryKeys.healthProfessional,
          queryKeys.notifications,
          queryKeys.organization,
          queryKeys.user,
        ]);

        navigate('/log-in', { replace: true, relative: 'route' });
        setIsActive(false);
      },
    },
  );
  return { logout };
}
