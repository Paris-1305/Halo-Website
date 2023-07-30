import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './App.css'
export default function Home(){
    return(
        <section>
        <Carousel>
      <Carousel.Item>
       <img
       className='image'
       src='entete/cofounder(AI).png'
       alt='first-image'/>
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>CO-FOUNDER(AI)</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='image'
       src='entete/communitymanager(AI).png'
       alt='first-image'/>
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>COMMUNITY MANAGER.Webp</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='image'
        src='entete/communitymanagerweb.png'
        alt='second-image'
        />
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>COMMUNITY MANAGER (AI)</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='image'
        src='entete/computer-tea-glasses.png'
        alt='second-image'
        />
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>Computer+tea+glasses.webp</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='image'
        src='entete/director(AI).png'
        alt='second-image'
        />
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>DIRECTOR(AI)</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='image'
        src='entete/founder(AI).png'
        alt='second-image'
        />
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>FOUNDER (AI)</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='image'
        src='entete/mobiledevelopper(AI).png'
        alt='second-image'
        />
        <Carousel.Caption>
          <h1 style={{fontSize:'50px',color:'yellow'}}>MOBILE DEVELOPPER</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </section>
    )
}