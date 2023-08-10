export const countUnreadChats = (chats) => {
  return chats.reduce((unreadChats, chat) => {
    if (!chat.isRead) {
      return unreadChats + 1;
    }
    return unreadChats;
  }, 0);
};
