import { useOutletContext } from 'react-router-dom';
import Typography from '@mui/material/Typography/Typography';
import { Carousel } from '../../../../components';
import SpecialitySection from './components/SpecialitySection';
import OrganizationSection from './components/OrganizationSection';
import { ContextType, UserType } from '../../../../types';
import OrganizationTeam from './components/OrganizationTeam';
import ConnectionsListDisplayH from './components/ConnectionsDisplayH';
import ConnectionsListDisplay from './components/ConnectionsDisplay';

export default function HomeScreen() {
  const { storedUser } = useOutletContext<ContextType>();
  // Vada_Wyman4@hotmail.com
  return (
    <div className="py-3 px-3">
      <Carousel />
      {storedUser?.user.userType === UserType.CARE_RECIPIENT ? (
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
            {storedUser?.organization?.name}
          </Typography>
          <OrganizationTeam
            userName={storedUser?.firstName}
            organizationId={storedUser?.organization?.id}
          />
          <ConnectionsListDisplayH />
        </div>
      )}
    </div>
  );
}
