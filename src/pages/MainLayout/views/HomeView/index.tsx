import { useOutletContext } from 'react-router-dom';
import Typography from '@mui/material/Typography/Typography';
import { Carousel } from '../../../../components';
import ConnectionsListDisplay from './components/ConnectionsDisplay';
import SpecialitySection from './components/SpecialitySection';
import OrganizationSection from './components/OrganizationSection';
import { UserType } from '../../../../types';
import OrganizationTeam from './components/OrganizationTeam';
import ConnectionsListDisplayH from './components/ConnectionsDisplayH';

export default function HomeScreen() {
  const [userType, organizationId, organizationName]: string =
    useOutletContext();

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
        <div className="mt-8">
          <Typography
            variant="h5"
            mb={1}
            sx={{ fontWeight: 700, fontSize: '1.2rem' }}
          >
            Current Organization
          </Typography>
          <Typography variant="subtitle1" mb={1} sx={{}}>
            {organizationName}
          </Typography>
          <OrganizationTeam organizationId={organizationId} />
          <ConnectionsListDisplayH />
        </div>
      )}
    </div>
  );
}
