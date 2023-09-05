import React, { useState } from "react";
import Profile from "./Profile";
import Vehicule from "./Vehicule";
import Formule from "./Formule";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { Row ,Col,Card,Button} from 'react-bootstrap';
import Devisform from "./Devisform";
import Contrat from "./Contrat";
import { useEffect } from "react";
import { Modal,  Form } from "react-bootstrap";
import { Document, Text, Page } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import './devisform.css'





function Forms( props) {
  const [page, setPage] = useState(0);
  const [etat,setEtat]=useState("false");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const MyDocument = () => (
    <Document>
      <Page>
        <Text>Hello There</Text>
      </Page>
    </Document>
  );
  const [formData, setFormData] = useState({
    Nom: "",
    Prenom: "",
    Sexe: "",
    Wilaya: "",
    Telephone: "",
    Email: "",
    Puissance: "",
    Valeur: "",
    Annee: "",
   // Duree: "",
    Formule: "",
    Depannage:"",
    Vol:false,
    Incendie:false,
    bdg:false,
  });

 useEffect(()=>{
      <Contrat formData={formData}/> 

 },[formData]);


  const FormTitles = ["Profile", "Vehicule", "Formule"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Profile formData={formData} setFormData={setFormData}  errors={errors}  setField={setField}/>;
    } else if (page === 1) {
      return <Vehicule formData={formData} setFormData={setFormData}  errors={errors}  setField={setField} />;
    } else {
      return <Formule formData={formData} setFormData={setFormData}  errors={errors}  setField={setField} />;
    }
  };
// partie de control 
const [form,setForm]=useState({})
  const [errors,setErrors]=useState({})
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

  if(form.puissance ===undefined) {newErrors2.Puissance='Choisir la puissance'}
   if(form.valeur ===undefined) {newErrors2.Valeur='Entrer la valeur du vehicule'}
   if(form.annee ===undefined) {newErrors2.Annee="entrer l'année du vehicule"}

  return newErrors2
 }

 
 const validateForm3=()=>{
  const newErrors3={}
  const currentYear = new Date().getFullYear();


  if(form.formule ===undefined) {newErrors3.Formule='Choisir une Formule'}
  if(form.formule=="Dommage Collision 30 000 da" && currentYear-Number(form.annee)<3){newErrors3.Formule='Choisir une Formule autre formule svp (année vehicule doit etre sup à 3 ans pour D.C 30 000 da)'}
  if(form.formule=="Dommage Collision 20 000 da" && currentYear-Number(form.annee)<15){newErrors3.Formule='Choisir une Formule autre formule svp (année vehicule doit etre sup à 15 ans pour D.C 20 000 da)'}

  if(form.depannage ===undefined) {newErrors3.Depannage="Choisir l'offre du depannage qui vous convient "}
  if(form.depannage ==="Depannage 100 km" && form.formule=="Tous Risques avec reduction 50%") {newErrors3.Depannage="Choisir une autre offre depannage svp (cette offre est exclus dans la tous risque"}


  return newErrors3
 }



  const validateForm=()=>{
  
    const newErrors={}
    //newErrors.Nom ='svp entrer votre nom'
    if(form.nom === undefined) { newErrors.Nom ='Entrer votre nom'}
    if( form.prenom ===undefined) {newErrors.Prenom='Entrer votre prenom'}
    if(form.sexe ===undefined) {newErrors.Sexe='Choisir votre sexe'}
    if(form.wilaya ===undefined) {newErrors.Wilaya='Choisir votre wilaya'}
    if(form.telephone ===undefined) {newErrors.Telephone='Entrer votre numéro de Teléphone'}
    if(form.email ===undefined) {newErrors.Email='entrer votre adresse mail'}
   // else if(!Email.includes('@') || !Email.includes('.')) newErrors.Email='Adresse mail non valide'
   

   return newErrors
  }



  const handlesubmit =(e)=>{
   //e.preventDefault()
  
   const formErrors=validateForm()
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


   }
   else if(page===1) {
    const formErrors2=validateForm2()
    if(Object.keys(formErrors2).length >0 ){
      console.log("dans if2 ")
      setErrors(formErrors2)
      console.log("errors",errors)
      console.log("form",form)
      console.log("new errors",formErrors2)
      console.log("tab errors",errors)

    }else {
      setPage((currPage) => currPage + 1 );

    }

   }
   else if(page===2) {
    const formErrors3=validateForm3()
    if(Object.keys(formErrors3).length >0 ){
      console.log("dans if3 ")
      setErrors(formErrors3)
      console.log("errors",errors)
      console.log("form",form)
      console.log("new errors",formErrors3)
      console.log("tab errors",errors)

    }

   }
   
   
   
   
   
   
   
   else {
    console.log("dans else ")
    console.log('form submitted')
    console.log("errors",errors)
    console.log("form",form)
    console.log("new errors",formErrors)
    setPage((currPage) => currPage + 1 );
   // handlesubmit()
   }
  
  }

  return (
    <div className="form">
    
      <CssBaseline />
      <Container component={Box} p={4}>
       
        <Row className='m-5'>
          <Col className='align-self-center'>
            <Devisform step={page}/>
          </Col>
        </Row>
        <Row >
      <Card>
      <Card.Body>
        <div >{PageDisplay()}</div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between'>
        <div className="start-0">
          <Button 
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          </div>
          
          <Button
            onClick={() => {
            //  && errors==={}
            const formErrors3=validateForm3()

              if (page === FormTitles.length - 1  && Object.keys(formErrors3).length ===0 ) {
               // alert("FORM SUBMITTED");
                console.log(formData);
                setEtat("true")
                handleShow()
               // handlesubmit()
               
                   
              }  else {
               handlesubmit()
               console.log("affichage erreur",errors);
              }
              /*   */
            
            }}
          >
            {page === FormTitles.length - 1 ? "Submit"  : "Next"}
            
          </Button>
          </Card.Footer>

      </Card>
      </Row>
      {/* {etat === "true"  ? <Contrat formData={formData}/> : ""} */}
      

      </Container>
      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon devis en ligne</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <h5>Nom : <span>{formData.Nom} </span></h5>  
          <h5>Prénom  : <span>{formData.Prenom}</span></h5>
          <h5>N° de Telephone : <span>{formData.Telephone}</span></h5>
          <h5>E-mail :<span> {formData.Email}</span></h5>
          <h5>Formule d'assurance : <span>{formData.Formule}</span></h5>
          {etat === "true"  ? <Contrat formData={formData}/> : ""}
          {/* <Contrat formData={formData}/> */}

          
          </>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}

export default Forms;
