import AppointmentInfoCard from './AppointmentInfoCard'

type Props = {
  items: string[]
  status: string
}

export default function DisplayAppointments({ items, status }: Props) {
  return (
    <div className="flex flex-col mt-10 items-center justify-center">
      {items.map((item: string) => (
        <AppointmentInfoCard status={status} key={item} />
      ))}
    </div>
  )
}
