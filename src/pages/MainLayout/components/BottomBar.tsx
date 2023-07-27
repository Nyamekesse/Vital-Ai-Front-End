import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HomeIcon from '@mui/icons-material/Home'
import AiIcon from '../../../components/AiIcon/AiIcon'
import ChatSessionView from '../views/ChatSessionView'

type NavigationValue = 'home' | 'appointments'

export default function BottomBar() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleNavChange = (value: NavigationValue) => {
    if (value === 'home') {
      navigate('/', { replace: true })
    } else if (value === 'appointments') {
      navigate('/all-appointments', { replace: true })
    }
  }
  return (
    <>
      <BottomNavigation
        sx={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)' }}
        showLabels
        value="home"
        onChange={(_event, value) => handleNavChange(value)}
      >
        <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction icon={<AiIcon />} onClick={handleClickOpen} />
        <BottomNavigationAction
          value="appointments"
          label="Appointments"
          icon={<BookmarkIcon />}
        />
      </BottomNavigation>
      <ChatSessionView open={open} handleClose={handleClose} />
    </>
  )
}
