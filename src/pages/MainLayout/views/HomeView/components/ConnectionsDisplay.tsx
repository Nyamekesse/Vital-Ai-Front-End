import { Typography } from '@mui/material';
import EmptyResults from '../../../../../components/EmptyResponse/EmptyResults';
import Card from './Card';
import { useUserInfo } from '../../../../LogIn/hooks/useUserInfo';

export default function ConnectionsListDisplay() {
  const storedUser = useUserInfo();
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
        {storedUser?.Connection.length ? (
          storedUser.Connection.map((connection, index) => (
            <div key={index}>
              <Card
                key={connection.id}
                firstName={connection.healthProfessional.firstName}
                lastName={connection.healthProfessional.lastName}
                displayPicture={connection.healthProfessional.displayPicture}
                organization={connection.healthProfessional.organization.name}
                specialization={
                  connection.healthProfessional.specialization.name
                }
                connectedOn={connection.healthProfessional.createdAt}
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
