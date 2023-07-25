import { Typography } from '@mui/material'

export default function WorkingTime() {
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
        Monday - Friday 08:00 AM - 20:00PM
      </Typography>
    </div>
  )
}
