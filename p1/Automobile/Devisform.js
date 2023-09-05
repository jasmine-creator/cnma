import './devisform.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from 'react';



const Devisform = (props) => {




  return (
    <>
   
      <ProgressBar
        percent={((props.step-1)*100)/2}
        filledBackground="linear-gradient(to right, #f0bb31 ,#3c9c13)"
      >
                {/* filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" */}

        
        <Step transition="scale">
          {({ accomplished, index}) => (
            <div>
            <div className={`step ${accomplished ? "completed":""} m-4`}>
                 1
              </div>
              <div><h3>profile</h3></div>


              </div> 
          )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished , index}) => (
            <div>
              <div className={`step ${accomplished ? "completed":""} m-4`}>
                 2
                 </div>
                 <div><h3>Vehicule</h3></div>


         </div>
          )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished ,index }) => (
            <div>
             <div className={`step ${accomplished ? "completed":""} m-4` } >
             3
           </div>
           <div ><h3>Formule</h3></div>

          
           </div>
          )}
        </Step>
        
      </ProgressBar>
    
  
    
    
    
    
    
    </>
  )
}

export default Devisform