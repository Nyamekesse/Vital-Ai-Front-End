/* eslint-disable react/jsx-one-expression-per-line */
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography/Typography';
import Divider from '@mui/material/Divider';

type Props = {
  firstName: string;
  lastname: string;
  specialization: string;
  organization: string;
  displayPicture: string;
};
export default function Card({
  firstName,
  lastname,
  specialization,
  organization,
  displayPicture,
}: Props) {
  return (
    <div className="flex p-4 shadow-md rounded-lg">
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
            Dr. {firstName} {lastname}
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
              textTransform="capitalize"
            >
              {specialization}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginLeft: 0.5, marginRight: 0.5 }}
            />
            <Typography
              sx={{ fontWeight: 500, width: 100 }}
              variant="caption"
              noWrap
              align="center"
            >
              {organization}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
