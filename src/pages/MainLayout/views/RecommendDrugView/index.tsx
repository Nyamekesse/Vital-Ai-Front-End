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
import { useOutletContext } from 'react-router-dom';
import { useRecommend } from './hooks/useRecommendDrug';
import Display from '../../../../components/DisplayModal';
import { ContextType } from '../../../../types';
import { listOfDiseases } from '../../../../shared/constants';

export default function RecommendDrugView() {
  const { storedUser } = useOutletContext<ContextType>();

  const { mutate, data } = useRecommend();
  const [formData, setFormData] = useState({
    sex: '',
    age: '',
    disease: '',
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
    mutate(formData);
    setFormData({
      sex: '',
      age: '',
      disease: '',
    });
  };
  return (
    <>
      <div className="flex pt-3 flex-col items-center">
        <Typography variant="h6" mt={4} mb={2}>
          Drug Recommendation
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mt-3 py-4 w-11/12 mx-auto flex flex-col justify-center"
        >
          <TextField
            margin="dense"
            name="age"
            label="Age"
            placeholder="Contact Info"
            type="number"
            onChange={handleInputChange}
            value={formData.age}
            size="small"
            key="contactInfo"
            inputProps={{
              min: 1,
              max: 100,
            }}
          />
          <div className="my-3">
            <Select
              id="select-gender"
              label="Gender"
              name="sex"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleGender}
              value={formData.sex}
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
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </div>
          <div className="my-3">
            <Select
              id="select-disease"
              label="Disease"
              name="disease"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleGender}
              value={formData.disease}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Disease';
                }
                return selected;
              }}
            >
              {listOfDiseases.map((disease, index) => {
                return (
                  <MenuItem key={index} value={disease}>
                    {disease.toLocaleUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </div>

          <div className="mx-auto w-1/2 mt-6">
            <Button
              sx={{ textTransform: 'initial' }}
              variant="contained"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      {data && <Display content={data} userType={storedUser.user.userType} />}
    </>
  );
}
