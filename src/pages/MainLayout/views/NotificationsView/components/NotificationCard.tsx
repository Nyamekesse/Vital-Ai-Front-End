import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('en');
type Props = {
  title: string;
  message: string;
  createdAt: Date | string;
  isRead: boolean;
};

export default function NotificationCard({
  title,
  message,
  isRead,
  createdAt,
}: Props) {
  const formattedDateTime = dayjs(createdAt).fromNow();
  return (
    <div className="w-full shadow-md border-b my-2 p-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start">
          <Typography variant="h5" my={1} fontWeight={700} fontSize="1.25rem">
            {title}
          </Typography>
          <div className="text-gray-700 text-sm">{formattedDateTime}</div>
        </div>
        {isRead ? (
          <div className="bg-gray-400 flex p-2 h-6 justify-center items-center self-center text-white text-sm rounded-md">
            viewed
          </div>
        ) : (
          <div className="bg-blue-500 flex p-2 h-6 justify-center items-center self-center text-white text-sm rounded-md">
            new
          </div>
        )}
      </div>
      <hr />
      <div className="">
        <Typography variant="caption" sx={{ fontWeight: 400 }}>
          {message}
        </Typography>
      </div>
    </div>
  );
}
