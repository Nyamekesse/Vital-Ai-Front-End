/* eslint-disable no-nested-ternary */
export default function StatusLabels({ status }: { status: string }) {
  let color = '';
  if (status.toLowerCase() === 'cancelled') {
    color = 'bg-red-500';
  } else if (status.toLowerCase() === 'upcoming') {
    color = 'bg-blue-500';
  } else if (status.toLowerCase() === 'completed') {
    color = 'bg-green=500';
  } else if (status.toLowerCase() === 'pending') {
    color = 'bg-yellow-500';
  } else {
    color = '';
  }

  return (
    <span
      className={`px-2 py-0.5 ml-auto text-xs text-white ${color} font-medium tracking-wide rounded-full`}
    >
      {status}
    </span>
  );
}
