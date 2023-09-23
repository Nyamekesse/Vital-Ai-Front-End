import { useState } from 'react';
import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { usePredict } from './hooks/usePredictDisease';
import { listOfSymptoms } from '../../../../shared/constants';
import { ContextType } from '../../../../types';
import Display from '../../../../components/DisplayModal';

export default function PredictDiseaseView() {
  const { storedUser } = useOutletContext<ContextType>();
  const { mutate, data } = usePredict();
  const [formData, setFormData] = useState({
    s1: '',
    s2: '',
    s3: '',
    s4: '',
    s5: '',
  });

  const handleSymptomChange = (event: SelectChangeEvent) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
    setFormData({
      s1: '',
      s2: '',
      s3: '',
      s4: '',
      s5: '',
    });
  };
  return (
    <>
      <div className="flex pt-3 flex-col items-center">
        <Typography variant="h6" mb={2} mt={5}>
          Predict disease
        </Typography>
        <Typography
          variant="caption"
          align="center"
          paddingLeft={3}
          paddingRight={3}
        >
          Enter five(5) symptoms you are feeling right now for the model to
          predict possible illness you are currently suffering from. Note that
          predictions may not be accurate and you are encouraged to book
          appointment with your Doctor. Self medication is not encouraged.
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mt-3 py-4 w-11/12 mx-auto flex flex-col justify-center"
        >
          <div className="my-3">
            <Select
              id="select-symptom1"
              label="Symptom 1"
              name="s1"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleSymptomChange}
              value={formData.s1}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Symptom 1';
                }
                return selected;
              }}
            >
              {listOfSymptoms.map((symptom, index) => {
                return (
                  <MenuItem key={index} value={symptom}>
                    {symptom.toLocaleUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="my-3">
            <Select
              id="select-symptom2"
              label="Symptom 2"
              name="s2"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleSymptomChange}
              value={formData.s2}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Symptom 2';
                }
                return selected;
              }}
            >
              {listOfSymptoms.map((symptom, index) => {
                return (
                  <MenuItem key={index} value={symptom}>
                    {symptom.toLocaleUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="my-3">
            <Select
              id="select-symptom3"
              label="Symptom 3"
              name="s3"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleSymptomChange}
              value={formData.s3}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Symptom 3';
                }
                return selected;
              }}
            >
              {listOfSymptoms.map((symptom, index) => {
                return (
                  <MenuItem key={index} value={symptom}>
                    {symptom.toLocaleUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="my-3">
            <Select
              id="select-symptom4"
              label="Symptom 4"
              name="s4"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleSymptomChange}
              value={formData.s4}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Symptom 4';
                }
                return selected;
              }}
            >
              {listOfSymptoms.map((symptom, index) => {
                return (
                  <MenuItem key={index} value={symptom}>
                    {symptom.toLocaleUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="my-3">
            <Select
              id="select-symptom5"
              label="Symptom 5"
              name="s5"
              displayEmpty
              input={<OutlinedInput />}
              onChange={handleSymptomChange}
              value={formData.s5}
              fullWidth
              size="small"
              margin="dense"
              renderValue={(selected) => {
                if (!selected) {
                  return 'Symptom 5';
                }
                return selected;
              }}
            >
              {listOfSymptoms.map((symptom, index) => {
                return (
                  <MenuItem key={index} value={symptom}>
                    {symptom.toLocaleUpperCase()}
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
