import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
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
  const specializationType = [
    { id: 'all', component: General },
    { id: 'cardiologist', component: Cardiologist },
    { id: 'dentists', component: Dentists },
    { id: 'neurologist', component: Neurologist },
    { id: 'nutritionist', component: Nutritionist },
    { id: 'optometrist', component: Optometrist },
    { id: 'pediatric', component: Pediatric },
    { id: 'radiologist', component: Radiologist },
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
      <div className="flex flex-wrap items-center justify-start">
        {specializationType.map((item, index) => (
          <Link
            to={`/organizations/${item.id}/health-professionals`}
            key={item.id}
          >
            <div className="m-1">
              <item.component />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
