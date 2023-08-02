import AppointmentInfoCard from './AppointmentInfoCard';

type Props = {
  items: string[];
  status: string;
};

export default function DisplayAppointments({ items, status }: Props) {
  return (
    <div>
      {items.map((item: string) => (
        <AppointmentInfoCard status={status} key={item} />
      ))}
    </div>
  );
}
