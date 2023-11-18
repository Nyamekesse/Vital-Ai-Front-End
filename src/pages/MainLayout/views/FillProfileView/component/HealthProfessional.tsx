import { useEffect, useState } from 'react';
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
import { styled } from '@mui/material/styles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useUpdateProfileDetails } from '../hooks/useUpDateProfile';
import { useUserInfo } from '../../../../LogIn/hooks/useUserInfo';
import LoadingSpinner from '../../../../../components/LoadingCircle';
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
export default function HealthProfessionalView() {
  const { data: user, isLoading } = useUserInfo();
  const { mutate } = useUpdateProfileDetails();
  const { mutate: uploadImage, data } = useImageFileUpload();
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    experience: user?.experience,
    medicalLicenseNumber: user?.medicalLicenseNumber,
    gender: user?.gender,
    contactInfo: user?.contactInfo,
    specialization: user?.specialization.name,
    displayPicture: user?.displayPicture,
    about: user?.about,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
      return;
    }
    setFormData(() => ({
      firstName: user?.firstName,
      lastName: user?.lastName,
      experience: user?.experience,
      medicalLicenseNumber: user?.medicalLicenseNumber,
      gender: user?.gender,
      contactInfo: user?.contactInfo,
      specialization: user?.specialization.name,
      displayPicture: user?.displayPicture,
      about: user?.about,
    }));
  }, [data, user]);
  return (
    <div className="flex pt-3 flex-col items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Typography variant="h6" mb={2}>
            Fill Your Profile
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
              defaultValue={user?.firstName}
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
              defaultValue={user?.lastName}
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
              disabled
              defaultValue={user?.specialization.name}
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
              defaultValue={user?.medicalLicenseNumber}
              key="medicalLicenseNumber"
            />
            <TextField
              margin="dense"
              name="experience"
              label="Experience"
              placeholder="Contact Info"
              defaultValue={user?.experience}
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
              defaultValue={user?.contactInfo}
              key="contactInfo"
            />
            <div className="my-3">
              <Select
                id="select-gender"
                defaultValue={user?.gender}
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
              defaultValue={user?.about}
              margin="dense"
              name="about"
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
        </>
      )}
    </div>
  );
}
