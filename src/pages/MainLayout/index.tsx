import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { getStoredUser } from '../../user-storage';
import { InfoResponse } from '../../types';
import { socketServerConnection } from '../../sockets/clientSocket';

export default function MainLayout() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['vital_ai_token']);
  const [storedUser, setStoredUser] = useState<InfoResponse>(getStoredUser());
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
    if (!cookies.vital_ai_token) {
      navigate('/log-in');
    } else {
      socketServerConnection(cookies.vital_ai_token);
    }
  }, [cookies.vital_ai_token, navigate, storedUser]);
  return cookies.vital_ai_token && storedUser ? (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar
          firstName={storedUser?.firstName}
          lastName={storedUser?.lastName}
          displayPicture={storedUser?.displayPicture}
        />
      </div>
      <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
        <Outlet />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar />
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" replace />
  );
}
