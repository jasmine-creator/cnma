import React from 'react'
import { Form } from "react-bootstrap"
import { useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
import { Button} from 'react-bootstrap';
import { Modal } from "react-bootstrap";




const ContactUS = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    // partie de control 
const [form,setForm]=useState({});
const [errors,setErrors]=useState({});
const setField=(field,value)=>{
  setForm({
     ...form,
     [field]:value})

  if(!!errors[field]) 
  setErrors({
    ...errors,
    [field]:null
  })

}


const validateForm2=()=>{
const newErrors2={}

if(form.nom ===undefined) {newErrors2.nom='Entrer votre nom svp'}
 if(form.email ===undefined) {newErrors2.email='Entrer votre Email svp'}
 if(form.sujet ===undefined) {newErrors2.sujet="Entrer le sujet de votre message svp"}
 if(form.message ===undefined) {newErrors2.message="entrer votre message svp"}

return newErrors2
}




const handlesubmit =(e)=>{
 //e.preventDefault()

 const formErrors=validateForm2()
 console.log("new errors",formErrors)
 console.log("form avant ",form)
 console.log("lenght formerrors ",Object.keys(formErrors).length)


// if(Object.keys.formErrors>0)
 if(Object.keys(formErrors).length >0 ){
  console.log("dans if ")

  setErrors(formErrors)
  console.log("errors",errors)
  console.log("form",form)
  console.log("new errors",formErrors)
  console.log("tab errors",errors)


 }else{handleShow()}
 

}




    const forme=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qg2s1xj', 'template_qd8xz0s', forme.current, 'soB4txTju3dKunlMZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <>
    <div className="Container">
        <br/><br/>
    <h3 style={{textAlign:"center" ,color:"peru"}}>Contactez nous</h3>
    <Form ref={forme} onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Nom et Prénom</Form.Label>
        <Form.Control
            type="text"
            placeholder="Nom et Prénom" 
            name="name"
            isInvalid={!!errors.nom}
            onChange={(e) => {
                setField('nom', e.target.value);
            }}

            />
          <Form.Control.Feedback type="invalid"> {errors.nom}</Form.Control.Feedback> 




         
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
         type="email" 
         placeholder="name@example.com" 
          name="email"
          isInvalid={!!errors.email}
          onChange={(e) => {
            setField('email', e.target.value);
          }}
          />
        <Form.Control.Feedback type="invalid"> {errors.email}</Form.Control.Feedback> 
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Sujet</Form.Label>
        <Form.Control 
            type="text" 
            placeholder=""  
            name="sujet"
            isInvalid={!!errors.sujet}
            onChange={(e) => {
                setField('sujet', e.target.value);            }}
            />
          <Form.Control.Feedback type="invalid"> {errors.sujet}</Form.Control.Feedback> 

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Message</Form.Label>
        <Form.Control 
            as="textarea" 
            rows={3}  
            name="message"
            isInvalid={!!errors.message}
            onChange={(e) => {
                setField('message', e.target.value);            }}
            />
          <Form.Control.Feedback type="invalid"> {errors.message}</Form.Control.Feedback> 
      </Form.Group>





      {/* <button type="submit" >Envoyer le message</button> */}
      <Button type="submit"  onClick={handlesubmit} > Envoyer</Button>

    </Form>
    <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nous avons reçu votre message  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
         vous recevrez une réponse dans les plus brefs délais
          
          </>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    



    
    </div>
    
    
    </>
  )
}

export default ContactUS