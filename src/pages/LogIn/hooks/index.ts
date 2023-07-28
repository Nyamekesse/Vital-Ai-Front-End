import axios from 'axios'
import { useMutation } from 'react-query'
import { axiosInstance } from '../../../axios-instance'

interface FormData {
  email: string
  password: string
}
const SERVER_ERROR = 'There was an error contacting the server.'
async function signin(email: string, password: string) {
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

export function useAuthLogin() {
  const { mutate } = useMutation((data: FormData) =>
    signin(data.email, data.password),
  )

  return { mutate }
}
