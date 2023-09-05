import React from 'react'
import { Container } from 'react-bootstrap'
import reseau from '../../assets/images/réseau commecial CNMA-1.pdf';

const Nv_produit = () => {
  return (
    <div>
        <Container>
      <h1>Nouveau produit sir w skoun m’henni</h1>
        
      <p>
      Sir W’Skoun M’henni est un PACK qui rassemble l’assurance Multirisques Habitation et l’assurance Automobile et matériel Agricole.
      <br/>
      Que vous soyez sociétaire ou particulier, la Mutualité Agricole à travers son large réseau de 70 caisses régionales et de plus de 550 bureaux locaux vous propose selob votre lieu de résidence en zone urbaine ou rurale ce pack, Sir W’Skoun M’henni avec des réduction allant de 50% à 90%.
      <br/>
      Le Pack couvre les risques d’incendie, bris de glace, dégats des eaux vols et responsabilité civile sur vos habitations. Il couvre également la tous risque automobile e matériel agricole.
      <br/>
      Rapporochez vous de nos agences pour plus d’information.
      
      </p>
      <br/><br/>
      <a style={{color:"green"}} href={reseau}  target="_blank">Téléchargez notre réseau </a>
         <br/><br/>






        </Container>
    </div>
  )
}

export default Nv_produit