import './branches.css'
import image1 from "../../assets/images/man-1866559.jpg";
import image2 from "../../assets/images/calf-2840961.jpg";
import image3 from "../../assets/images/85943645_l-scaled.jpg";
import image4 from "../../assets/images/container-1638068.jpg";
import image5 from "../../assets/images/welding-67640.jpg";
import { Container } from 'react-bootstrap';

const Branches = () => {
  return (
    <>

    <div className='row container-fluid'>
        <div className='col divcol' > 
            <img src={image1} alt=""/>  
            <h5>Assurance Végétale</h5>

        
        </div>
        <div className='col divcol'>
            <img src={image2} alt=""/>  
            <h5>Assurance Animale</h5>


        </div>

        <div className='col divcol'>
            <img src={image3} alt=""/>  
            <h5>Assurance Automobile</h5>


        </div>
        <div className='col divcol'>
            <img src={image4} alt=""/>  
            <h5>Assurance Transport</h5>


        </div>
        <div className='col divcol'>
            <img src={image5} alt=""/>  
            <h5>Assurance IRD</h5>


          
        </div>
    </div>
    

    
    
    </>
  )
}

export default Branches