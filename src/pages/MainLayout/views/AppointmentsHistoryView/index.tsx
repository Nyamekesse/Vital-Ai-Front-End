import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useGetAllAppointments } from './hooks/useGetAllAppointments';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import AppointmentInfoCard from './components/AppointmentInfoCard';

export default function AppointmentsHistoryView() {
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState('pending');
  const { appointments, setStatusFilter } = useGetAllAppointments(filter);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    setStatusFilter(filter);
  }, [filter, setStatusFilter]);
  return (
    <div className="py-3 px-3">
      <div className="fixed z-10 top-[76px] left-0 right-0">
        <Tabs
          sx={{ backgroundColor: 'white' }}
          centered
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            value={0}
            sx={{ textTransform: 'initial' }}
            label="Pending"
            onClick={() => setFilter('pending')}
          />
          <Tab
            value={1}
            sx={{ textTransform: 'initial' }}
            label="Upcoming"
            onClick={() => setFilter('upcoming')}
          />
          <Tab
            value={2}
            sx={{ textTransform: 'initial' }}
            label="Completed"
            onClick={() => setFilter('completed')}
          />
          <Tab
            value={3}
            sx={{ textTransform: 'initial' }}
            label="Cancelled"
            onClick={() => setFilter('cancelled')}
          />
        </Tabs>
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        {appointments.length ? (
          appointments.map((appointment) => (
            <Link
              key={appointment.id}
              to={`/appointment/${appointment.id}/details`}
            >
              <AppointmentInfoCard
                firstName={appointment.healthProfessional.firstName}
                lastName={appointment.healthProfessional.lastName}
                healthProfessionalImage={
                  appointment.healthProfessional.displayPicture
                }
                status={appointment.status}
                scheduledTime={appointment.scheduledTime}
              />
            </Link>
          ))
        ) : (
          <EmptyResults message="No Appointments for now" />
        )}
      </div>
    </div>
  );
}
