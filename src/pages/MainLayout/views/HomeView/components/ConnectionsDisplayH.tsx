import { useState } from 'react';
import { Typography } from '@mui/material';
import { InfoResponse } from '../../../../../types';
import { getStoredUser } from '../../../../../user-storage';
import EmptyResults from '../../../../../components/EmptyResponse/EmptyResults';
import Card from './Card';

export default function ConnectionsListDisplayH() {
  const [storedUser] = useState<InfoResponse>(getStoredUser());

  return (
    <div className="flex flex-col mt-6 w-full ">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Connected CareRecipients
      </Typography>
      <div className="flex flex-wrap items-center justify-center">
        {storedUser.Connection.length ? (
          storedUser.Connection.map((connection, index) => (
            <div key={index}>
              <Card
                key={connection.id}
                firstName={connection.careRecipient.firstName}
                lastName={connection.careRecipient.lastName}
                displayPicture={connection.careRecipient.displayPicture}
                connectedOn={connection.careRecipient.createdAt}
                age="45"
                location={connection.careRecipient.location}
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
