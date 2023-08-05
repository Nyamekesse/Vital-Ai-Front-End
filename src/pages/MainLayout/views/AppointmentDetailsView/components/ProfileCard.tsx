import Avatar from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography/Typography';

type Props = {
  image: string;
  firstName: string;
  lastName: string;
  specialization?: string;
  organization?: string;
};

export default function ProfileCard({
  image,
  firstName,
  lastName,
  specialization,
  organization,
}: Props) {
  return (
    <div className="flex p-4 shadow-md rounded-lg">
      <div className="">
        <Avatar
          alt={firstName}
          src={`${image}`}
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
            {specialization && 'Dr.'} {firstName} {lastName}
          </Typography>
        </div>
        <hr />
        <div className="mt-3">
          <div className="flex flex-col justify-center items-start">
            <Typography
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
              variant="caption"
              noWrap
              align="center"
            >
              {specialization}
            </Typography>

            <Typography
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
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

ProfileCard.defaultProps = {
  specialization: '',
  organization: '',
};
