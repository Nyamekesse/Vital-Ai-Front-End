import Typography from '@mui/material/Typography/Typography'
import Logo from '../../assets/vector/logo.svg'
import Form from './Form'

export default function LogInPage() {
  return (
    <div className="flex pt-10 flex-col items-center h-screen">
      <div className="w-36 h-36 mb-5">
        <img src={Logo} alt="logo" />
      </div>
      <Typography variant="h6" mt={2}>
        Login to Your Account
      </Typography>
      <Form />
    </div>
  )
}
