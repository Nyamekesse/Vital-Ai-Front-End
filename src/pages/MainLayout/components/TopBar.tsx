/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileMenu from './MobileMenu';
import NotificationsView from '../views/NotificationsView';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string;
};
export default function TopBar({ firstName, lastName, displayPicture }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [notificationOpen, setNotificationOpen] = useState(false);
  const handleClickOpen = () => {
    setNotificationOpen(true);
  };
  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };
  return (
    <div className="flex justify-between items-center px-2 py-3 shadow-md bg-white z-40 ">
      <div className="flex w-full">
        <div className="mr-3">
          <Avatar
            component="button"
            alt={firstName}
            src={`${displayPicture}`}
            onClick={handleClick}
          />
        </div>
        <div>
          <Typography variant="caption">Good Morning</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {firstName} {lastName}
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
  );
}
