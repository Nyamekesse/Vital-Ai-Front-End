import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Logo from '../../assets/logo.svg'

export default function SignUpPage() {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setFormData(initialState)
  }
  return (
    <div className="flex pt-10 flex-col items-center h-screen">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <Typography variant="h6" mt={2}>
        Create New Account
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-5 py-4 w-11/12 mx-auto flex flex-col justify-center"
      >
        <TextField
          margin="dense"
          name="username"
          label="Username"
          placeholder="Enter your username..."
          type="text"
          onChange={handleInputChange}
          size="small"
          value={formData.username}
          key="username"
        />
        <TextField
          margin="dense"
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
          margin="dense"
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
            sx={{ textTransform: 'initial' }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  )
}
