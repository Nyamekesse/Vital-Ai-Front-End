import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import moment, { Moment } from 'moment'
import { useState } from 'react'

type Props = {
  fullScreen: boolean
  open: boolean
  handleClose: () => void
}

export default function AppointmentDialog({
  fullScreen,
  open,
  handleClose,
}: Props) {
  const appointmentInitialState = {
    appointmentDate: '',
    appointmentTime: '',
  }
  const [formData, setFormData] = useState(appointmentInitialState)
  const [, setValue] = useState<Moment | null>(null)
  const [, setDate] = useState<Moment | null>(null)

  const handleCancel = () => {
    setFormData(appointmentInitialState)
    handleClose()
  }
  const handleTimeChange = (time: Moment | null) => {
    setValue(time)
    formData.appointmentTime = moment(time).format('HH:mm:ss')
  }
  const handleDateChange = (date: Date | null) => {
    formData.appointmentDate = moment(date).format('YYYY-MM-DD')
    setDate(null)
  }
  const handleSubmit = () => {
    console.log(formData)
    setFormData(appointmentInitialState)
    handleClose()
  }
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
          <div className="">
            <MobileTimePicker onChange={handleTimeChange} />
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
  )
}