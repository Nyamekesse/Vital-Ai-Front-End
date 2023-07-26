import { Typography } from '@mui/material'
import {
  Cardiologist,
  Dentists,
  General,
  Neurologist,
  Nutritionist,
  Optometrist,
  Pediatric,
  Radiologist,
} from '../../../../assets/customIcons'

export default function SpecialitySection() {
  const components = [
    General,
    Cardiologist,
    Dentists,
    Neurologist,
    Nutritionist,
    Optometrist,
    Pediatric,
    Radiologist,
  ]
  return (
    <div className="flex flex-col mt-6 w-full">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Doctor Speciality
      </Typography>
      <div className="flex flex-wrap items-center justify-between">
        {components.map((Component, index) => (
          <div className="m-1" key={index}>
            <Component />
          </div>
        ))}
      </div>
    </div>
  )
}
