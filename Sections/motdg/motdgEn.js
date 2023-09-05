import './motdg.css'
import image3 from "../../assets/images/cnma2.jpg";
import image2 from "../../assets/images/germ.jpg";
import { useState } from 'react';
import {AiFillCaretDown}  from "react-icons/ai";


import { PrimaryButton} from '../../components/index'

const MotdgEn = () => {
  const [showInfo,setshowInfo]=useState(false)
 




  return (
    
    
    <>
    
    
        <div className="row">
          <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 fll ">

    <div className="left-image2">
   <img src={image3} alt=""/>  
   <h1> CEO 's Word</h1>

    <p>

    The CNMA's asset, namely its experience of more than a century, allows it to better adapt to the requirements of its members. It remains attentive to the grievances and concerns of the agricultural world to remain its insurance advisor and support it in carrying out investment projects in complete safety.
    </p>
     
      </div>
      <div className='btn1'>
      <PrimaryButton to="/ConnaitreEn"  titre ="Meet Cherif Benhabiles" />
      </div>
     </div>
       
    <div className=' col-md-6  divimg2'>
     <img src={image2} alt=""  /> 
     <div className='poscenter'> <marquee> <p>Informations Obligatoire </p> </marquee>
     </div> 
     {/* <div className='posbt' > <button onClick={()=>{ {showInfo ? setshowInfo(false): setshowInfo(true)}}}> afficher</button></div>  */}
     <span className='posbt'>  <AiFillCaretDown onClick ={() =>{{showInfo ? setshowInfo(false): setshowInfo(true)}}} /> </span>

     <div className='pos'   style={{ display: showInfo ? "block" : "none" }}>

     <h6 style={{width:"bold"}} >Les assurances agricoles essentielles pour protéger votre exploitation</h6>
      En tant qu’agriculteur, vous êtes exposé à certains risques spécifiques. Pour préserver la viabilité de votre 
            <strong> exploitation agricole , assurez vos responsabilités civile :</strong>
        <br/> <ul>
          <li> professionnelle et vie privée</li>
          <li> vos locaux professionnels</li>
          <li>matériels agricoles et électroniques</li>
          <li>vos approvisionnements et marchandises</li>
          <li>vos véhicules tracteurs et engins agricoles</li>
          <li>vos récoltes et vos animaux.</li>
        
        
        </ul> 
          </div>
    </div>
   {/*  
    <div className="col-md-4 align-self-center flex right-content">

<img src={image2} alt=""  /> 

<div className='poscenter'> <marquee> <p>Informations Obligatoire </p> </marquee>

</div>
    
    
    </div>
                
    <div className="col-md-4 align-self-center flex">
      <div className="right-content">
          
 */}

    
      {/* <div className='pos'>Les assurances agricoles essentielles pour protéger votre exploitation
        <br/>En tant qu’agriculteur, vous êtes exposé à certains risques spécifiques. Pour préserver la viabilité de votre 
        <strong>exploitation agricole</strong>, assurez vos responsabilités civile, professionnelle et vie privée, vos locaux professionnels, vos&nbsp;
        <strong>matériels agricoles et électroniques</strong>
        , vos approvisionnements et marchandises, vos véhicules (utilitaires,&nbsp;
          <strong>tracteurs et engins agricoles</strong>
          ), vos récoltes et vos animaux.




      </div>
       */}
     </div>
     
    </div>
    </div>
   
    {/* </div>
    </div> */}

    
    
    </>
    
  )
}

export default MotdgEn