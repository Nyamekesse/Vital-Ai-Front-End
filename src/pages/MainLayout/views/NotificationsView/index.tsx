/* eslint-disable prefer-arrow-callback */
import { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions/transition';
import Slide from '@mui/material/Slide/Slide';
import Dialog from '@mui/material/Dialog/Dialog';
import TopBar from './components/TopBar';
import NotificationCard from './components/NotificationCard';
import { useNotifications } from './hooks/useNotifications';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { useNotificationUpdate } from './hooks/useNotificationUpdate';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  notificationOpen: boolean;
  handleNotificationClose: () => void;
};

export default function NotificationsView({
  notificationOpen,
  handleNotificationClose,
}: Props) {
  const { notifications } = useNotifications();
  const { markAsRead } = useNotificationUpdate();
  return (
    <div>
      <Dialog
        fullScreen
        open={notificationOpen}
        onClose={handleNotificationClose}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col relative">
          <TopBar handleClose={handleNotificationClose} />
          <div className="flex flex-col mt-16 mb-16 w-full p-3">
            {notifications.length ? (
              notifications.map((notification, index) => {
                const { id, title, message, isRead, createdAt } = notification;
                return (
                  <div
                    role="button"
                    tabIndex={index}
                    key={id}
                    onClick={() => markAsRead(id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        markAsRead(id);
                      }
                    }}
                  >
                    <NotificationCard
                      title={title}
                      message={message}
                      isRead={isRead}
                      createdAt={createdAt}
                    />
                  </div>
                );
              })
            ) : (
              <EmptyResults message="No notifications now enjoy the silence" />
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
