import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string | null;
  text: string;
};

export default function ReviewCard({
  firstName,
  lastName,
  displayPicture,
  text,
}: Props) {
  return (
    <div className="my-2 border-b-2 shadow-sm p-3">
      <div className="flex justify-between items-center">
        <div>
          <Avatar alt={firstName} src={`${displayPicture}`} />
        </div>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: '1rem', fontWeight: 500, color: '#212121' }}
        >
          {firstName} {lastName}
        </Typography>
      </div>
      <div className="">
        <Typography
          variant="caption"
          component="p"
          sx={{ fontWeight: 400 }}
          mt={2}
        >
          {text}
        </Typography>
      </div>
    </div>
  );
}
