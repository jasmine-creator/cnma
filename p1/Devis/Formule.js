import React from 'react'
import { Form } from "react-bootstrap"
import { useState } from 'react';
import './devisform.css'


function Formule({ formData, setFormData ,errors,setField}) {
  const [checkedbdg, setCheckedbdg] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedd, setCheckedd] = useState(false);

  const [checkedi, setCheckedi] = useState(false);

    const options=['','3','6','12'];
   const  optionsF=["",'Tous Risques avec reduction 50%','Dommage Collision Valeur venale','Dommage Collision 40 000 da','Dommage Collision 30 000 da','Dommage Collision 20 000 da']

   //const  optionsD=["",'Assistance SIR MERTAH 4000 da','Assistance SIR AMANE 1200 da','Assistance SALAM 500 da']
   const  optionsD=["",'Depannage ilimité','Depannage 200 km','Depannage 100 km']

   const checkHandlerVol = (e) => {
    console.log("valeur vol avant",checked)
    setChecked(!checked)
    console.log("valeur vol apres",checked)

    setFormData({ ...formData,  Vol: e.target.checked })
  };
  const checkHandlerbdg = (e) => {
    console.log("valeur vol avant",checkedbdg)

    setCheckedbdg(!checkedbdg)
    console.log("valeur vol apres",checkedbdg)

    setFormData({ ...formData,  bdg: e.target.checked })
  };



  const checkHandlerIncendie = (e) => {
    
    setCheckedi(!checkedi)
    console.log("valeur incendie apres",checkedi)

    setFormData({ ...formData,  Incendie: e.target.checked })
  };


  const funFormule=(e)=>{
    setFormData({ ...formData, Formule: e.target.value });
    setField('formule', e.target.value);
  }
  const funDepannage=(e)=>{
    setFormData({ ...formData, Depannage: e.target.value });
    setField('depannage', e.target.value);
  }


    return (
      <div className="personal-info-container">
       {/*  <Form.Label> Durée:</Form.Label>
                    <Form.Select 
                         placeholder='Durée'
                        aria-label="Durée"      
                        value={formData.Duree}
                        onChange={(e) => {
                          setFormData({ ...formData, Duree: e.target.value });
                        }}>                     
                        {
                        options.map((opt,index)=>{
                            return(    
                            <option key={index} value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
     */}    
        <Form.Label> Formule:</Form.Label>
           <Form.Select  placeholder='Formule'
                        aria-label="Formule"      
                        value={formData.Formule}
                        isInvalid={!!errors.Formule}

                        onChange={(e) => {
                     funFormule(e);      }}>                     
                        {
                        optionsF.map((opt,index)=>{
                            return(    
                            <option key={index} value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid"> {errors.Formule}</Form.Control.Feedback> 

       <Form>
        <Form.Check type="switch"
                    id="custom-switch"
                   // checked={formData.bdg}
                 /*    onChange={(e) => {
                      setFormData({ ...formData, bdg: e.target.value });
                    }}    
                     */
                    checked={checkedbdg}
                   onChange={checkHandlerbdg}
                 
                    
                    
                    label="Bris de glace"/>
       </Form>
       
    {/*   <Form>
        {
          ['checkbox','radio'].map((type)=>(
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                 inline
                 label="1"
                 name="groupe1"
                 type={type}
                 id={`inline-${type}-1`}/>

              <Form.Check
                 inline
                 label="2"
                 name="groupe1"
                 type={type}
                 id={`inline-${type}-2`}/>
              
              <Form.Check
                 inline
                 disabled
                 label="3 (disabled)"
                 type={type}
                 id={`inline-${type}-3`}/>
                 
                 

            </div>
          ))
        }
      </Form>

      */}
      <Form>
        
          
            <div  className="mb-3">
              
              <Form.Check
              
                 inline
                 label="Vol"
                 name="groupe1"
                 type="checkbox"
                 //ajout
                 checked={checked}
                // onChange={e => setChecked(e.target.checked)}
               onChange={checkHandlerVol}
             
                 /*  onChange={(e) => { 
                  setFormData({ ...formData,  Vol: e.target.checked });
                }}
                  */ id="{`inline-${type}-1`}"/>

              <Form.Check
                 inline
                 label="Incendie"
                 name="groupe1"
                 type="checkbox"
                 //checked={formData.Incendie}
                 checked={checkedi}
                 onChange={checkHandlerIncendie}

                /*  onChange={(e) => {
                  setFormData({ ...formData, Incendie: e.target.value });
                }} */
                 id="{`inline-${type}-2`}"/>
              
           

            </div>
        
        
      </Form>

      <Form.Label> Depannage:</Form.Label>
           <Form.Select  placeholder='Formule'
                        aria-label="Formule"  
                        isInvalid={!!errors.Depannage}
    
                        //value={formData.Formule}
                        onChange={(e) => {
                               funDepannage(e);                        }}>                     
                        {
                        optionsD.map((opt,index)=>{
                            return(    
                            <option key={index} value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid"> {errors.Depannage}</Form.Control.Feedback> 


                  
 

      </div>
    );
  }
  
  export default Formule;
  