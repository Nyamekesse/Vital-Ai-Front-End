import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchCookie } from '../../utils/fetchCookie';
import {
  socketServerConnection,
  socketServerDisConnection,
} from '../../sockets/clientSocket';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { useUserInfo } from '../LogIn/hooks/useUserInfo';

export default function MainLayout() {
  const [vitalAiToken] = useState(fetchCookie());
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);
  const storedUser = useUserInfo();

  useEffect(() => {
    setBottomNavHeight(
      (document.querySelector('.bottom-nav') as HTMLElement)?.offsetHeight,
    );
    setTopNavHeight(
      (document.querySelector('.top-nav') as HTMLElement)?.offsetHeight,
    );

    // vitalAiToken
    //   ? socketServerConnection(vitalAiToken)
    //   : socketServerDisConnection();
  }, [vitalAiToken]);
  return vitalAiToken ? (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar
          firstName={storedUser?.firstName}
          lastName={storedUser?.lastName}
          displayPicture={storedUser?.displayPicture}
          userType={storedUser?.user?.userType}
        />
      </div>
      <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
        <Outlet context={{ storedUser }} />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar userType={storedUser && storedUser?.user.userType} />
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" replace />
  );
}
