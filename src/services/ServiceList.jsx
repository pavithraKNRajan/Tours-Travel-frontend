import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Calculate Weather',
        desc:'Accurate Weather Forecast Tools',

    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:'Discover With Expert Guides',

    },
    {
        imgUrl:customizationImg,
        title:'Custamization',
        desc:'Personalize Your Travel Experience',

    },
]

const ServiceList = () => {
  return ( <>
  {servicesData.map((item,index)=>(<Col lg='3' key={index}>
    <ServiceCard item={item} /></Col>))

  }
  </>
  );
}

export default ServiceList