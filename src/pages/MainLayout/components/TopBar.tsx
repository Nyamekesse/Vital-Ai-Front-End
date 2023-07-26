import { IconButton, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-2 py-3 shadow-md bg-white z-40">
      <div className="flex">
        <div className="mr-3">
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
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
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>
      </div>
    </div>
  )
}
