import { useState } from 'react'
import Chip from '@mui/material/Chip/Chip'
import Typography from '@mui/material/Typography/Typography'

interface ChipData {
  key: number
  label: string
}
export default function OrganizationSection() {
  const [chipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'General' },
    { key: 1, label: 'Dentists' },
    { key: 2, label: 'Nutrition' },
    { key: 3, label: 'Neurology' },
    { key: 4, label: 'Optometrist' },
    { key: 5, label: 'Gynecologist' },
    { key: 6, label: 'Radiologist' },
    { key: 7, label: 'Pediatric' },
    { key: 8, label: 'More...' },
  ])
  return (
    <div className="flex flex-col mt-4 w-full">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Partnered Organizations
      </Typography>
      <div className="flex flex-wrap items-center justify-stretch">
        {chipData.map((chip: ChipData) => {
          return (
            <div className="" key={chip.key}>
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
