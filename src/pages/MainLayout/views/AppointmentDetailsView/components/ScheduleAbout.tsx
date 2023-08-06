import Typography from '@mui/material/Typography/Typography';
import dayjs from 'dayjs';

type Props = {
  scheduledTime: string | Date;
};

export default function ScheduleAbout({ scheduledTime }: Props) {
  const formattedDate = dayjs(scheduledTime);
  const currentDate = dayjs();
  const differenceInDays = formattedDate.diff(currentDate, 'day');
  let displayText = '';
  if (differenceInDays === 0) {
    displayText = 'Today';
  } else if (differenceInDays === 1) {
    displayText = 'Tomorrow';
  } else if (differenceInDays > 1) {
    displayText = `${differenceInDays} days left`;
  }
  return (
    <div className="flex flex-col">
      <Typography
        variant="h5"
        mt={3}
        mb={1}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        Scheduled Appointment
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        {`${formattedDate}`}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        {displayText}
      </Typography>
    </div>
  );
}
