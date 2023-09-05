import './Statistiques.css'
import React, { useEffect, useState } from 'react'
import { PrimaryButton } from '../../components/index'





const Statistiques = () => {
  const[timer,setTimer]=useState(0)
const[start,setStart]=useState(true)
 
useEffect(()=>{
  let interval=null;
  if(start && interval <12){
    interval=setInterval(()=>{ setTimer((pre)=>pre+1)},500)
  }else if(timer==12) {
    clearInterval(interval)
  }
  return ()=> clearInterval(interval)
},[start])
  return (
    
    
    <div>
    <div class="fun-facts">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="left-content">
              {/* <span>CNMA</span> */}
              <h2>Caisse de Mutualité <em>Agricole</em></h2>
              <p>la CNMA en tant qu’acteur économique proche des agriculteurs, se positionnera comme un assureur conseil, soucieux d’aider les agriculteurs à identifier et à maîtriser les risques de leurs métiers et de leurs exploitations. L’objectif est de les aider à intégrer les mesures de sécurité préconisées dans le cadre de leurs activités. En milieu rural, c’est l’activité agricole qui est à la base du développement économique et social, c’est pourquoi la CNMA propose en plus des assurances économiques, des assurances sociales. Centenaire, la CNMA s’inscrit ainsi dans la continuité de la mise en œuvre de sa politique de développement pour consolider davantage sa position dans l’intérêt du secteur de l’agriculture et de la pêche.</p>
              {/* <br/><br/>Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis, odio velit molestie nunc, ut posuere ante tortor ut neque.</p> */}
              {/* <a href="" class="filled-button">Read More</a> */}
              <PrimaryButton href="#"   titre ="Read More"/>

            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <div class="row">
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">13 Milliards</div>
                  <div class="count-title">Chiffre D'affaire</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">
                    {/* {timer} */} 1200
                 </div>
                  <div class="count-title">Employés</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">68</div>
                  <div class="count-title">Caisses regionale</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">512</div>
                  <div class="count-title">Bureaux locaux</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  )
}

export default Statistiques