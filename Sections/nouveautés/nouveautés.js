import './nouveautés.css'
import image1 from "../../assets/images/Sans titre.png";
import image2 from "../../assets/images/couverture-revue-de-presse-oaa.jpg";
import image3 from "../../assets/images/couverture-rapport-annuel.jpg";
import image4 from "../../assets/images/services-05.jpg";
import image5 from "../../assets/images/services-06.jpg";
import image6 from "../../assets/images/services-07.jpg";
import image7 from "../../assets/images/services-02.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import PDFRAPP from '../../assets/images/rapport annuel 2022 OAA.pdf';
import PDFREVUE from '../../assets/images/REVUE SPECIALE OAA page.pdf';




const Nouveautés = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  




  return (
    <>
    <div className='row-md-12 off' >
      <div className='col-md-8 divnv1 '>
        {/* <img src={image1} alt=""/>   */}

   



        <h1>Actualité</h1>
<Container>
    <Carousel responsive={responsive}  interval={2000}>
    
                 
       
    <div className="card">
      <img className="product--image" src={image4} alt="product image" />
      <h2> Actualité 1</h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire la suite</button>
      </p>
    </div>
    
   

    <div className="card">
      <img className="product--image" src={image5} alt="product image" />
      <h2> Actualité 2 </h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire la suite</button>
      </p>
    </div>
    <div className="card">
      <img className="product--image" src={image6} alt="product image" />
      <h2> Actualité 2</h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire la suite</button>
      </p>
    </div>
    <div className="card">
      <img className="product--image" src={image7} alt="product image" />
      <h2> Actualité </h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire plus</button>
      </p>
    </div>
   
    <div className="card">
      <img className="product--image" src={image4} alt="product image" />
      <h2> Actualité</h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire plus</button>
      </p>
    </div>
    
   

    <div className="card">
      <img className="product--image" src={image5} alt="product image" />
      <h2> Actualité </h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire plus</button>
      </p>
    </div>
    <div className="card">
      <img className="product--image" src={image6} alt="product image" />
      <h2> Actualité </h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire plus</button>
      </p>
    </div>
    <div className="card">
      <img className="product--image" src={image7} alt="product image" />
      <h2> Actualité</h2>
      <p className="price">titre</p>
      <p>description</p>
      <p>
        <button>Lire plus</button>
      </p>
    </div>
   
    </Carousel>;   
            </Container>

</div>

















      <div className='  col-md-4 divnv2 d-flex flex-row  '>
        <div className=''>
           <img src={image2} alt=""/>
           <div>
          <a href={PDFREVUE} target="_blank"> <button href={PDFREVUE} style={{color:"black",backgroundColor:"rgba(224, 224, 230, 0.774)",margin:"5px",float:"left" ,width:"230px",border:"0px"}} class="">Revue de presse <br/> Télécharger</button>
           
          </a></div>
         </div>
        <div className=''> 
          <img src={image3} alt=""/> 
          <div>
        <a  href={PDFRAPP}  target="_blank"><button style={{color:"black",backgroundColor:"#5cad7e",margin:"5px",float:"left",border:"0px",width:"230px"}} class="">Rapport Annuel <br/> Télécharger</button>
        </a>  
         </div>
         </div>
    

      </div>

      


    </div>



   
    
    
    
    
    </>
  )
}

export default Nouveautés