/* eslint-disable prefer-arrow-callback */
import { ChangeEvent, forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import ChatInfoCard from './components/ChatInfoCard';
import { useChats } from './hooks/useChats';
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
  openChatLists: boolean;
  handleChatListClose: () => void;
};
const initialState = {
  text: '',
};
export default function ChatListView({
  openChatLists,
  handleChatListClose,
}: Props) {
  const { dummyChats } = useChats();
  const [query, setQuery] = useState(initialState);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  };
  const handleSubmit = () => {
    console.log(query);
    setQuery(initialState);
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
        <div className="flex flex-col items-start justify-center mt-16 mb-16 w-full p-3">
          {dummyChats.length ? (
            dummyChats.map((chat, index) => {
              return (
                <div key={index}>
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
    </div>
  );
}
