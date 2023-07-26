import { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HomeIcon from '@mui/icons-material/Home'
import RobotIcon from './RobotIcon'

export default function BottomBar() {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)' }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction icon={<RobotIcon />} />
      <BottomNavigationAction label="Appointments" icon={<BookmarkIcon />} />
    </BottomNavigation>
  )
}
