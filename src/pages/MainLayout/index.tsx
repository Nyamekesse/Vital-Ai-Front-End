import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import HomeScreen from './views/HomeView'
import FillProfile from './views/FillProfileView'
import FilterHealthProfessionals from './views/FilterHealthProfessionalsView'
import BookAppointmentView from './views/BookAppointmentView'
import AppointmentsHistoryView from './views/AppointmentsHistoryView'

function RenderViews() {
  const [bottomNavHeight, setBottomNavHeight] = useState(0)
  const [topNavHeight, setTopNavHeight] = useState(0)

  useEffect(() => {
    setBottomNavHeight(
      (document.querySelector('.bottom-nav') as HTMLElement).offsetHeight,
    )
    setTopNavHeight(
      (document.querySelector('.top-nav') as HTMLElement).offsetHeight,
    )
  }, [])

  return (
    <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
      {/* <HomeScreen /> */}
      {/* <FillProfile /> */}
      {/* <FilterHealthProfessionals /> */}
      <BookAppointmentView />
      {/* <AppointmentsHistoryView /> */}
    </div>
  )
}

export default function MainLayout() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar />
      </div>
      <div>
        <RenderViews />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar />
      </div>
    </div>
  )
}
