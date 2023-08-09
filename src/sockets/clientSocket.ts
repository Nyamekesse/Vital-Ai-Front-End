/* eslint-disable no-console */
import { io, Socket } from 'socket.io-client';
import jwt_decode from 'jwt-decode';

let socket: Socket | null = null;
export const socketServerConnection = async (token) => {
  const user = await jwt_decode(token);
  socket = io('http://localhost:5000', {
    withCredentials: true,
    path: '/s',
    auth: {
      user,
    },
  });
  socket.on('connect', () => {
    console.log(socket?.id);
  });
};
export const socketServerDisConnection = () => {
  if (socket) {
    socket.disconnect();
    console.log('Socket connection ended');
  }
};
