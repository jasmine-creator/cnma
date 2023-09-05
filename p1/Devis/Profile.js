import { Form } from "react-bootstrap"
import { useState } from "react";
import './devisform.css'



function Profile({ formData, setFormData,errors,setField }) {
  const options =["",'Homme','Femme'];
  const wilaya =["","Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa"
  ,"Biskra","Béchar","Blida","Bouïra","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou"
  ,"Algiers","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès"
  ,"Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara"
  ,"Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf"
  ,"Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras",""
  ,"Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa"
  ,"Relizane","El M'Ghair","El Menia","Ouled Djellal","Bordj Baji Mokhtar","Béni Abbès"
  ,"Timimoun","Touggourt","Djanet","Ain Salah","Ain Guezzam"];


  const funNom=(e)=>{
    setFormData({ ...formData, Nom: e.target.value });
     setField('nom', e.target.value);
  }
  const funPrenom=(e)=>{
    setFormData({ ...formData, Prenom: e.target.value });
     setField('prenom', e.target.value);
  }
  const funSexe=(e)=>{
    setFormData({ ...formData, Sexe: e.target.value });
     setField('sexe', e.target.value);
  }
  const funWilaya=(e)=>{
    setFormData({ ...formData, Wilaya: e.target.value });
     setField('wilaya', e.target.value);
  }
  const funTelephone=(e)=>{
    setFormData({ ...formData, Telephone: e.target.value });
     setField('telephone', e.target.value);
  }
  const funEmail=(e)=>{
    setFormData({ ...formData, Email: e.target.value });
     setField('email', e.target.value);
  }

    return (
      <div className="align-self-center  ">

        <Form.Label>Nom :</Form.Label>
                <Form.Control
                
                  required
                  type="text"
                  id="Nom"
                  value={formData.Nom}
                  isInvalid={!!errors.Nom}
                  onChange={(e) => {
                    funNom(e);
                    <Form.Control.Feedback type="invalid"> {errors.Nom}</Form.Control.Feedback> 

                  }}
                  
                  />
                  <Form.Control.Feedback type="invalid"> {errors.Nom}</Form.Control.Feedback> 
              

        <Form.Label>Prénom :</Form.Label>
                <Form.Control
                  type="text"
                  id="Prenom"
                  isInvalid={!!errors.Prenom}
                  onChange={(e) => {
                    funPrenom(e);
                  }}
                  value={formData.Prenom}
                  />
                <Form.Control.Feedback type="invalid"> {errors.Prenom}</Form.Control.Feedback> 

       
       <Form.Label> Sexe :</Form.Label>
       
                    <Form.Select 
                        aria-label="Sexe"  
                        placeholder='homme/femme'   
                        
                        isInvalid={!!errors.Sexe}
                        onChange={(e) => {
                          funSexe(e);

                        }}
                       // value={formData.Sexe}
                         >                    
                        {

                        options.map((opt,index)=>{
                            return(    
                            <option key={index} value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid"> {errors.Sexe}</Form.Control.Feedback> 


        <Form.Label> Wilaya :</Form.Label>
       
       <Form.Select 
           placeholder='wilaya'
           aria-label="Wilaya"     
           //value={formData.Wilaya}
           isInvalid={!!errors.Wilaya}
           onChange={(e) => {
            funWilaya(e);
             }}
             //value={formData.Wilaya}
             >
           
                    
           {
           wilaya.map((opt,index)=>{
               return(    
               <option key={index} value={opt}> {opt}</option>
               )
           })}
           
           </Form.Select>
           <Form.Control.Feedback type="invalid"> {errors.Wilaya}</Form.Control.Feedback> 

       
           <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  id="Telephone"
                  isInvalid={!!errors.Telephone}
                  onChange={(e) => {
                    funTelephone(e);
                  }}
                  value={formData.Telephone}
                  />
            <Form.Control.Feedback type="invalid"> {errors.Telephone}</Form.Control.Feedback> 

       
      
        <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  isInvalid={!!errors.Email}
                  placeholder="name@example.com"
                  onChange={(e) => {
                    funEmail(e);
                  }}                 
                  value={formData.Email}
                  />
          <Form.Control.Feedback type="invalid"> {errors.Email}</Form.Control.Feedback> 

        
      </div>
    );
  }
  
  export default Profile;
  