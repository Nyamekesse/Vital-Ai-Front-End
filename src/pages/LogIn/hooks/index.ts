import axios from 'axios'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../axios-instance'
import { setStoredUser } from '../../../user-storage'

interface FormData {
  email: string
  password: string
}
const SERVER_ERROR = 'There was an error contacting the server.'
async function signin({ email, password }: FormData) {
  try {
    const { data } = await axiosInstance.post('/auth/login', {
      email,
      password,
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

async function getUserDetails() {
  try {
    const { data } = await axiosInstance.get('/user/me')
    setStoredUser(data.user)
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR
    throw new Error(message)
  }
}

export function useAuthLogin() {
  const navigate = useNavigate()
  const { mutate } = useMutation((data: FormData) => signin(data), {
    onSuccess: () => {
      getUserDetails()
      toast.success('Login Successful')
      navigate('/', { replace: true })
    },
  })

  return { mutate }
}