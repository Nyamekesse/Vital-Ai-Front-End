import { io, Socket } from 'socket.io-client';
import { toast } from 'react-toastify';

let socket: Socket | null = null;
export const socketServerConnection = () => {
  socket = io('http://localhost:5000');
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
