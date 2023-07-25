import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '../Card'
import { carouselSettings } from './settings'

const items = [
  { title: 'hello', description: 'hello' },
  { title: 'hello', description: 'hello' },
  { title: 'hello', description: 'hello' },
]
export default function ItemsCarousel() {
  return (
    <Slider {...carouselSettings}>
      {items.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        )
      })}
    </Slider>
  )
}
