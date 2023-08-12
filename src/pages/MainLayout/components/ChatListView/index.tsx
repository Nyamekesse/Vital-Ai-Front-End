/* eslint-disable react/jsx-curly-newline */
/* eslint-disable prefer-arrow-callback */
import { forwardRef, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import ChatInfoCard from './components/ChatInfoCard';
import { useChats } from './hooks/useChats';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import ChatSessionView from '../ChatSessionView';
import {
  CareRecipient,
  HealthProfessional,
  UseMessagesById,
} from '../../../../types';
import { socket } from '../../../../sockets/clientSocket';

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
  const { chats } = useChats();

  const [currentUser, setCurrentUser] = useState<
    CareRecipient | HealthProfessional | null
  >(null);
  const [open, setOpen] = useState(false);
  const handleClickOpen = (
    participant: CareRecipient | HealthProfessional | null,
  ) => {
    setOpen(true);
    setCurrentUser(participant);
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
          {chats.length ? (
            chats.map((chat, index) => {
              const participant = chat.participant[0];
              return (
                <div
                  key={index}
                  className="w-full"
                  onClick={() => handleClickOpen(participant)}
                  role="button"
                  tabIndex={index}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handleClickOpen(participant);
                    }
                  }}
                >
                  <ChatInfoCard
                    displayPicture={participant.displayPicture}
                    firstName={participant.firstName}
                    lastName={participant.lastName}
                  />
                </div>
              );
            })
          ) : (
            <EmptyResults message="No chats available at the moment" />
          )}
        </div>
      </Dialog>
      <ChatSessionView
        open={open}
        currentUser={currentUser}
        handleClose={handleClose}
      />
    </div>
  );
}
