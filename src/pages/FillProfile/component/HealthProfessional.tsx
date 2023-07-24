import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'

export default function HealthProfessional() {
  const initialState = {
    firstName: '',
    lastName: '',
    specialization: '',
    medicalLicenseNumber: '',
    contactInfo: '',
  }
  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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
          name="specialization"
          label="Specialization"
          placeholder="Specialization"
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.specialization}
          key="specialization"
        />
        <TextField
          margin="dense"
          name="medicalLicenseNumber"
          label="Medical License Number"
          placeholder="Your medical LicenseNumber"
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.medicalLicenseNumber}
          key="medicalLicenseNumber"
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
