import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-2 py-3 shadow-md bg-white">
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
      <div className="flex justify-between items-center mr-[5%] ">
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>
      </div>
    </div>
  )
}
