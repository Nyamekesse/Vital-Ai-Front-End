import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;
export const socketServerConnection = (token: string) => {
  console.log(token);

  socket = io('http://localhost:5000', {
    withCredentials: true,
    path: '/s',
    auth: {
      token,
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
