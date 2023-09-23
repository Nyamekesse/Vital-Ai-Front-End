import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import { UserType } from '../../../../types';
import AiIcon from '../../../../components/AiIcon/AiIcon';
import MessageIconFilled from '../../../../components/MessageIconFilled';
import ChatListView from '../ChatListView';
import QuestionAndAnsweringView from '../QuestionAndAnsweringView';

type NavigationValue = string;

export default function BottomBar({ userType }: { userType: string }) {
  const navigate = useNavigate();
  const [value, setValue] = useState('home');
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openChatLists, setOpenChatLists] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChatListsOpen = () => {
    setOpenChatLists(true);
  };
  const handleChatListClose = () => {
    setOpenChatLists(false);
  };
  const handleChange = (value: NavigationValue) => {
    setValue(value);
    if (value === 'home') {
      setIsActive(false);
      navigate('/', { replace: true });
    } else if (value === 'appointments') {
      setIsActive(false);
      navigate('/all-appointments', { replace: true });
    } else if (value === 'chat') {
      setIsActive(true);
    }
  };

  return (
    <>
      <BottomNavigation
        sx={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)' }}
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          handleChange(newValue);
        }}
      >
        <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} />
        {userType === UserType.CARE_RECIPIENT ? (
          <BottomNavigationAction
            value="chat"
            icon={<AiIcon isActive={isActive} />}
            onClick={handleClickOpen}
          />
        ) : (
          <BottomNavigationAction
            value="chat"
            icon={<MessageIconFilled isActive={isActive} />}
            onClick={handleChatListsOpen}
          />
        )}

        <BottomNavigationAction
          value="appointments"
          label="Appointments"
          icon={<BookmarkIcon />}
        />
      </BottomNavigation>
      <QuestionAndAnsweringView open={open} handleClose={handleClose} />
      <ChatListView
        userType={userType}
        openChatLists={openChatLists}
        handleChatListClose={handleChatListClose}
      />
    </>
  );
}
