/* eslint-disable react/jsx-curly-newline */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography/Typography';
import Chip from '@mui/material/Chip/Chip';
import { getAvailableTimes } from '../../../../utils/openHoursTimeDisplay';
import { useAddAppointment } from './hooks/useBookAppointment';

type Props = {
  healthProfessionalID: string;
  fullScreen: boolean;
  open: boolean;
  openTime: string | Date;
  closeTime: string | Date;
  handleClose: () => void;
};
export default function BookAppointmentView({
  healthProfessionalID,
  fullScreen,
  open,
  handleClose,
  openTime,
  closeTime,
}: Props) {
  const appointmentInitialState = {
    healthProfessionalID: '',
    scheduledTime: '',
    purpose: '',
  };

  const [formData, setFormData] = useState(appointmentInitialState);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const { mutate } = useAddAppointment();
  const availableOpenHours = getAvailableTimes(
    openTime.toString(),
    closeTime.toString(),
  );

  const handleCancel = () => {
    setFormData(appointmentInitialState);
    handleClose();
  };

  const handleDateChange = (date: Date | null) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !formData.purpose) {
      toast.error('All fields are required');
    } else {
      formData.scheduledTime = `${selectedDate}T${selectedTime}`;
      formData.healthProfessionalID = healthProfessionalID;
      mutate(formData);
      setFormData(appointmentInitialState);
      setSelectedDate(null);
      setSelectedTime(null);
      handleClose();
    }
  };
  const handleSelectTime = (event: React.MouseEvent<HTMLDivElement>) => {
    const formattedTime = dayjs(
      event.currentTarget.textContent,
      'h:mm:A',
    ).format('HH:mm:ss');
    setSelectedTime(formattedTime);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Appointment</DialogTitle>
      <DialogContent sx={{}}>
        <div className="">
          <StaticDatePicker
            disablePast
            slotProps={{
              actionBar: {
                actions: [],
              },
            }}
            onChange={handleDateChange}
          />
        </div>
        <div className="flex flex-col p-2 w-full">
          <Typography
            alignContent="flex-start"
            fontWeight={700}
            variant="h5"
            fontSize="1rem"
          >
            Select Hour : {selectedTime}
          </Typography>
          <div className="flex flex-wrap items-center justify-normal">
            {availableOpenHours.map((time, index) => (
              <Chip
                sx={{ margin: '0.5rem' }}
                key={index}
                label={dayjs(time).format('HH:mm:A')}
                onClick={handleSelectTime}
                color="primary"
                variant="outlined"
              />
            ))}
          </div>
        </div>
        <div className="w-full h-[100px]">
          <TextField
            sx={{ width: '100%' }}
            margin="dense"
            name="purpose"
            placeholder="Please provide a brief description of problem"
            type="text"
            maxRows={4}
            onChange={handleInputChange}
            value={formData.purpose}
            key="purpose"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button autoFocus onClick={handleSubmit}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}
