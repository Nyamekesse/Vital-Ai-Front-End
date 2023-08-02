/* eslint-disable no-nested-ternary */
export default function StatusLabels({ status }: { status: string }) {
  const state =
    status === 'cancelled'
      ? 'Cancelled'
      : status === 'upcoming'
      ? 'Upcoming'
      : status === 'completed'
      ? 'Completed'
      : null;
  const renderStateColor =
    status === 'cancelled'
      ? 'text-red-500 bg-red-50'
      : status === 'upcoming'
      ? 'text-blue-500 bg-blue-50'
      : status === 'completed'
      ? 'text-green-500 bg-green-50'
      : null;
  return (
    <span
      className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide ${renderStateColor} rounded-full`}
    >
      {state}
    </span>
  );
}
