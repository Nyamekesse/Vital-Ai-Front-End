import { useState } from 'react'
import RoundedLabelledButton from '../components/RoundedLabelledButton'
import Card from './component/Card'

interface ChipData {
  key: number
  label: string
}
export default function FilterHealthProfessionals() {
  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'General' },
    { key: 2, label: 'Nutritionist' },
    { key: 2, label: 'Dentists' },
  ])
  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
      <div className="flex flex-wrap mb-2">
        {chipData.map((chip) => {
          return (
            <div className="" key={chip.key}>
              <RoundedLabelledButton label={chip.label} />
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
