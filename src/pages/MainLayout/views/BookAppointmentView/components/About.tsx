import { Typography } from '@mui/material';

type Props = {
  firstName: string;
  lastname: string;
  about: string;
};

export default function About({ firstName, lastname, about }: Props) {
  return (
    <div>
      <Typography
        variant="h5"
        mt={3}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        About {firstName} {lastname}
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 400 }} mt={2}>
        {about}
      </Typography>
    </div>
  );
}
