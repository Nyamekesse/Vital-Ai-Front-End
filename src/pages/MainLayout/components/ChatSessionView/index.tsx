import { ChangeEvent, forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import TextMessageSender from './components/TextMessageSender';
import TextMessageUser from './components/TextMessageUser';
import Send from '../../../../assets/vector/send.svg';
import { CareRecipient, HealthProfessional } from '../../../../types';
import { SingleChatDetails, useGetChatById } from './hooks/useGetChatsInfoById';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';

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
  chatId: string;
  currentUser?: CareRecipient | HealthProfessional | null;
  handleClose: () => void;
};
const initialState = {
  text: '',
};
export default function ChatSessionView({
  open,
  chatId,
  handleClose,
  currentUser,
}: Props) {
  const [query, setQuery] = useState(initialState);
  const chatDetails = useGetChatById('5');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  };
  const handleSubmit = () => {
    setQuery(initialState);
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
            {chatDetails?.length ? (
              chatDetails.map((chat: SingleChatDetails) => {
                if (chat.sameAuthor) {
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
              name="text"
              value={query.text}
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

ChatSessionView.defaultProps = {
  currentUser: null,
};