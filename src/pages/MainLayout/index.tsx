/* eslint-disable prefer-destructuring */
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { getStoredUser } from '../../user-storage';
import { InfoResponse } from '../../types';
import { socketServerConnection } from '../../sockets/clientSocket';
import { fetchCookie } from '../../utils/fetchCookie';

export default function MainLayout() {
  const [vitalAiToken] = useState(fetchCookie());
  const [storedUser, setStoredUser] = useState<InfoResponse>(getStoredUser());

  const userType: string = storedUser.user.userType;
  const organizationId: string | undefined = storedUser.organization?.id;
  const organizationName: string | undefined = storedUser.organization?.name;

  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);
  useEffect(() => {
    setBottomNavHeight(
      (document.querySelector('.bottom-nav') as HTMLElement)?.offsetHeight,
    );
    setTopNavHeight(
      (document.querySelector('.top-nav') as HTMLElement)?.offsetHeight,
    );
    if (!storedUser) {
      setStoredUser(getStoredUser());
    }
    // if (vitalAiToken) {
    //   socketServerConnection(vitalAiToken);
    // }
  }, [vitalAiToken, storedUser]);
  return vitalAiToken && storedUser ? (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar
          firstName={storedUser?.firstName}
          lastName={storedUser?.lastName}
          displayPicture={storedUser!.displayPicture}
          userType={userType}
        />
      </div>
      <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
        <Outlet context={[userType, organizationId, organizationName]} />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar />
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" replace />
  );
}
