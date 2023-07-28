import React from 'react'
import ReactDOM from 'react-dom/client'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import App from './App'
import './index.css'
import { queryClient } from './react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>,
)
