import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials=()=>{
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,
    responsive:[
      {
        breakpoint: 992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint: 576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          
        },
      },
      
    ]
  }



  return (
    <Slider{...settings}>
      <div className='testimonial py-4 px-3'>
        <p>The tour guide was incredibly knowledgeable, friendly, 
          and ensured we experienced every destination like a local—truly unforgettable journey!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
            
          </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>I loved how customizable everything was; every detail matched my preferences, 
          making the trip feel personal and well-planned.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
          <div>
            <h6 className='mb-0 mt-3'>James</h6>
            <p>Customer</p>
            
          </div>
        </div>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
        Your weather updates were precise and timely, helping us pack perfectly
         and avoid unexpected conditions—very helpful for smooth travel.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
          <div>
            <h6 className='mb-0 mt-3'>Joel</h6>
            <p>Customer</p>
            
          </div>
        </div>
      </div>
       <div className='testimonial py-4 px-3'>
       <p>This was my best travel experience ever, thanks to your professional service,
         timely communication, and exceptional destination planning.
       </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
         <div>
           <h6 className='mb-0 mt-3'>John Doe</h6>
           <p>Customer</p>
           
         </div>
       </div>
     </div>
     <div className='testimonial py-4 px-3'>
       <p>Booking was seamless, support was fast, and every location exceeded expectations—definitely
         booking my next adventure with you again.
       </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
         <div>
           <h6 className='mb-0 mt-3'>Anna</h6>
           <p>Customer</p>
           
         </div>
       </div>
     </div>
     <div className='testimonial py-4 px-3'>
       <p>
       The travel package was affordable, well-structured, and included hidden gems
        I never would’ve found without your team’s help.
       </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
         <div>
           <h6 className='mb-0 mt-3'>Mateo</h6>
           <p>Customer</p>
           
         </div>
       </div>
     </div>
    </Slider>
  )
}

export default Testimonials