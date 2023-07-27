import { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MobileMenu from './MobileMenu'
import NotificationsView from '../views/NotificationsView'

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [notificationOpen, setNotificationOpen] = useState(false)
  const handleClickOpen = () => {
    setNotificationOpen(true)
  }
  const handleNotificationClose = () => {
    setNotificationOpen(false)
  }
  return (
    <div className="flex justify-between items-center px-2 py-3 shadow-md bg-white z-40 ">
      <div className="flex w-full">
        <div className="mr-3">
          <Avatar
            component="button"
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
            onClick={handleClick}
          />
        </div>
        <div>
          <Typography variant="caption">Good Morning</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Samuel Nyamekesse
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center mr-[5%] w-[60px]">
        <IconButton>
          <LocationOnIcon />
        </IconButton>
        <IconButton onClick={handleClickOpen}>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
      <MobileMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
      <NotificationsView
        notificationOpen={notificationOpen}
        handleNotificationClose={handleNotificationClose}
      />
    </div>
  )
}
