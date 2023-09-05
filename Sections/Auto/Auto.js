import './auto.css'


const auto = () => {
  return (
   <>
        <div className="more-info">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="more-info-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-image">
                     <img src="../../assets/images/sinistre.jpg" alt=""/> 
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="right-content">
                    {/* <span style={{textAlign:"center"}}>CNMA</span> */}
                    <h2> Assurance Auto :  </h2>
                  <p>Pour votre prise en charge rapide et efficace de votre vehicule <em>la CNMA</em> met à votre disposition
                  toute une gamme de couverture ,et vous pouvez choisir les formules qui répondent le mieux à vos besoins 
                 </p>   
                 <h4> Garanties :</h4>     
   <ul>
    <li> Responsabilité civile </li> 
    <li> Dommage Collision </li>  
    <li> Bris de glace </li> 
    <li> Vol </li> 
    <li> Incendie </li>
    <li> Tous Risques </li> 
    </ul>

    <h4> Assistance Automobile :</h4>
    <p>Mettre à disposition des Assurés une prestation par la quel l’assisteur s’engage a intervenir auprès des assurées en cas de difficulté dans la nature a été précisé préalablement dans le contrat.
Les Garanties d’assistance automobile interviennent dans le cadre de la détresse du client s’exercent à la suite d’un Accident matériel, d’un Incendie, d’un Vol ou d’une Tentative de Vol du véhicule , ou à la suite d'une panne ou d’une crevaison, sans franchise. 
    <h5>Bénéficiaire:</h5>
    <p>L’Assuré ainsi que les passagers voyageant à bord du véhicule garanti dans la limite du nombre de places maximum inscrite sur la carte grise.
</p>
<h5>Véhicules Garantis:</h5>
<p>
En cas d’accident, Vol ou incendie, aucune franchise n’est applicable .
En cas de panne une franchise est applicable sur :
 -  Au-delà de 15 ans d'âge du véhicule, il ouvre droit a 02 prestations par an.
</p>
</p>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default auto