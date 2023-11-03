import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import { LogInPage, MainLayout, SignUpPage } from './pages';
import FilterHealthProfessionals from './pages/MainLayout/views/FilterHealthProfessionalsView';
import AppointmentsHistoryView from './pages/MainLayout/views/AppointmentsHistoryView';
import AppointmentDetails from './pages/MainLayout/views/AppointmentDetailsView';
import FillProfile from './pages/MainLayout/views/FillProfileView';
import HomeScreen from './pages/MainLayout/views/HomeView';
import PageNotFound from './pages/404 page';
import HealthProfessionalDetailsView from './pages/MainLayout/views/HealthProfessionalDetailsView';
import FavoriteHealthProfessionalView from './pages/MainLayout/views/FavoriteHealthProfessionalView';
import PredictDiseaseView from './pages/MainLayout/views/PredictDiseaseView';
import RecommendDrugView from './pages/MainLayout/views/RecommendDrugView';
import { MapView } from './pages/MainLayout/views/MapView';
import 'mapbox-gl/dist/mapbox-gl.css';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeScreen />} />
            <Route
              path="/organizations/:id/health-professionals"
              element={<FilterHealthProfessionals />}
            />
            <Route
              path="/details/health-professional/:id"
              element={<HealthProfessionalDetailsView />}
            />
            <Route
              path="/all-appointments"
              element={<AppointmentsHistoryView />}
            />
            <Route
              path="/appointment/:id/details"
              element={<AppointmentDetails />}
            />
            <Route
              path="/favorite/health-professionals"
              element={<FavoriteHealthProfessionalView />}
            />
            <Route path="/map" element={<MapView />} />
            <Route path="/profile/me" element={<FillProfile />} />
            <Route path="/predict-disease" element={<PredictDiseaseView />} />
            <Route path="/recommend-drug" element={<RecommendDrugView />} />
          </Route>
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/register-new-user" element={<SignUpPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Loading />
      </div>
    </AuthProvider>
  );
}

export default App;
