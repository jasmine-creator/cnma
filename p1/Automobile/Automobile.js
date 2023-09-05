import  './Automobile.css'
import { PrimaryButton} from '../../components/index'
import { Container } from 'react-bootstrap'
import {Auto} from '../../Sections/index';
import {Link}from 'react-router-dom'


const Automobile = () => {
  return (
    <>
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>تامين المركبات</h6>
            <h4 className='hero-Title'> <em> Assurance Automobile </em></h4>
            <h6 className='hero-Title'> Choisissez votre formule d'assurance Auto et obtenir un devis  </h6>

           
            <PrimaryButton to="/Devis"  titre ="Devis en Ligne" />
           
            
        </div>
    </div>
    <Auto/>
   {/*  <div className='description'>
        
        <h1>Assurance Auto : </h1>
   <p> Pour votre prise en charge rapide et efficace de votre vehicule <em>la CNMA</em> met à votre disposition
        toute une gamme de couverture ,et vous pouvez choisir les formules qui répondent le mieux à vos besoins 
   </p>
   
  
     <h2> Garanties :</h2>     
   <ul>
    <li> <h4> Responsabilité civile</h4></li> 
    <li><h4> Dommage Collision</h4></li>  
    <li><h4> Bris de glace</h4></li> 
    <li><h4> Vol</h4></li> 
    <li><h4> Incendie</h4></li>
    <li><h4> Tous Risques</h4></li> 
     </ul>

    <h2> Assistance Automobile :</h2>
    <p>Mettre à disposition des Assurés une prestation par la quel l’assisteur s’engage a intervenir auprès des assurées en cas de difficulté dans la nature a été précisé préalablement dans le contrat.
Les Garanties d’assistance automobile interviennent dans le cadre de la détresse du client s’exercent à la suite d’un Accident matériel, d’un Incendie, d’un Vol ou d’une Tentative de Vol du véhicule , ou à la suite d'une panne ou d’une crevaison, sans franchise. 
    <h3>Bénéficiaire:</h3>
    <p>L’Assuré ainsi que les passagers voyageant à bord du véhicule garanti dans la limite du nombre de places maximum inscrite sur la carte grise.
</p>
<h3>Véhicules Garantis:</h3>
<p>
En cas d’accident, Vol ou incendie, aucune franchise n’est applicable .
En cas de panne une franchise est applicable sur :
 -  Au-delà de 15 ans d'âge du véhicule, il ouvre droit a 02 prestations par an.
</p>
</p>



   </div> */}
 
 
    
        </>
  )
}

export default Automobile