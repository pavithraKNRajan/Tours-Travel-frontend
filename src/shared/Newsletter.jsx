import React from 'react';
import './newsletter.css';
import { Container,Row,Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
   <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className='newsletter__content'>
                <h2>Subscribe now to get useful traveling information.</h2>
                <div className='newsletter__input'>
                    <input type='email' placeholder='Enter ypur email'/>
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Subscribe now and stay informed with expert travel tips, 
                    destination highlights, packing guides, weather updates, 
                    and exclusive deals that make your adventures smoother, smarter, and more enjoyable every step of the way.
                </p>
                </div>
                </Col>
                <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt=''/>
                </div>
                </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Newsletter