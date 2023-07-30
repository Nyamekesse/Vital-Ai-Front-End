import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import { LogInPage, MainLayout, SignUpPage } from './pages'
import FilterHealthProfessionals from './pages/MainLayout/views/FilterHealthProfessionalsView'
import BookAppointmentView from './pages/MainLayout/views/BookAppointmentView'
import AppointmentsHistoryView from './pages/MainLayout/views/AppointmentsHistoryView'
import AppointmentDetails from './pages/MainLayout/views/AppointmentDetailsView'
import FillProfile from './pages/MainLayout/views/FillProfileView'
import HomeScreen from './pages/MainLayout/views/HomeView'
import PageNotFound from './pages/404 page'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route
            path="/filter/health-professional/:id"
            element={<FilterHealthProfessionals />}
          />
          <Route
            path="/organizations/:id/health-professionals"
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
          <Route path="/profile/me" element={<FillProfile />} />
        </Route>
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/register-new-user" element={<SignUpPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Loading />
    </div>
  )
}

export default App
