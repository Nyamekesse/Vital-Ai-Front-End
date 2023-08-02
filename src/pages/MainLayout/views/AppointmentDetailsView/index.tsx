import Button from '@mui/material/Button/Button';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import PatientInformation from './components/PatientInformation';
import ProfileCard from './components/ProfileCard';
import ScheduleAbout from './components/ScheduleAbout';
import MessagingIcon from '../../../../components/MessagingIcon';
import { useGetAppointmentDetails } from './hooks/useGetAppointmentDetails';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';

export default function AppointmentDetails() {
  const { id = '' } = useParams();
  const appointmentDetails = useGetAppointmentDetails(id);
  const currentDate = dayjs();

  const isSameDate = currentDate.isSame(
    appointmentDetails?.scheduledTime,
    'day',
  );
  const isAfterTime = currentDate.isBefore(
    appointmentDetails?.scheduledTime,
    'hour',
  );

  return appointmentDetails ? (
    <div className="flex flex-col py-3 px-3">
      <ProfileCard
        firstName={appointmentDetails.healthProfessional.firstName}
        lastName={appointmentDetails.healthProfessional.lastName}
        image={appointmentDetails.healthProfessional.displayPicture}
        organization={appointmentDetails.healthProfessional.organization.name}
        specialization={
          appointmentDetails.healthProfessional.specialization.name
        }
      />
      <ScheduleAbout scheduledTime={appointmentDetails.scheduledTime} />
      <PatientInformation
        firstName={appointmentDetails.careRecipient.firstName}
        lastName={appointmentDetails.careRecipient.lastName}
        gender={appointmentDetails.careRecipient.gender}
        purpose={appointmentDetails.purpose}
      />
      <Button
        sx={{
          marginTop: 2,
          marginBottom: 1,
          textTransform: 'initial',
          padding: 1,
        }}
        variant="contained"
        startIcon={<MessagingIcon />}
        disabled={!isSameDate || isAfterTime}
      >
        Appointment starts at{' '}
        {dayjs(appointmentDetails.scheduledTime).format('hh:mm A')}
      </Button>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center w-full absolute top-[40%]">
      <EmptyResults message="No details found" />
    </div>
  );
}
