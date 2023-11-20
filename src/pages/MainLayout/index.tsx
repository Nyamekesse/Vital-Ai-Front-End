import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
  socketServerConnection,
  socketServerDisConnection,
} from '../../sockets/clientSocket';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { useUserInfo } from '../LogIn/hooks/useUserInfo';
import { UserType } from '../../types';
import { parseJwt } from '../../utils/extractUserType';

export default function MainLayout() {
  const [token] = useState(sessionStorage.getItem('token'));
  const [isLoggedIn] = useState(sessionStorage.getItem('isLoggedIn'));
  const [userType] = useState(sessionStorage.getItem('userType'));
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);
  const { data: user } = useUserInfo();

  let profileCompleted = false;
  if (token !== null) {
    profileCompleted = parseJwt(token).profileCompleted === true;
  }

  useEffect(() => {
    setBottomNavHeight(
      (document.querySelector('.bottom-nav') as HTMLElement)?.offsetHeight,
    );
    setTopNavHeight(
      (document.querySelector('.top-nav') as HTMLElement)?.offsetHeight,
    );

    isLoggedIn === 'true'
      ? socketServerConnection(token)
      : socketServerDisConnection();
  }, [isLoggedIn, token]);
  return isLoggedIn === 'true' && profileCompleted ? (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar
          firstName={user?.firstName}
          lastName={user?.lastName}
          displayPicture={user?.displayPicture}
          userType={userType}
        />
      </div>
      <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
        <Outlet />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar userType={userType as UserType} />
      </div>
    </div>
  ) : isLoggedIn === 'true' && !profileCompleted ? (
    <Navigate to="/new/profile/me" replace />
  ) : (
    <Navigate to="/log-in" replace />
  );
}
