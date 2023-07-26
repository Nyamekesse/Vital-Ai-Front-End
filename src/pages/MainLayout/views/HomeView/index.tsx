import { Carousel } from '../../../../components'
import DoctorsRank from './DoctorsRank'
import SpecialitySection from './SpecialitySection'
import OrganizationSection from './OrganizationSection'

export default function HomeScreen() {
  return (
    <div className="py-3 px-3">
      <Carousel />
      <div className="mt-8 flex flex-col items-center justify-start">
        <OrganizationSection />
        <SpecialitySection />
        <DoctorsRank />
      </div>
    </div>
  )
}
