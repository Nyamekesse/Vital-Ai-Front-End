import { Carousel } from '../../../../components'
import DoctorsRank from './DoctorsRank'
import SpecialitySection from './SpecialitySection'

export default function HomeScreen() {
  return (
    <div className="py-3 px-3">
      <Carousel />
      <div className="mt-8">
        <SpecialitySection />
        <DoctorsRank />
      </div>
    </div>
  )
}
