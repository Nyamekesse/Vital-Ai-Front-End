import { useState } from 'react'
import { Typography } from '@mui/material'
import RoundedLabelledButton from '../../FillProfile/component/RoundedLabelledButton'

interface ChipData {
  key: number
  label: string
}
export default function DoctorsRank() {
  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'General' },
    { key: 2, label: 'Nutritionist' },
    { key: 2, label: 'Dentists' },
  ])
  return (
    <div className="flex flex-col mt-2">
      <Typography
        variant="h5"
        mb={2}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Top Doctors
      </Typography>
      <div className="flex flex-wrap">
        {chipData.map((chip) => {
          return (
            <div className="" key={chip.key}>
              <RoundedLabelledButton label={chip.label} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
