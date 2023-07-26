import Button from '@mui/material/Button/Button'
import PatientInformation from './components/PatientInformation'
import ProfileCard from './components/ProfileCard'
import ScheduleAbout from './components/ScheduleAbout'
import MessagingIcon from '../../../../components/MessaginIcon'

export default function AppointmentDetails() {
  return (
    <div className="flex flex-col py-3 px-3">
      <ProfileCard />
      <ScheduleAbout />
      <PatientInformation />
      <Button
        sx={{
          marginTop: 2,
          marginBottom: 1,
          textTransform: 'initial',
          padding: 1,
        }}
        variant="contained"
        startIcon={<MessagingIcon />}
      >
        Appointment starts at (16:00 PM)
      </Button>
    </div>
  )
}
