/* eslint-disable react/jsx-one-expression-per-line */
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton/IconButton';
import { useRemoveConnection } from '../hooks/useRemoveHealthProfessional';

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  displayPicture: string;
  specialization: string;
  organization: string;
};
export default function Card({
  id,
  firstName,
  lastName,
  displayPicture,
  organization,
  specialization,
}: Props) {
  const { mutate } = useRemoveConnection();
  return (
    <div className="flex p-4 shadow-lg rounded-lg w-[330px]">
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
          <IconButton onClick={() => mutate(id)}>
            <DeleteForeverIcon color="error" />
          </IconButton>
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
      </div>
    </div>
  );
}
