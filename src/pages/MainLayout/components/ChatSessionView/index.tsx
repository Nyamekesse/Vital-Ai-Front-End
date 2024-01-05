/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-destructuring */

import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopBar from './components/TopBar';
import TextMessageSender from './components/TextMessageSender';
import TextMessageUser from './components/TextMessageUser';
import Send from '../../../../assets/vector/send.svg';
import {
  CareRecipient,
  HealthProfessional,
  SingleChatDetails,
  UseMessagesById,
  UserType,
} from '../../../../types';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { sendDirectMessage, socket } from '../../../../sockets/clientSocket';
import { useGetChatById } from './hooks/useGetChatsInfoById';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  currentUser?: CareRecipient | HealthProfessional | null;
  userType: UserType;
  location?: number[];
  handleClose: () => void;
};

export default function ChatSessionView({
  open,
  handleClose,
  currentUser,
  userType,
  location,
}: Props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [start, setStart] = useState<number[]>([]);
  // const [end, setEnd] = useState<number[]>(location);
  const [messages, setMessages] = useState<SingleChatDetails[] | null>(null);
  useGetChatById(currentUser?.userID);

  useEffect(() => {
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    const setCoordinates = async () => {
      try {
        const position: any = await getPosition();

        setStart([
          Number(position.coords.longitude),
          Number(position.coords.latitude),
        ]);
      } catch (error) {
        toast.error('An error occurred while fetching location');
      }
    };
    setCoordinates();
    socket &&
      socket.on('direct-chat-history', (data: UseMessagesById) => {
        const { messages } = data;
        setMessages(messages);
      });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };
  const handleSubmit = () => {
    setMessage('');
    if (message.length > 0) {
      sendDirectMessage({
        receiverId: currentUser?.userID,
        message,
      });
    }
  };
  const handleNavigation = () => {
    if (location) {
      navigate(`/map?lng=${location[0]}&lat=${location[1]}`, {
        state: { start },
      });
    }
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col relative">
          <TopBar currentUser={currentUser} handleClose={handleClose} />
          <div className="flex flex-col mt-16 mb-16 w-full p-3">
            {messages?.length ? (
              messages.map((chat: SingleChatDetails) => {
                if (chat.author !== currentUser?.userID) {
                  return <TextMessageUser key={chat._id} text={chat.content} />;
                }
                return <TextMessageSender key={chat._id} text={chat.content} />;
              })
            ) : (
              <EmptyResults message="There are currently no chats with this user" />
            )}
          </div>

          <div className="flex items-center border h-16 fixed left-0 right-0 bottom-0 w-full bg-current border-gray-300 rounded-tl-lg rounded-tr-lg px-4">
            <input
              name="message"
              value={message}
              onChange={handleChange}
              type="text"
              className="flex-1 mr-2 my-4 bg-transparent text-white focus:outline-none text-lg"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <img src={Send} alt="send button" />
            </button>
            {userType === UserType.HEALTH_PROFESSIONAL && (
              <IconButton color="primary" onClick={handleNavigation}>
                <NavigationIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
}

ChatSessionView.defaultProps = {
  currentUser: null,
  location: [0, 0],
};
