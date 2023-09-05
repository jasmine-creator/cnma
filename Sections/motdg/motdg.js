import './motdg.css'
import image3 from "../../assets/images/8M7A6457.JPG";
import image2 from "../../assets/images/germ.jpg";
import { useState } from 'react';
import {AiFillCaretDown}  from "react-icons/ai";
import { Container } from 'react-bootstrap';

import image4 from "../../assets/images/couverture-rapport-annuel.jpg";

import image5 from "../../assets/images/couverture-revue-de-presse-oaa.jpg";


import { PrimaryButton} from '../../components/index'

const Motdg = () => {
  const [showInfo,setshowInfo]=useState(false)
 




  return (
    
    
    <>
        <div  className="row  princip ">
          {/* <div className="col-md-12"> */}
              <div  className="row-md-12">
                <div className="col-md-4 col-lg-4 col-sm-4 fll start-0 "> 
       
    <div className="left-image2">
      
   <img src={image3} alt=""/>  
   </div>
   </div> 
   {/* <h1> Mot du Dg</h1> */}
<div className='para  col-md-4 col-lg-4  col-sm-4 '>
<p style={{fontSize:"16px"}}> <strong>La CNMA </strong> est une Institution qui n’a pas ménagé d’efforts pour arriver à la place qu’elle occupe aujourd’hui , elle ambitionne à la préserver  et à toujours mettre en œuvre la politique agricole et rurale tracée par les pouvoirs publics, cette politique qui vise à atteindre l’autosuffisance alimentaire dans notre pays, notamment en ce qui concerne les cultures stratégiques que la CNMA est prête à protéger contre tous les risques assurables, surtout par rapport aux changements climatiques survenus récemment à cause du réchauffement climatique et ses répercussions sur l’économie en général et sur la sécurité alimentaire en particulier.
<br/>
Pour finir, je souligne la constance de la CNMA dans ses activités sur le terrain en tant « qu’Assureur Conseil de Proximité » pour accompagner ses clients et ses sociétaires pour leur fournir les solutions assurantielles nécessaires afin de faire face aux risques qui menacent leurs activités et leurs revenus.
<br/>
<button style={{color:"#079347",backgroundColor:"white",border:"0px",margin:"0px",marginBottom:"5px"}} class="">Lire plus</button>
<br/>
<button style={{color:"white",backgroundColor:"#079347",border:"0px",margin:"0px"}} class="">Connaitre <span style={{color:"black"}}>Cherif Benhabiles</span> <br/>Directeur général de la CNMA <br/>Président de l'Organisation Africaine des assurance OAA </button>

</p>
</div>   
  
   
     
       
    <div className=' col-md-4  divimg2  col-lg-4 col-sm-4 '>
    <div className='divalerte1'>
      <div className='dansalerte1'>
    <h4 style={{color:"#1D4566",margin:"15px"}}>Alertes agricoles</h4>
       <p style={{fontSize:"16px",margin:"20px"}}>Une alerte rapide permet d'informer en temps réel les agriculteurs et augmente la capacité des professionnelles à faire face. En permettant d'aider les professionnels à identifier les risques et à lutter contre.     <a href='/#' style={{color:"#E8412E"}}> Accédez à l'article</a>
</p>
    </div>
    </div>
    <div className='divalerte2'>
      <div className='dansalerte2'> 
      <h4 style={{color:"#1D4566",margin:"15px"}}>Conseils et prévention</h4>
     <p style={{fontSize:"16px",margin:"20px"}}>La CNMA en tant que conseiller agricole accompagne les agriculteurs et éleveurs. À l'heure où l'agriculture se complexifie, la Mutualité Agricole fait figure de partenaire privilégié de l'exploitant. Elle l'aide à développer son activité, à choisir de nouveaux équipements et à améliorer le rendement et la qualité.  <a href='/#' style={{color:"#E8412E"}}> Accédez à l'article</a>   </p>
    </div>
    </div>
    
 




     </div> 
    
     </div>


     











     
    </div>
   

  
     {/* </div> */}
     
    
   
    
    </>
    
  )
}

export default Motdg