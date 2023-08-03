import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography/Typography';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string;
  specialization: string;
  organization: string;
  connectedOn: string | Date | undefined;
};
export default function Card({
  firstName,
  lastName,
  displayPicture,
  organization,
  specialization,
  connectedOn,
}: Props) {
  return (
    <div className="flex p-4 shadow-lg rounded-lg max-w-sm min-w-full ">
      <div className="">
        <Avatar
          alt={firstName}
          src={displayPicture}
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
            Dr. {firstName} {lastName}
          </Typography>
        </div>
        <hr />
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <Typography
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
              variant="caption"
              noWrap
              align="center"
            >
              {specialization}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginLeft: 0.5, marginRight: 0.5 }}
            />
            <Typography
              sx={{ fontWeight: 500, width: 100, textTransform: 'capitalize' }}
              variant="caption"
              noWrap
              align="center"
            >
              {organization}
            </Typography>
          </div>
        </div>
        <div className="">
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginLeft: 0.5, marginRight: 0.5 }}
          />
          <Typography variant="caption">
            <b>Connected on:</b>&nbsp;&nbsp;
            {dayjs(connectedOn).format('MMMM, D YYYY')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
