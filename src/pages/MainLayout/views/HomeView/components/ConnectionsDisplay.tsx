import { Typography } from '@mui/material';
import EmptyResults from '../../../../../components/EmptyResponse/EmptyResults';
import Card from './Card';
import { useConnections } from '../hooks/useConnectionList';
import LoadingSpinner from '../../../../../components/LoadingCircle';

export default function ConnectionsListDisplay() {
  const { data: connections, isLoading } = useConnections();

  return (
    <div className="flex flex-col mt-6 w-full ">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Favorite Doctors
      </Typography>
      <div className="flex flex-wrap items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : connections.length ? (
          connections.map((connection) => (
            <div key={connection.healthProfessional.userID}>
              <Card
                key={connection.healthProfessional.userID}
                firstName={connection.healthProfessional.firstName}
                lastName={connection.healthProfessional.lastName}
                displayPicture={connection.healthProfessional.displayPicture}
                organization={connection.healthProfessional.organization.name}
                specialization={
                  connection.healthProfessional.specialization.name
                }
                connectedOn={connection.createdAt}
              />
            </div>
          ))
        ) : (
          <div>
            <EmptyResults message="Not made any connections yet" />
          </div>
        )}
      </div>
    </div>
  );
}
