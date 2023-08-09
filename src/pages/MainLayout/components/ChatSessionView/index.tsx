/* eslint-disable prefer-arrow-callback */
import { ChangeEvent, forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TopBar from './components/TopBar';
import TextMessageSender from './components/TextMessageSender';
import TextMessageUser from './components/TextMessageUser';
import Send from '../../../../assets/vector/send.svg';

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
  handleClose: () => void;
};
const initialState = {
  text: '',
};
export default function ChatSessionView({ open, handleClose }: Props) {
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
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="flex flex-col relative">
          <TopBar handleClose={handleClose} />
          <div className="flex flex-col mt-16 mb-16 w-full p-3">
            <TextMessageSender text="" />
            <TextMessageUser text="" />
            <TextMessageSender text="" />
            <TextMessageUser text="" />
            <TextMessageUser text="" />
            <TextMessageSender text="" />
            <TextMessageUser text="" />
            <TextMessageUser text="" />
            <TextMessageSender text="" />
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
              <img src={Send} alt="" />
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
