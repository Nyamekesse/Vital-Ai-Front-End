import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { carouselSettings } from './settings'
import CarouselCard from '../CarouselCard'

const items = [{ id: '1' }, { id: '2' }, { id: '3' }]
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
