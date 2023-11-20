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
import { useSpecialization } from '../hooks/useSpecializations';
import { useRegisterProfileDetails } from '../hooks/useRegisterProfileDetails';
import { useImageFileUpload } from '../hooks/useImageUpload';
import { useOrganizations } from '../../HomeView/hooks/useOrganizations';

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
  const initialState = {
    firstName: '',
    lastName: '',
    experience: '',
    medicalLicenseNumber: '',
    gender: '',
    contactInfo: '',
    specializationId: '',
    displayPicture: '',
    about: '',
    organizationID: '',
  };

  const { mutate } = useRegisterProfileDetails();
  const { mutate: uploadImage, data } = useImageFileUpload();
  const [formData, setFormData] = useState(initialState);
  const { data: specializations } = useSpecialization();
  const [specializationState, setSpecialization] = useState(specializations);
  const { data: organizations } = useOrganizations();
  const [organizationsState, setOrganizations] = useState(organizations);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleGender = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSpecialization = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleOrganization = (event: SelectChangeEvent) => {
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
    setSpecialization(specializations);
    setOrganizations(organizations);
  }, [data, organizations, specializations]);
  return (
    <div className="flex pt-3 flex-col items-center">
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
          name="experience"
          label="Experience"
          placeholder="Years of Experience in field"
          value={formData.experience}
          type="number"
          onChange={handleInputChange}
          size="small"
          key="experience"
          inputProps={{
            min: 1,
            max: 100,
          }}
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
        <div className="my-3">
          <Select
            id="select-specializationId"
            value={formData.specializationId}
            label="Specialization"
            name="specializationId"
            displayEmpty
            input={<OutlinedInput />}
            onChange={handleSpecialization}
            fullWidth
            size="small"
            margin="dense"
            renderValue={(selected) => {
              if (!selected) {
                return 'Specialization';
              }
              const selectedSpecialization = specializationState.find(
                (spec) => spec.id === selected,
              );
              return selectedSpecialization
                ? selectedSpecialization.name.toUpperCase()
                : 'Specialization';
            }}
          >
            {specializationState.map((specialization) => {
              return (
                <MenuItem key={specialization.id} value={specialization.id}>
                  {specialization.name.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div className="my-3">
          <Select
            id="select-organizationID"
            value={formData.organizationID}
            label="Organization"
            name="organizationID"
            displayEmpty
            input={<OutlinedInput />}
            onChange={handleOrganization}
            fullWidth
            size="small"
            margin="dense"
            renderValue={(selected) => {
              if (!selected) {
                return 'Organization';
              }
              const selectedOrganization = organizationsState.find(
                (org) => org.id === selected,
              );
              return selectedOrganization
                ? selectedOrganization.name.toUpperCase()
                : 'Organization';
            }}
          >
            {organizationsState.map((organization) => {
              return (
                <MenuItem key={organization.id} value={organization.id}>
                  {organization.name.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <TextField
          value={formData.about}
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
    </div>
  );
}
