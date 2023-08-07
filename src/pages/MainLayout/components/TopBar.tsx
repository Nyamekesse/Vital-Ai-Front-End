/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dayjs from 'dayjs';
import MobileMenu from './MobileMenu';
import NotificationsView from '../views/NotificationsView';
import { UserType } from '../../../types';
import { useNotifications } from '../views/NotificationsView/hooks/useNotifications';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string;
  userType: string;
};
export default function TopBar({
  firstName,
  lastName,
  displayPicture,
  userType,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const now = dayjs();
  const hour = now.hour();
  let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
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
  const { unreadNotification } = useNotifications();
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
          <Typography variant="caption" fontSize="0.8rem">
            {greeting}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {userType === UserType.HEALTH_PROFESSIONAL && 'Dr.'} {firstName}{' '}
            {lastName}
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center mr-[5%] w-[60px]">
        {userType !== UserType.HEALTH_PROFESSIONAL && (
          <IconButton>
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        )}
        <IconButton onClick={handleClickOpen}>
          <Badge badgeContent={unreadNotification} color="primary">
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
