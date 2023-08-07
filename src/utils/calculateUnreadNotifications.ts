import { Notification } from '../types';

export function countUnreadNotifications(notifications: Notification[]) {
  return notifications.reduce((unreadCount, notification) => {
    if (!notification.isRead) {
      return unreadCount + 1;
    }
    return unreadCount;
  }, 0);
}
