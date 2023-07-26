import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banner1 from '../../assets/banner.png'
import Banner2 from '../../assets/banner2.png'
import Banner3 from '../../assets/banner3.png'
import { carouselSettings } from './settings'
import CarouselCard from '../CarouselCard'

const items = [
  { id: '1', image: Banner1 },
  { id: '2', image: Banner2 },
  { id: '3', image: Banner3 },
]
export default function ItemsCarousel() {
  return (
    <Slider {...carouselSettings}>
      {items.map((item) => {
        return <CarouselCard key={item.id} />
      })}
    </Slider>
  )
}

// ;<img key={item.id} src={item.image} alt="health tips" />
