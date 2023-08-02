import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../../axios-instance';
import { clearStoredUser } from '../../../../../user-storage';
import { queryKeys } from '../../../../../react-query/constants';

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
        queryClient.removeQueries([
          queryKeys.appointments,
          queryKeys.healthProfessional,
          queryKeys.notifications,
          queryKeys.organization,
          queryKeys.user,
        ]);

        clearStoredUser();

        navigate('/log-in', { replace: true, relative: 'route' });
      },
    },
  );
  return { logout };
}
