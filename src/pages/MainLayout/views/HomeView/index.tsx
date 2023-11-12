import Typography from '@mui/material/Typography/Typography';
import { useState } from 'react';
import { Carousel } from '../../../../components';
import SpecialitySection from './components/SpecialitySection';
import OrganizationSection from './components/OrganizationSection';
import { UserType } from '../../../../types';
import OrganizationTeam from './components/OrganizationTeam';
import ConnectionsListDisplayH from './components/ConnectionsDisplayH';
import ConnectionsListDisplay from './components/ConnectionsDisplay';
import { useUserInfo } from '../../../LogIn/hooks/useUserInfo';

export default function HomeScreen() {
  const { data: user } = useUserInfo();
  const [userType] = useState(sessionStorage.getItem('userType'));

  return (
    <div className="py-3 px-3">
      <Carousel />
      {userType === UserType.CARE_RECIPIENT ? (
        <div className="mt-8 flex flex-col items-center justify-start">
          <div>
            <OrganizationSection />
            <SpecialitySection />
            <ConnectionsListDisplay />
          </div>
        </div>
      ) : (
        <div className="mt-8 flex flex-col ">
          <Typography
            variant="h5"
            mb={1}
            sx={{ fontWeight: 700, fontSize: '1.2rem' }}
          >
            Current Organization
          </Typography>
          <Typography variant="subtitle1" mb={1} sx={{}}>
            {user?.organization?.name}
          </Typography>
          <OrganizationTeam
            userName={user?.firstName}
            organizationId={user?.organization?.id}
          />
          <ConnectionsListDisplayH />
        </div>
      )}
    </div>
  );
}
