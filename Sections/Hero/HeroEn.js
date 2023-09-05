import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import { SButton} from '../../components/index'
const data = [
  {
    id:1,
   image: require('../../assets/images/car1.jpg'), 
   caption:"Assurances Automobiles & Materiels ",
   description:"Agricoles Assurance Automobile particulier,Materiel Agricole,Remorques,."
  },
  {
    id:2,
    image:require('../../assets/images/travel.jpg'), 
    caption:"Assurance Voyage",
    description:"Description Here"
   },
   {
    id:3,
    image:require('../../assets/images/agricole.jpg'), 
    caption:"Assurances Végétales ",
    description:"Multirisques serre , Multirisques Pomme de terre ,Incendie Récoltes , Grêle..."
   }, 
   {
    id:4,
    image:require('../../assets/images/plane.jpg'), 
    caption:"Assurances Transports ",
    description:"Transport de Marchandises par voie maritime,Aérienne,Terrestre,..."
   } 
]

function HeroEn() {
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
          <br/><br/><br/>
          <div className="cr"> <SButton href="#"   titre ="Contactez nos agences" /> </div>
        </Carousel.Caption>
      </Carousel.Item>
      
        )
        
      })}
      
    </Carousel>
  );
}

export default HeroEn;