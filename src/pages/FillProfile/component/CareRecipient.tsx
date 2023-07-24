/* eslint-disable no-console */
import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { DateField } from '@mui/x-date-pickers/DateField'
import moment from 'moment'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function CareRecipient() {
  const [date, setDate] = useState<Date | null>(null)
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    contactInfo: '',
    location: '',
    healthBio: '',
  }
  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handleDate = (date: Date | null) => {
    formData.dateOfBirth = moment(date).format('YYYY-MM-DD')
    setDate(null)
  }
  const handleGender = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    setFormData(initialState)
  }
  return (
    <div className="flex pt-3 flex-col items-center h-screen">
      <Typography variant="h6" mb={2}>
        Fill Your Profile
      </Typography>
      <div className="relative">
        <div className="absolute right-3 bottom-4 z-30">
          <AddAPhotoIcon
            fontSize="large"
            color="primary"
            onClick={() => console.log('add photo')}
          />
        </div>
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
          sx={{ width: 150, height: 150 }}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-3 py-4 w-11/12 mx-auto flex flex-col justify-center"
      >
        <TextField
          margin="dense"
          name="firstName"
          label="First Name"
          placeholder="Enter firstname..."
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.firstName}
          key="firstName"
        />
        <TextField
          margin="dense"
          name="lastName"
          label="Last Name"
          placeholder="Enter lastname..."
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.lastName}
          key="lastname"
        />
        <TextField
          margin="dense"
          name="location"
          label="Location"
          placeholder="location"
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.location}
          key="location"
        />
        <TextField
          margin="dense"
          name="contactInfo"
          label="Contact Info"
          placeholder="Contact Info"
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.contactInfo}
          key="contactInfo"
        />
        <div className="my-3">
          <Select
            id="select-gender"
            value={formData.gender}
            label="Gender"
            name="gender"
            displayEmpty
            input={<OutlinedInput />}
            onChange={handleGender}
            fullWidth
            size="small"
            margin="dense"
            renderValue={(selected) => {
              if (!selected) {
                return 'Gender'
              }
              return selected
            }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </div>

        <div className="w-full">
          <DateField
            value={date}
            sx={{ padding: '0px' }}
            onChange={(date) => handleDate(date)}
          />
        </div>
        <TextField
          margin="dense"
          name="healthBio"
          placeholder="Please tell us about your health Bio"
          type="text"
          multiline
          minRows={2}
          maxRows={4}
          onChange={handleInputChange}
          value={formData.healthBio}
          key="healthBio"
        />
        <div className="mx-auto w-1/2 mt-6">
          <Button
            sx={{ textTransform: 'initial' }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  )
}
