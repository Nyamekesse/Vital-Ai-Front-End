import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import About from './components/About'
import Card from './components/Card'
import ReviewCard from './components/ReviewCard'
import WorkingTime from './components/WorkingTime'
import AppointmentDialog from './components/AppointmentDialog'

export default function BookAppointmentView() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="py-2 px-3 flex flex-col justify-start">
        <Card />
        <About />
        <WorkingTime />
        <div className="my-3">
          <Button
            sx={{ textTransform: 'initial' }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Book Appointment
          </Button>
        </div>
        <Typography
          variant="h5"
          mt={3}
          sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
        >
          Reviews
        </Typography>
        <div className="flex flex-col">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <AppointmentDialog
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
      />
    </>
  )
}
