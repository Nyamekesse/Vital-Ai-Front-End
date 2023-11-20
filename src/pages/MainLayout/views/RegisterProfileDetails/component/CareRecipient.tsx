import { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { useRegisterProfileDetails } from '../hooks/useRegisterProfileDetails';
import { useImageFileUpload } from '../hooks/useImageUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function CareRecipientView() {
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '2000-04-19',
    gender: '',
    age: '',
    contactInfo: '',
    location: '',
    displayPicture: '',
    healthBackground: '',
  };
  const { mutate } = useRegisterProfileDetails();
  const { mutate: uploadImage, data } = useImageFileUpload();
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (date) => {
    setFormData((prevValues) => ({
      ...prevValues,
      dateOfBirth: dayjs(date).format('YYYY-MM-DD'),
    }));
  };
  const handleGender = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.target;
    const imageData = new FormData();
    files?.length && imageData.append('profileImage', files[0]);

    uploadImage(imageData);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
  };

  useEffect(() => {
    if (data) {
      setFormData((prevValues) => ({
        ...prevValues,
        displayPicture: data?.imageUrl,
      }));
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center py-3 px-3">
      <Typography variant="h6" mb={2}>
        Update us with your Profile
      </Typography>
      <div className="relative">
        <div className="absolute -right-4 bottom-4 z-10">
          <Button
            component="label"
            variant="text"
            startIcon={<AddAPhotoIcon style={{ fontSize: 30 }} />}
            disableRipple
            disableTouchRipple
          >
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
        </div>

        <div className="">
          <Avatar
            alt={formData.firstName}
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
          name="age"
          label="Age"
          placeholder="Enter lastname..."
          type="number"
          onChange={handleInputChange}
          size="small"
          value={formData.age}
          key="age"
          inputProps={{
            min: 16,
            max: 100,
          }}
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
                return 'Gender';
              }
              return selected;
            }}
          >
            <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
          </Select>
        </div>

        <div className="w-full">
          <DateField
            value={dayjs(formData.dateOfBirth)}
            sx={{ padding: '0px' }}
            onChange={handleDateChange}
            format="YYYY-MM-DD"
          />
        </div>
        <TextField
          value={formData.healthBackground}
          margin="dense"
          name="healthBackground"
          placeholder="Please tell us about your health Bio"
          type="text"
          multiline
          minRows={2}
          maxRows={4}
          onChange={handleInputChange}
          key="healthBackground"
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
