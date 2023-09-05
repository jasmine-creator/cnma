import './devis.css'
import Form from 'react-bootstrap/Form';
// import { Container } from 'react-bootstrap';

import Devisform from "./Devisform";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { useState } from 'react';
import { Row ,Col,Card,Button} from 'react-bootstrap';
import { questions } from './Questions';
import Forms from './Forms';

const Devis = () => {
  const [index , setIndex] = useState(1);
  const totalPagesCount=questions.length;
  const [pagesAnswers, setPagesAnswers]=useState({});
  const [submitted,setSubmitted]=useState(false);

const onPagesAnswersUpdate =(step,answersObj)=> {
  setPagesAnswers({...pagesAnswers,[step]:answersObj}); 
}

  const prevButton = ()=>{
    if(index > 1){
      setIndex(prev=>prev-1);}

  }
  const nextButton = ()=>{
    if(index < totalPagesCount ){
      setIndex(prev => prev+1)
      afficher();
    
    }
    
    else 
    {
      // setPagesAnswers({});
      setSubmitted(true);
      //setIndex(prev => prev)


    }

  }

  const handleStart=()=>{
    setIndex(1);
    setSubmitted(false);
    afficher();
  }
  const afficher=()=>{
    console.log(pagesAnswers)
    console.log(totalPagesCount)
  }


  return (
    <>
   <CssBaseline />
      <Container component={Box} p={4}>
        {/* <Paper component={Box} p={3}> */}
        {/* <Col className='align-self-center'> */}
        <Row className='m-5'>
          <Col className='align-self-center'>
            <Devisform step={index}/>
          </Col>
        </Row>
          <Row>
          {
            submitted ?             

            <Card>
               {afficher()}

              <Card.Body>
                <p>Your answers have been submitted!</p>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card> :
            <Card>
              <Card.Body>
                <Forms step={index} list={questions} onPagesUpdate={onPagesAnswersUpdate} pagesAnswers={pagesAnswers}/>

              </Card.Body>
              <Card.Footer className='d-flex justify-content-between'>
                <Button onClick={prevButton} disabled={index===1}>Précédant </Button>
                {/* <Button onClick={nextButton }>{index=== totalPagesCount ? 'Valider':'Suivant'}</Button> */}
                <Button onClick={() => {afficher(); nextButton(); } }>{index=== totalPagesCount ? 'Valider':'Suivant'}</Button>

               {afficher()}

              </Card.Footer>

            </Card>
}
          </Row>
        {/* </Paper> */}
      </Container>
      
      
      
      
      </>
      
  )


}
export default Devis
