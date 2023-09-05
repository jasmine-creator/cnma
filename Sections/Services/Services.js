import './Services.css'
import React from 'react'
import { Card } from '../../components/index'
import { useState } from "react";
import { PrimaryButton } from '../../components/index'

import LightSpeed from 'react-reveal/LightSpeed';





const data_parti = [
  {
    id:1,
   image: require('../../assets/images/chickens.jpg'), 
   caption:"Assurance Animale "
  },
   {
    id:2,
    image:require('../../assets/images/agri.jpg'), 
    caption:"Assurance Végétale"
   } ,
   {
   id:3,
   image:require('../../assets/images/car3.jpg'), 
   caption:"Assurance Automobile"
  } ,
  {
  id:4,
  image:require('../../assets/images/fire3.jpg'), 
  caption:"Assurance Incendie"
 } ,
 /* {
  id:5,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Risques Divers"
 } ,
 {   id:6,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:7,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:8,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:9,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transports"
 } ,
 {   id:10,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie Aérienne"
 } ,
 {   id:11,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie Terrestre"
 } ,
 {   id:12,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie maritimes"
 } ,
 {   id:13,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Responsabilité du voiturier"
 } ,
 {   id:14,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Corps de Navire de peche"
 } 
 
 */
]
const data_entre = [

  {
    id:1,
    image:require('../../assets/images/horses.jpg'), 
    caption:"Assurance Animale"
   },

   {
    id:2,
    image:require('../../assets/images/onion.jpg'), 
    caption:"Assurance Végétale "
   },
   {
    id:3,
    image:require('../../assets/images/car4.jpg'), 
    caption:"Assurance Automobile"
   },
   {
    id:4,
   image: require('../../assets/images/fire 1.jpg'), 
   caption:"Assurance Incendie Batiment Industriel "
  },
 /*   {
    id:5,
    image:require('../../assets/images/services-04.jpg'), 
    caption:"Assurance Risque Divers"
   } , */
   


]
const data = [

  {
    id:1,
    image:require('../../assets/images/chickens.jpg'), 
    caption:"Assurance Animales"
   },

   {
    id:2,
    image:require('../../assets/images/services-07.jpg'), 
    caption:"Assurance Végétales "
   },
   {
    id:3,
    image:require('../../assets/images/services-08.jpg'), 
    caption:"Assurance Automobile"
   },
   {
    id:4,
   image: require('../../assets/images/services-01.jpg'), 
   caption:"Assurance Incendie Batiment Industriel "
  },
  /*  {
    id:5,
    image:require('../../assets/images/services-04.jpg'), 
    caption:"Assurance Risque Divers"
   } ,
   {
    id:6,
   image: require('../../assets/images/services-01.jpg'), 
   caption:"Assurance Animales "
  },
   {
    id:7,
    image:require('../../assets/images/services-04.jpg'), 
    caption:"Assurance Végétales"
   } ,
   {
   id:8,
   image:require('../../assets/images/services-05.jpg'), 
   caption:"Assurance Automobile"
  } ,
  {
  id:9,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Incendie"
 } ,
 {
  id:10,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Risques Divers"
 } ,
 {   id:11,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:12,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:13,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Catastrophes Naturelle"
 } ,
 {   id:14,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transports"
 } ,
 {   id:15,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie Aérienne"
 } , */
 {   id:16,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie Terrestre"
 } ,
 {   id:17,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Transport par voie maritimes"
 } ,
 {   id:18,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Responsabilité du voiturier"
 } ,
 {   id:19,
  image:require('../../assets/images/services-05.jpg'), 
  caption:"Assurance Corps de Navire de peche"
 } 
   


]
const data_nvpro = [

   {
    id:1,
    image:require('../../assets/images/nv_p1.PNG'), 
    caption:"SIR W'SKOUN M'HENNI"
   }, 
 
  {
    id:2,
    image:require('../../assets/images/services-06.jpg'), 
    caption:"nv_produit"
   },
   {
    id:3,
    image:require('../../assets/images/services-06.jpg'), 
    caption:"nv_produit"
   },
   {
    id:4,
    image:require('../../assets/images/services-06.jpg'), 
    caption:"nv_produit"
   }


]
const cards =data.map(card => {
  return <Card key={card.id} image={card.image} caption={card.caption} description={card.description} />
})

const cards_parti =data_parti.map(card => {
  return <Card key={card.id} image={card.image} caption={card.caption} description={card.description} />
})

const cards_entre =data_entre.map(card => {
  return  <Card key={card.id} image={card.image} caption={card.caption} description={card.description} /> 
})

const cards_nvpro =data_nvpro.map(card => {
  return <Card key={card.id} image={card.image} caption={card.caption} description={card.description} />
})
 
const Services = () => {
  const category = ["Tous","particulier", "entreprise", "nv_produit"];
  const [mycat, setMycat] = useState("Tous");

 




  return (
    <div>
      <section className="service-wrapper py-3">
        <div className="container-fluid pb-2">
            <div className="row">
                <h2 className="h2 text-center col-12 py-5 semi-bold-600">Nos Services </h2>
            </div>
                    </div>

     <div className="service-tag py-5 bg-secondary">
            <div className="col-md-12">
                <ul className="nav d-flex justify-content-center">
                    {/* <li className="nav-item mx-lg-4">
                        <a className="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300" href="#sec1" data-filter=".project" onClick={()=>setMycat("Tous")}>Tous</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <a className="filter-btn nav-link btn-outline-primary    rounded-pill text-light px-4 light-300" href="#sec1" data-filter=".graphic" onClick={()=>setMycat("particulier")}  >Pour Particuliers</a>
                    </li>
                    <li className="filter-btn nav-item mx-lg-4">
                        <a className="filter-btn nav-link btn-outline-primary  rounded-pill text-light px-4 light-300" href="#sec1" data-filter=".ui" onClick={()=>setMycat("entreprise")} >Pour Enreprise</a>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <a className="filter-btn nav-link btn-outline-primary   rounded-pill text-light px-4 light-300" href="#sec1" data-filter=".branding" onClick={()=>setMycat("nv_produit")} >Nouveaux produits</a>
                    </li> */}
                                {/* <PrimaryButton href="#sec1"  onClick={()=>setMycat("Tous")} titre="Tous"/>   */}
                                {/* <PrimaryButton href="#sec1" onClick={()=>setMycat("particulier") + window.location.reload(false)}  titre ="Particuliers"/>  */}
                                <PrimaryButton href="#sec1" onClick={()=>setMycat("particulier") }  titre ="Particuliers"/>
                                <PrimaryButton href="#sec1" onClick={()=>setMycat("entreprise")} titre="Enreprise"/> 
                                <PrimaryButton href="#sec1" onClick={()=>setMycat("nv_produit")} titre="Nouveaux produits"/> 

                </ul>
            
            </div>
        </div> 

    </section>
    
    <section className="container sec1 overflow-hidden py-5">
        <div className="most-popular-items">

            
                {/* <a href="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"> */}
                  {/* {cards_entre}  */}
                {/* </a> */}
                
                
                
              {
                  // mycat=="particulier" ? cards_parti  : cards_entre
                  
                  mycat=="entreprise" ? cards_entre:
                  mycat=="nv_produit" ? cards_nvpro :
                  mycat=="particulier" ? cards_parti :cards_parti
                 

                } 
            
             {/* <PrimaryButton href="#"  titre="Consulter la suite" style={{align : "center"}}/>  */}


              {/* {
                (()=>{
                  if(mycat === "Tous"){
                    return ( {cards})
                  }else if (mycat === "particulier"){
                    return({cards_parti})
                  }else if (mycat === "entreprise"){
                    return({cards_entre})
                  }else if (mycat === "nv_produit"){
                    return({cards_nvpro})
                  }
                }) ()
              }
   */}

           
           

        </div>
        <div style={{display: 'flex', justifyContent: 'center' , margin:'calc(var(--margin-primary)/2)'}} >
                {mycat=="entreprise" ?<PrimaryButton  href="#"  titre="Consulter la suite" style={{align : "center" }}/> 
                  :
                mycat=="nv_produit" ?<PrimaryButton href="#sec1"  titre="Consulter la suite" style={{align : "center"}}/> 
                :
                mycat=="particulier" ? <PrimaryButton href="#"  titre="Consulter la suite" style={{align : "center"}}/> 
                :<PrimaryButton href="#"  titre="Consulter la suite" style={{align : "center"}}/> 
              }
              </div>
    </section>
   


   
    </div>
  )
}

export default Services