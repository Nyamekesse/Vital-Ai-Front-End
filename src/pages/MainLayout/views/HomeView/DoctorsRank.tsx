import { useState } from 'react'
import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip/Chip'

interface ChipData {
  key: number
  label: string
}
export default function DoctorsRank() {
  const [chipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'Excellent' },
    { key: 2, label: 'Very Good' },
    { key: 3, label: 'Good' },
  ])
  return (
    <div className="flex flex-col mt-6 w-full ">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Top Doctors
      </Typography>
      <div className="flex flex-wrap items-center justify-start">
        {chipData.map((chip) => {
          return (
            <div key={chip.key}>
              <Chip
                variant="outlined"
                color="primary"
                label={chip.label}
                sx={{ margin: 0.5 }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
