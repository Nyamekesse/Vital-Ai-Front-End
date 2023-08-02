import { Typography } from '@mui/material';
import Nodata from '../../assets/vector/no_data_re_kwbl.svg';

export default function EmptyResults({ message }: { message: string }) {
  return (
    <div className="absolute text-center flex flex-col justify-center items-center mx-auto my-auto top-[40%]">
      <Typography variant="h5" mb={2}>
        {message}
      </Typography>
      <div className="w-24">
        <img src={Nodata} alt="empty results found" />
      </div>
    </div>
  );
}
