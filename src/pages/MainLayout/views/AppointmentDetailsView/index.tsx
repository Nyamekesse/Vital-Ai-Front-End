import Button from '@mui/material/Button/Button';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useState } from 'react';
import PatientInformation from './components/PatientInformation';
import ProfileCard from './components/ProfileCard';
import ScheduleAbout from './components/ScheduleAbout';
import MessagingIcon from '../../../../components/MessagingIcon';
import { useGetAppointmentDetails } from './hooks/useGetAppointmentDetails';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { CareRecipient, HealthProfessional, UserType } from '../../../../types';
import ChatSessionView from '../../components/ChatSessionView';
import LoadingSpinner from '../../../../components/LoadingCircle';

export default function AppointmentDetails() {
  const [userType] = useState(sessionStorage.getItem('userType'));

  const { id = '' } = useParams();
  const { data: appointmentDetails, isLoading } = useGetAppointmentDetails(id);
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState<number[]>([]);
  const [currentUser, setCurrentUser] = useState<
    CareRecipient | HealthProfessional | null
  >(null);
  const handleClickOpen = () => {
    if (appointmentDetails && userType === UserType.CARE_RECIPIENT) {
      setCurrentUser(appointmentDetails.healthProfessional);
    }
    if (appointmentDetails && userType === UserType.HEALTH_PROFESSIONAL) {
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

  return (
    <>
      <div className="flex flex-col py-3 px-3">
        {isLoading ? (
          <LoadingSpinner />
        ) : appointmentDetails ? (
          <>
            {userType === UserType.CARE_RECIPIENT ? (
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
              disabled={!isSameDate || isAfterTime}
            >
              {isAfterTime
                ? 'Appointment Ended'
                : `Appointment Starts: ${dayjs(
                    appointmentDetails.scheduledTime,
                  )}`}
            </Button>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full absolute top-[40%]">
            <EmptyResults message="No details found" />
          </div>
        )}
      </div>
      <ChatSessionView
        open={open}
        handleClose={handleClose}
        currentUser={currentUser}
        userType={userType as UserType}
        location={end}
      />
    </>
  );
}
