import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip/Chip';
import Typography from '@mui/material/Typography/Typography';
import { useOrganizations } from '../hooks/useOrganizations';
import { Organization } from '../../../../../types';
import LoadingSpinner from '../../../../../components/LoadingCircle';

export default function OrganizationSection() {
  const { data: organizations, isLoading } = useOrganizations();

  return (
    <div className="flex flex-col mt-4 w-full">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Partnered Organizations
      </Typography>
      <div className="flex flex-wrap items-center justify-stretch">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          organizations.map((organization: Organization) => {
            return (
              <div key={organization.id}>
                <Link
                  to={`/organizations/${organization.id}/health-professionals`}
                >
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={organization.name}
                    sx={{ margin: 0.5 }}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
