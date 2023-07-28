import axios from 'axios'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../axios-instance'

interface FormData {
  username: string
  email: string
  password: string
  userType: string
}
const SERVER_ERROR = 'There was an error contacting the server.'
async function signup({ username, password, email, userType }: FormData) {
  try {
    const { data } = await axiosInstance.post('/auth/register', {
      username,
      email,
      password,
      userType,
    })
    return data.message
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR
    throw new Error(message)
  }
}

export function useAuthSignUp() {
  const navigate = useNavigate()
  const { mutate } = useMutation((data: FormData) => signup(data), {
    onSuccess: () => {
      toast.success('Registration Successful')
      navigate('/log-in', { replace: true })
    },
  })

  return { mutate }
}
