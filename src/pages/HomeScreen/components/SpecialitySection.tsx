import { useState } from 'react'
import { Typography } from '@mui/material'
import RoundedLabelledButton from '../../FillProfile/component/RoundedLabelledButton'

interface ChipData {
  key: number
  label: string
}
export default function SpecialitySection() {
  const [chipData, setChipData] = useState<readonly ChipData[]>([
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
    <div className="flex flex-col">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Doctor Speciality
      </Typography>
      <div className="flex flex-wrap">
        {chipData.map((chip, index) => {
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
