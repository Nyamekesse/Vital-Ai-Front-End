import { useState } from 'react'
import Chip from '@mui/material/Chip/Chip'
import Card from './component/Card'

interface ChipData {
  key: number
  label: string
}
export default function FilterHealthProfessionals() {
  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'Excellent' },
    { key: 2, label: 'Very Good' },
    { key: 3, label: 'Good' },
  ])
  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
      <div className="flex flex-wrap mb-2">
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
      {/* DISPLAY RESULTS */}
      <div className="flex flex-col justify-center items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
