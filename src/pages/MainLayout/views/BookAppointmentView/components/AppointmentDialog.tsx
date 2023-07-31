import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

type Props = {
  fullScreen: boolean;
  open: boolean;
  handleClose: () => void;
};

export default function AppointmentDialog({
  fullScreen,
  open,
  handleClose,
}: Props) {
  const appointmentInitialState = {
    appointmentDate: '',
    appointmentTime: '',
    patientProblem: '',
  };
  const [formData, setFormData] = useState(appointmentInitialState);

  const [, setDate] = useState<Date | null>(null);

  const handleCancel = () => {
    setFormData(appointmentInitialState);
    handleClose();
  };

  const handleDateChange = (date: Date | null) => {
    formData.appointmentDate = dayjs(date).format('YYYY-MM-DD');
    setDate(null);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setFormData(appointmentInitialState);
    handleClose();
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Appointment</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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

          <div className="w-full">
            <TextField
              sx={{ width: '100%' }}
              margin="dense"
              name="patientProblem"
              placeholder="Please provide a brief description of problem"
              type="text"
              multiline
              minRows={2}
              maxRows={4}
              onChange={handleInputChange}
              value={formData.patientProblem}
              key="patientProblem"
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
    </div>
  );
}
