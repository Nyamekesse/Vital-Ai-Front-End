import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import { LogInPage, MainLayout, SignUpPage } from './pages'
import FilterHealthProfessionals from './pages/MainLayout/views/FilterHealthProfessionalsView'
import BookAppointmentView from './pages/MainLayout/views/BookAppointmentView'
import AppointmentsHistoryView from './pages/MainLayout/views/AppointmentsHistoryView'
import AppointmentDetails from './pages/MainLayout/views/AppointmentDetailsView'
import FillProfile from './pages/MainLayout/views/FillProfileView'
import HomeScreen from './pages/MainLayout/views/HomeView'

function App() {
  const [open] = useState(false)
  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleOpen = () => {
  //   setOpen(true)
  // }
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route
            path="/filter/health-professional/:id"
            element={<FilterHealthProfessionals />}
          />
          <Route path="/new-appointment" element={<BookAppointmentView />} />
          <Route
            path="/all-appointments"
            element={<AppointmentsHistoryView />}
          />
          <Route
            path="/appointment/:id/details"
            element={<AppointmentDetails />}
          />
          <Route path="/profile/:id/me" element={<FillProfile />} />
        </Route>
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/register-new-user" element={<SignUpPage />} />
      </Routes>
      <Loading open={open} />
    </div>
  )
}

export default App
