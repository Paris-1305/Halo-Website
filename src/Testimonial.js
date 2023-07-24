import React from 'react'
import './App.css'
import { Carousel } from 'react-bootstrap';
export default function Testimonial(){
    const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.',
          src: 'https://via.placeholder.com/150x150',
        },
        {
          id: 2,
          name: 'Jane Smith',
          text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          src: 'https://via.placeholder.com/150x150',
        },
        {
          id: 3,
          name: 'Bob Johnson',
          text: 'Duis auctor, quam et efficitur vehicula, sem orci dignissim dolor, sit amet pulvinar turpis purus vel velit.',
          src: 'https://via.placeholder.com/150x150',
        },
      ];
 return(
    <section className='testimonial' id='testimonial'>
        <h1 style={{fontSize:'80px', marginBottom:'100px'}}>Testimonial</h1>
        <Carousel>
  {testimonials.map(testimonial => (
    <Carousel.Item key={testimonial.id} >
      <div className=" test-block" >
      <h4 className='test'>{testimonial.name}</h4>
        <p style={{fontSize:'20px'}}>{testimonial.text}</p>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
    </section>
 )
}