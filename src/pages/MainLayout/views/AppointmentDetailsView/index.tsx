import Button from '@mui/material/Button/Button';
import { useParams } from 'react-router-dom';
import PatientInformation from './components/PatientInformation';
import ProfileCard from './components/ProfileCard';
import ScheduleAbout from './components/ScheduleAbout';
import MessagingIcon from '../../../../components/MessagingIcon';
import { useGetAppointmentDetails } from './hooks/useGetAppointmentDetails';

export default function AppointmentDetails() {
  const { id = '' } = useParams();
  const appointmentDetails = useGetAppointmentDetails(id);
  console.log(appointmentDetails);

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
  );
}
