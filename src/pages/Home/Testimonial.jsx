import React from 'react'
import SliderContent from '../../components/Slider'
import { Testimonial } from "../../constants/data";


const Testimonial = () => {
  return (
    <div>
      <SliderContent testimonialBy={Testimonial}/>
    </div>
  )
}

export default Testimonial
