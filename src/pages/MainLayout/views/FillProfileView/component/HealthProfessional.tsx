import { useState } from 'react';
import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useUserInfo } from '../../../../LogIn/hooks/useUserInfo';

export default function HealthProfessionalView() {
  const userDetails = useUserInfo();
  const [formData, setFormData] = useState({
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    experience: userDetails?.experience,
    medicalLicenseNumber: userDetails?.medicalLicenseNumber,
    gender: userDetails?.gender,
    contactInfo: userDetails?.contactInfo,
    specialization: userDetails?.specialization.name,
    displayPicture: userDetails?.displayPicture,
    about: userDetails?.about,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleGender = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex pt-3 flex-col items-center">
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
          alt={formData.firstName}
          src={formData.displayPicture}
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
          defaultValue={userDetails.firstName}
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
          defaultValue={userDetails.lastName}
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
          defaultValue={userDetails.specialization.name}
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
          defaultValue={userDetails.medicalLicenseNumber}
          key="medicalLicenseNumber"
        />
        <TextField
          margin="dense"
          name="experience"
          label="Experience"
          placeholder="Contact Info"
          defaultValue={userDetails.experience}
          type="text"
          onChange={handleInputChange}
          size="small"
          key="experience"
        />
        <TextField
          margin="dense"
          name="contactInfo"
          label="Contact Info"
          placeholder="Contact Info"
          type="text"
          onChange={handleInputChange}
          size="small"
          defaultValue={userDetails.contactInfo}
          key="contactInfo"
        />
        <div className="my-3">
          <Select
            id="select-gender"
            defaultValue={userDetails.gender}
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
                return 'Gender';
              }
              return selected;
            }}
          >
            <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
          </Select>
        </div>
        <TextField
          defaultValue={userDetails.about}
          margin="dense"
          name="healthBio"
          placeholder="Please tell us about your educational background"
          type="text"
          multiline
          minRows={2}
          maxRows={4}
          onChange={handleInputChange}
          key="about"
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
  );
}
