import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center mx-auto">
      <CircularProgress />
    </div>
  );
}
