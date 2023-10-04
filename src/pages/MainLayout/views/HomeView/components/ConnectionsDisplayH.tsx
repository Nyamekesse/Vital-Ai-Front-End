import { Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import EmptyResults from '../../../../../components/EmptyResponse/EmptyResults';
import Card from './Card';
import { ContextType } from '../../../../../types';

export default function ConnectionsListDisplayH() {
  const { storedUser } = useOutletContext<ContextType>();
  return (
    <div className="flex flex-col mt-6 w-full ">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Connected CareRecipients
      </Typography>
      <div className="flex flex-col flex-wrap items-center justify-center">
        {storedUser?.Connection.length ? (
          storedUser.Connection.map((connection, index) => {
            return (
              <div key={index}>
                <Card
                  key={connection.careRecipient.firstName}
                  firstName={connection.careRecipient.firstName}
                  lastName={connection.careRecipient.lastName}
                  displayPicture={connection.careRecipient.displayPicture}
                  connectedOn={connection.createdAt}
                  age="45"
                  location={connection.careRecipient.location}
                />
              </div>
            );
          })
        ) : (
          <div>
            <EmptyResults message="Not made any connections yet" />
          </div>
        )}
      </div>
    </div>
  );
}
