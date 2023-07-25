import { Chip } from '@mui/material'

type Props = {
  label: string
}
export default function RoundedLabelledButton({ label }: Props) {
  return (
    <div className="m-1">
      <Chip variant="outlined" color="primary" label={label} />
    </div>
  )
}
