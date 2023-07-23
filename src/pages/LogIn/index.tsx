import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Logo from '../../assets/logo.svg'

export default function LogInPage() {
  const initialState = {
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
    console.log(formData)
    setFormData(initialState)
  }
  return (
    <div className="flex pt-10 flex-col items-center h-screen">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <Typography variant="h6" mt={2}>
        Login to Your Account
      </Typography>
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
          key="username"
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
          <Button variant="contained" type="submit" fullWidth>
            Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
