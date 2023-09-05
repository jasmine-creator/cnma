import React from 'react'
import { Form } from "react-bootstrap"


function Vehicule({ formData, setFormData,errors,setField }) {
    const options=["",'1','2','3','4','5','6','7','8','9','10','11','12','13','14','16','17','18','19','20','21']

    const funPuissance=(e)=>{
      setFormData({ ...formData, Puissance: e.target.value });
      setField('puissance', e.target.value);
    }
    const funValeur=(e)=>{
      setFormData({ ...formData, Valeur: e.target.value });
      setField('valeur', e.target.value);
    }
    const funAnnee=(e)=>{
      setFormData({ ...formData, Annee: e.target.value });
      setField('annee', e.target.value);
    }


    return (
      <div className="personal-info-container">
      
        <Form.Label> Puissance du vehicule :</Form.Label>
                    <Form.Select 
                    placeholder='cheveaux' 
                        aria-label="Puissance du vehicule"      
                        value={formData.Puissance}    
                        isInvalid={!!errors.Puissance}
   
                        onChange={(e) => {
                          funPuissance(e);
                          }}>                     
                        {
                        options.map((opt,index)=>{
                            return(    
                            <option key={index} value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid"> {errors.Puissance}</Form.Control.Feedback> 


        <Form.Label>Valeur du Vehicule :</Form.Label>
                <Form.Control
                  type="text"
                  id="Valeur"
                  isInvalid={!!errors.Valeur}

                  onChange={(e) => {
                      funValeur(e);   }}
                  value={formData.Valeur}
                  />
        <Form.Control.Feedback type="invalid"> {errors.Valeur}</Form.Control.Feedback> 

        
       
        <Form.Label>  Année du Véhicule :</Form.Label>
                <Form.Control
                  type="text"
                  id="Annee"
                  isInvalid={!!errors.Annee}

                  onChange={(e) => {
                    funAnnee(e);    }}
                  value={formData.Annee}
                  />
          <Form.Control.Feedback type="invalid"> {errors.Annee}</Form.Control.Feedback> 

      </div>
    );
  }
  
  export default Vehicule;
  