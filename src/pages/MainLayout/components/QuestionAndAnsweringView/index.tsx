/* eslint-disable no-confusing-arrow */
import { ChangeEvent, forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import TextMessageSender from './components/TextMessageSender';
import TextMessageUser from './components/TextMessageUser';
import Send from '../../../../assets/vector/send.svg';
import { CareRecipient, HealthProfessional } from '../../../../types';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { useSubmitQuery } from './hooks/useQuestionAndAnswer';
import LoadingBubbles from '../../../../components/LoadingBubble';

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
  handleClose: () => void;
};

type Query = {
  _id: string;
  author: {
    role: string;
    display_picture: string | undefined;
  };
  content: string;
  date: string;
};

export default function QuestionAndAnsweringView({
  open,
  handleClose,
  currentUser,
}: Props) {
  const { isLoading, mutate } = useSubmitQuery();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Query[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };
  const handleSubmit = () => {
    if (import.meta.env.PROD) {
      alert('Model instance stopped due to accrued cost on AWS Sage Maker');
    } else {
      setMessage('');
      if (message.length > 0) {
        const newMessage = {
          _id: new Date().getTime().toString(),
          author: {
            role: 'User',
            display_picture: currentUser?.displayPicture,
          },
          content: message,
          date: new Date().toISOString(),
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        mutate(message, {
          onSuccess: (responseData) => {
            const res = {
              _id: new Date().getTime().toString(),
              author: {
                role: 'bot',
                display_picture:
                  'https://api.multiavatar.com/TA-Ai.svg?apikey=LFTk59wNposvr3',
              },
              content: responseData,
              date: new Date().toISOString(),
            };

            setMessages((prevMessages) => [...prevMessages, res]);
          },
        });
      }
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
          <TopBar handleClose={handleClose} />
          <div className="flex flex-col mt-16 mb-16 w-full p-3">
            {messages?.length ? (
              messages.map((chat: Query) => {
                if (chat.author?.role === 'User') {
                  return <TextMessageUser key={chat._id} text={chat.content} />;
                }
                return <TextMessageSender key={chat._id} text={chat.content} />;
              })
            ) : (
              <EmptyResults message="There are currently no chats with Vital Ai Bot" />
            )}
            {isLoading && (
              <div className="self-start">
                <LoadingBubbles />
              </div>
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
              className="text-white  rounded-full w-8 h-8 flex items-center justify-center"
            >
              <img src={Send} alt="send button" />
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

QuestionAndAnsweringView.defaultProps = {
  currentUser: null,
};
