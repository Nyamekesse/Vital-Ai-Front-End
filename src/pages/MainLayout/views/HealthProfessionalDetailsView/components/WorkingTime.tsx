import { Typography } from '@mui/material';
import dayjs from 'dayjs';

type Props = {
  openTime: string | Date;
  closeTime: string | Date;
};

export default function WorkingTime({ closeTime, openTime }: Props) {
  const openTimeLocale = dayjs(openTime).format('h:mmA');
  const closeTimeLocale = dayjs(closeTime).format('h:mmA');
  return (
    <div>
      <Typography
        variant="h5"
        mt={3}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        Working time
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 400 }} mt={2}>
        Monday - Friday {openTimeLocale} - {closeTimeLocale}
      </Typography>
    </div>
  );
}
