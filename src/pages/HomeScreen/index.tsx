import { useEffect, useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MainScreen from './views/main'
import TopBar from './components/TopBar'

function TopView() {
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
    <div
      className="flex-grow-1"
      style={{
        marginTop: topNavHeight,
        marginBottom: bottomNavHeight,
      }}
    >
      <MainScreen />
    </div>
  )
}

export default function HomeScreen() {
  const [value, setValue] = useState(0)

  return (
    <div className="flex flex-col">
      <div className="top-nav fixed left-0 right-0">
        <TopBar />
      </div>
      <TopView />
      <div className="bottom-nav fixed bottom-0 left-0 right-0">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    </div>
  )
}
