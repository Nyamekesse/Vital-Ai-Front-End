import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { getStoredUser } from '../../user-storage';
import { InfoResponse } from '../../types';

function RenderViews() {
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);

  useEffect(() => {
    setBottomNavHeight(
      (document.querySelector('.bottom-nav') as HTMLElement).offsetHeight,
    );
    setTopNavHeight(
      (document.querySelector('.top-nav') as HTMLElement).offsetHeight,
    );
  }, []);

  return (
    <div style={{ marginBottom: bottomNavHeight, marginTop: topNavHeight }}>
      <Outlet />
    </div>
  );
}

export default function MainLayout() {
  const [storedUser, setStoredUser] = useState<InfoResponse>(getStoredUser());
  useEffect(() => {
    if (!storedUser) {
      setStoredUser(getStoredUser());
    }
  }, [storedUser]);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="top-nav fixed left-0 right-0 z-30">
        <TopBar
          firstName={storedUser?.firstName as string}
          lastName={storedUser?.lastName as string}
          displayPicture={storedUser?.displayPicture as string}
        />
      </div>
      <div>
        <RenderViews />
      </div>

      <div className="bottom-nav fixed bottom-0 left-0 right-0 z-30">
        <BottomBar />
      </div>
    </div>
  );
}
