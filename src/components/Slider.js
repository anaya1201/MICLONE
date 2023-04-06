import { Carousel } from 'bootstrap'
import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
    <Carousel fade>
       {
       start.map((item)=>(
            <Carousel.item>
                <img
                className='d-block w-100'
                src={item}
                alt="First Slide"
                />
            </Carousel.item>

       ))
       }
    </Carousel>
  )
}

export default Slider