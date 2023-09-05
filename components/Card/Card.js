import { Roll } from 'react-reveal';
import './Card.css'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Reveal from 'react-reveal/Reveal';



const Card = (props) => {
  return (
 /*    
    <div className='most-popular-item '>
    <div className='card-wrapper'>
    <LightSpeed left >
        <img className='most-popular-item-image' src={props.image}/>
        <div className='most-popular-item-content '>
            <h4 className='most-popular-item-title'>
                  {props.caption} <br/>
                 <span>{props.description} </span>
            </h4> 
          
        </div>
        </LightSpeed>
    </div> 

</div>
 */

<div class="card bg-dark text-white most-popular-item  "   >

  <img src={props.image} class="card-img" alt="Stony Beach"  />
  <div class="card-img-overlay ">
    <h5 class="card-title"> {props.caption}</h5>
  
  </div>
  
</div>

  )
}

export default Card