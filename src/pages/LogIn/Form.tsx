import { useState } from 'react';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import { useAuthLogin } from './hooks/useLogin';

export default function Form() {
  const { mutate } = useAuthLogin();
  const initialState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData);
    setFormData(initialState);
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="mt-5 py-4 w-11/12 mx-auto flex flex-col justify-center"
      >
        <TextField
          margin="normal"
          name="email"
          label="Email"
          placeholder="Enter email..."
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.email}
          key="email"
        />

        <TextField
          margin="normal"
          name="password"
          label="Password"
          placeholder="Enter your password..."
          type="password"
          onChange={handleInputChange}
          size="small"
          value={formData.password}
          key="password"
        />
        <div className="mx-auto w-1/2 mt-6">
          <Button
            variant="contained"
            sx={{ textTransform: 'initial' }}
            type="submit"
            fullWidth
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
