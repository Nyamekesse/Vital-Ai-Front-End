/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuizIcon from '@mui/icons-material/Quiz';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../../../types';
import MobileMenu from '../MobileMenu';
import NotificationsView from '../../views/NotificationsView';
import { useNotifications } from '../../views/NotificationsView/hooks/useNotifications';

type Props = {
  firstName: string;
  lastName: string;
  displayPicture: string;
  userType: string | null;
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
  const navigate = useNavigate();
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
      <div className="flex justify-between items-center px-4 w-auto">
        {userType !== UserType.HEALTH_PROFESSIONAL && (
          <IconButton
            onClick={() => navigate('/favorite/health-professionals')}
          >
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        )}
        <IconButton
          onClick={() =>
            userType === UserType.HEALTH_PROFESSIONAL
              ? navigate('/recommend-drug')
              : navigate('/predict-disease')
          }
        >
          <QuizIcon color="primary" />
        </IconButton>
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
