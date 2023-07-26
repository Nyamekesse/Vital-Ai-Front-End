import Typography from '@mui/material/Typography/Typography'

export default function ScheduleAbout() {
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
        Today June 4 2023
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        06:00 - 06:30 (30 mins)
      </Typography>
    </div>
  )
}
