import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center mt-[50%] items-center mx-auto">
      <CircularProgress />
    </div>
  );
}
