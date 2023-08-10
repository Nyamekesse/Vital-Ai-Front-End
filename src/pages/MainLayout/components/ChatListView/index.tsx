/* eslint-disable prefer-arrow-callback */
import { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import ChatInfoCard from './components/ChatInfoCard';
import { useChats } from './hooks/useChats';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import ChatSessionView from '../ChatSessionView';
import { CareRecipient } from '../../../../types';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type Props = {
  openChatLists: boolean;
  handleChatListClose: () => void;
};

export default function ChatListView({
  openChatLists,
  handleChatListClose,
}: Props) {
  const { dummyChats } = useChats();
  const [currentUser, setCurrentUser] = useState<CareRecipient | null>(null);
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState('');
  const handleClickOpen = (id: string) => {
    setChatId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openChatLists}
        onClose={handleChatListClose}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col relative">
          <TopBar handleClose={handleChatListClose} />
        </div>
        <div className="flex flex-col items-start justify-center mt-16 mb-16 p-3">
          {dummyChats.length ? (
            dummyChats.map((chat, index) => {
              return (
                <div
                  key={index}
                  className="w-full"
                  onClick={() => handleClickOpen('kknojn4')}
                  role="button"
                  tabIndex={index}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      console.log('hi');
                    }
                  }}
                >
                  <ChatInfoCard
                    displayPicture="https://api.multiavatar.com/enmxb2qen6.svg?apikey=LFTk59wNposvr3"
                    firstName="Samuel"
                    lastName="Nyamekesse"
                  />
                </div>
              );
            })
          ) : (
            <EmptyResults message="No chats available at the moment" />
          )}
        </div>
      </Dialog>
      <ChatSessionView open={open} chatId={chatId} handleClose={handleClose} />
    </div>
  );
}
