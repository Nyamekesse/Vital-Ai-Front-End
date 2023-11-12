import Avatar from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography/Typography';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { Status, UserType } from '../../../../../types';
import { useAccept } from '../hooks/useAcceptAppointment';
import { useReject } from '../hooks/useRejectAppointment';

type Props = {
  image: string;
  firstName: string;
  lastName: string;
  specialization?: string;
  organization?: string;
  age?: string;
  location?: string;
  id?: string;
  appointmentStatus?: string;
};

export default function ProfileCard({
  image,
  firstName,
  lastName,
  specialization,
  organization,
  age,
  location,
  id,
  appointmentStatus,
}: Props) {
  const [userType] = useState(sessionStorage.getItem('userType'));
  const { acceptMutate } = useAccept(id);
  const { rejectMutate } = useReject(id);

  return (
    <div className="flex  p-4 shadow-md rounded-lg">
      <div className="">
        <Avatar
          alt={firstName}
          src={`${image}`}
          variant="rounded"
          sx={{ width: 80, height: 80 }}
        />
      </div>
      <div className="flex flex-col p-2 w-full">
        <div className="flex justify-between items-center">
          <Typography
            sx={{ fontWeight: 700 }}
            variant="body1"
            noWrap
            align="center"
          >
            {specialization && 'Dr.'} {firstName} {lastName}
          </Typography>
        </div>
        <hr />
        <div className="mt-3 flex">
          <div className="flex flex-col justify-center items-start mr-11">
            <Typography
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
              variant="caption"
              noWrap
              align="center"
            >
              {age && <>Age:&nbsp;&nbsp; {`${age} years`}</>}
              {specialization && (
                <>Specialization:&nbsp;&nbsp; {specialization}</>
              )}
            </Typography>

            <Typography
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
              variant="caption"
              noWrap
              align="center"
            >
              {location && (
                <>Location:&nbsp;&nbsp;{`${location.split(',')[0]}`}</>
              )}
              {organization && (
                <>Organization:&nbsp;&nbsp;{`${organization}`}</>
              )}
            </Typography>
          </div>
          {userType === UserType.HEALTH_PROFESSIONAL &&
            appointmentStatus === Status.PENDING && (
              <div>
                <IconButton
                  color="success"
                  aria-label="accept appointment"
                  onClick={() => acceptMutate()}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="reject appointment"
                  onClick={() => rejectMutate()}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

ProfileCard.defaultProps = {
  id: '',
  specialization: '',
  organization: '',
  age: '',
  location: '',
  appointmentStatus: '',
};
