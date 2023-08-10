import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string | null;
};

export default function ChatInfoCard({
  firstName,
  lastName,
  displayPicture,
}: Props) {
  return (
    <div className="my-4 border-b-2 shadow-sm p-3 w-full">
      <div className="flex items-center">
        <div>
          <Avatar
            alt={firstName}
            src={`${displayPicture}`}
            sx={{ marginRight: '100px' }}
          />
        </div>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: '1rem', fontWeight: 500, color: '#212121' }}
        >
          {firstName} {lastName}
        </Typography>
      </div>
    </div>
  );
}
