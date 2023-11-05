/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-console */
import { io, Socket } from 'socket.io-client';
import jwt_decode from 'jwt-decode';
import { SingleChatDetails } from '../types';

export let socket: Socket | null = null;
export let messageHistory: SingleChatDetails[];
export const socketServerConnection = async (token) => {
  const user = await jwt_decode(token);
  socket = io(import.meta.env.VITE_REACT_APP_SOCKET_SERVER_URL, {
    withCredentials: true,
    path: '/s',
    auth: {
      user,
    },
  });
  socket.on('connect', () => {});
};
export const socketServerDisConnection = () => {
  if (socket) {
    socket.disconnect();
    console.log('Socket connection ended');
  }
};

export const sendDirectMessage = ({
  receiverId,
  message,
}: {
  receiverId: string | undefined;
  message: string;
}) => {
  const data = { receiverId, message };
  socket?.emit('direct-message', data);
};

export const getDirectHistory = (receiverId: string | undefined) => {
  const data = { receiverId };
  socket?.emit('direct-chat-history', data);
};
