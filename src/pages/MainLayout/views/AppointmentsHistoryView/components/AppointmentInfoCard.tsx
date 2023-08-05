import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography/Typography';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import StatusLabels from './StatusLabels';

type Props = {
  displayImage: string;
  firstName: string;
  lastName: string;
  status: string;
  healthProfessional?: boolean;
  scheduledTime: Date | string;
};

export default function AppointmentInfoCard({
  displayImage,
  firstName,
  lastName,
  status,
  healthProfessional,
  scheduledTime,
}: Props) {
  return (
    <div className="flex p-4 shadow-md rounded-lg w-80 max-w-md min-w-full">
      <div className="">
        <Avatar
          alt={firstName}
          src={`${displayImage}`}
          variant="rounded"
          sx={{ width: 80, height: 80 }}
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex justify-between items-center">
          <Typography
            sx={{ fontWeight: 700 }}
            variant="body1"
            noWrap
            align="center"
          >
            {healthProfessional === true && 'Dr.'} {firstName} {lastName}
          </Typography>
        </div>
        <hr />
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <Typography
              sx={{ fontWeight: 500 }}
              variant="caption"
              noWrap
              align="center"
            >
              {dayjs(scheduledTime).format('MMMM DD YYYY')}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginLeft: 0.5, marginRight: 0.5 }}
            />
            <Typography
              sx={{ fontWeight: 500 }}
              variant="caption"
              noWrap
              align="center"
            >
              {dayjs(scheduledTime).format('hh:mm A')}
            </Typography>
          </div>
          <div className="mt-3">
            <StatusLabels status={status} />
          </div>
        </div>
      </div>
    </div>
  );
}

AppointmentInfoCard.defaultProps = {
  healthProfessional: false,
};
