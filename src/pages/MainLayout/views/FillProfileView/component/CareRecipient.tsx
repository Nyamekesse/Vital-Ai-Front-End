/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { DateField } from '@mui/x-date-pickers/DateField'
import moment, { Moment } from 'moment'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import { getStoredUser } from '../../../../../user-storage'
import { CareRecipient } from '../../../../../types'

interface CareRecipientData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  contactInfo: string
  location: string
  displayPicture: string
  healthBackground: string
}

export default function CareRecipientView() {
  const [date, setDate] = useState<Date | null>(null)
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    contactInfo: '',
    location: '',
    displayPicture: '',
    healthBackground: '',
  }
  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    const activeUser: CareRecipientData = getStoredUser() as CareRecipientData
    activeUser && setFormData(activeUser)
  }, [])

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
    <div className="flex flex-col items-center py-3 px-3">
      <Typography variant="h6" mb={2}>
        Fill Your Profile
      </Typography>
      <div className="relative">
        <div className="absolute right-3 bottom-4 z-10">
          <AddAPhotoIcon
            fontSize="large"
            color="primary"
            onClick={() => console.log('add photo')}
          />
        </div>
        <div className="">
          <Avatar
            alt="Remy Sharp"
            src={formData.displayPicture}
            sx={{ width: 150, height: 150, zIndex: 0 }}
          />
        </div>
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
            <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
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
          value={formData.healthBackground}
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
