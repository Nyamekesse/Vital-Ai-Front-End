import { Typography } from '@mui/material'

export default function About() {
  return (
    <div>
      <Typography
        variant="h5"
        mt={3}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        About me
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 400 }} mt={2}>
        Dr. Randy Wigham is the top most Immunologists specialist in Christ
        Hospital at London. She achived several awards for her wonderful
        contribution in medical field. She is available for private
        consultation. view more
      </Typography>
    </div>
  )
}
