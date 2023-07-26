import Typography from '@mui/material/Typography/Typography'

export default function PatientInformation() {
  return (
    <div className="flex flex-col">
      <Typography
        variant="h5"
        mt={3}
        mb={1}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        Patient Information
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Full Name&nbsp;&nbsp;&nbsp;&nbsp;: Samuel Nyamekesse
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Gender&nbsp;&nbsp;&nbsp;&nbsp;: Male
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Age&nbsp;&nbsp;&nbsp;&nbsp;: 26
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Problem&nbsp;&nbsp;&nbsp;&nbsp;: Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae vitae ducimus odio rem, voluptatibus aliquid
        natus voluptatem enim
      </Typography>
    </div>
  )
}
