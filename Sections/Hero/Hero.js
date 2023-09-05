import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import { SButton} from '../../components/index'
import {Link}from 'react-router-dom'

const data = [
  {
    id:1,
   image: require('../../assets/images/nouveau-produit-auto.jpg'), 
   link:"/slide3",
   /* caption:"Assurances Automobiles & Materiels ",
   description:"Agricoles Assurance Automobile particulier,Materiel Agricole,Remorques,."
 */  },
  {
    id:2,
    image:require('../../assets/images/slide-afrique.jpg'), 
    link:"/slide1",
   /*  caption:"Assurance Voyage",-
    description:"Description Here"
  */  },
   {
    id:3,
    image:require('../../assets/images/slide-climatique.jpg'), 
    link:"/slide2",
   /*  caption:"Assurances Végétales ",
    description:"Multirisques serre , Multirisques Pomme de terre ,Incendie Récoltes , Grêle..."
  */  }, 
    {
    id:4,
    image:require('../../assets/images/slide-devis.jpg'), 
    link:"/devis",
   } 
]

function Hero() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.id} >  
                 
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
          <br/><br/><br/><br/>
          <div className="cr" > 
          <Link to={slide.link} style={{color:"black"}}> Lire Plus</Link>
          
          
          {/* <SButton href={slide.link}   titre ="Lire Plus" /> */}
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      
        )
        
      })}
      
    </Carousel>
  );
}

export default Hero;