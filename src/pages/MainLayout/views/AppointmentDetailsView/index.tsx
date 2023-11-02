import Button from '@mui/material/Button/Button';
import { useOutletContext, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useState } from 'react';
import PatientInformation from './components/PatientInformation';
import ProfileCard from './components/ProfileCard';
import ScheduleAbout from './components/ScheduleAbout';
import MessagingIcon from '../../../../components/MessagingIcon';
import { useGetAppointmentDetails } from './hooks/useGetAppointmentDetails';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import {
  CareRecipient,
  ContextType,
  HealthProfessional,
  UserType,
} from '../../../../types';
import ChatSessionView from '../../components/ChatSessionView';

export default function AppointmentDetails() {
  const { storedUser } = useOutletContext<ContextType>();
  const { user } = storedUser;

  const { id = '' } = useParams();
  const appointmentDetails = useGetAppointmentDetails(id);
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState<number[]>([]);
  const [currentUser, setCurrentUser] = useState<
    CareRecipient | HealthProfessional | null
  >(null);
  const handleClickOpen = () => {
    if (appointmentDetails && user.userType === UserType.CARE_RECIPIENT) {
      setCurrentUser(appointmentDetails.healthProfessional);
    }
    if (appointmentDetails && user.userType === UserType.HEALTH_PROFESSIONAL) {
      setCurrentUser(appointmentDetails.careRecipient);

      setEnd([
        Number(appointmentDetails.careRecipient.location.split(',')[1].trim()),
        Number(appointmentDetails.careRecipient.location.split(',')[2].trim()),
      ]);
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const currentDate = dayjs();

  const isSameDate = currentDate.isSame(
    appointmentDetails?.scheduledTime,
    'day',
  );
  const isAfterTime = currentDate.isAfter(
    appointmentDetails?.scheduledTime,
    'hour',
  );

  return appointmentDetails ? (
    <>
      <div className="flex flex-col py-3 px-3">
        {user.userType === UserType.CARE_RECIPIENT ? (
          <ProfileCard
            firstName={appointmentDetails.healthProfessional.firstName}
            lastName={appointmentDetails.healthProfessional.lastName}
            image={appointmentDetails.healthProfessional.displayPicture}
            organization={
              appointmentDetails.healthProfessional.organization.name
            }
            specialization={
              appointmentDetails.healthProfessional.specialization.name
            }
          />
        ) : (
          <ProfileCard
            firstName={appointmentDetails.careRecipient.firstName}
            lastName={appointmentDetails.careRecipient.lastName}
            image={appointmentDetails.careRecipient.displayPicture}
            age="45"
            location={appointmentDetails.careRecipient.location}
            id={id}
            appointmentStatus={appointmentDetails.status}
          />
        )}
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
          onClick={handleClickOpen}
          // disabled={!isSameDate || isAfterTime}
        >
          {isAfterTime
            ? 'Appointment Ended'
            : `Appointment Starts: ${dayjs(appointmentDetails.scheduledTime)}`}
        </Button>
      </div>
      <ChatSessionView
        open={open}
        handleClose={handleClose}
        currentUser={currentUser}
        userType={user.userType}
        location={end}
      />
    </>
  ) : (
    <div className="flex flex-col justify-center items-center w-full absolute top-[40%]">
      <EmptyResults message="No details found" />
    </div>
  );
}
