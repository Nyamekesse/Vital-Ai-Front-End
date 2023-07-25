import { Carousel } from '../../../components'
import DoctorsRank from '../components/DoctorsRank'
import SpecialitySection from '../components/SpecialitySection'

export default function MainScreen() {
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
