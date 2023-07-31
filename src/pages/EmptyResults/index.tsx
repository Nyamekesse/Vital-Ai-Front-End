import { Typography } from '@mui/material';
import EmptyResource from '../../assets/vector/empty.svg';

export default function EmptyResponse() {
  return (
    <div className="w-full flex flex-col items-center my-[10%] justify-center py-3 px-3">
      <div className="">
        <img
          src={EmptyResource}
          className="mx-auto max-w-4xl"
          alt="no resource found"
        />
      </div>
      <div className="flex text-center flex-col justify-center mt-2 items-center mx-auto">
        <Typography variant="h4" fontWeight={700} fontSize="1.5rem">
          Not Found
        </Typography>
        <Typography>
          Sorry, we could not find any resource for queried data, please try
          again
        </Typography>
      </div>
    </div>
  );
}
