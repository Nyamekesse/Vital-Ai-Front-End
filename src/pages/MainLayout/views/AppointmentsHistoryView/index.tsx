import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import DisplayAppointments from './components/DisplayAppointments';
import { useGetAllAppointments } from './hooks/useGetAllAppointments';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';

export default function AppointmentsHistoryView() {
  const appointments = useGetAllAppointments();
  const [value, setValue] = useState(1);
  const [change, setChange] = useState(0);
  const [status, setStatus] = useState('upcoming');
  const body = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
  ];
  const items = body[change];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleItems = (newValue: number) => {
    setChange(newValue);
    newValue === 0
      ? setStatus('upcoming')
      : newValue === 1
      ? setStatus('completed')
      : newValue === 2
      ? setStatus('cancelled')
      : setStatus('');
  };
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
            value={1}
            sx={{ textTransform: 'initial' }}
            label="Upcoming"
            onClick={() => handleItems(0)}
          />
          <Tab
            value={2}
            sx={{ textTransform: 'initial' }}
            label="Completed"
            onClick={() => handleItems(1)}
          />
          <Tab
            value={3}
            sx={{ textTransform: 'initial' }}
            label="Cancelled"
            onClick={() => handleItems(2)}
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
              <DisplayAppointments items={items} status={status} />
            </Link>
          ))
        ) : (
          <EmptyResults message="No Appointments for now" />
        )}
      </div>
    </div>
  );
}
