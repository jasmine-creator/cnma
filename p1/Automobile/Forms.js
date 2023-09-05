import { Form } from "react-bootstrap"
import FormItem from "./FormItem"
import { useState ,useEffect } from "react"

const Forms = (props) => {
    const [answers,setAnswers]=useState({ index:props.step});
     
    useEffect(()=> {
        if(Object.keys(answers).length >1){
            props.onPagesUpdate(answers.index,answers);
            setAnswers({index:props.step})
        }else{
            setAnswers({index:props.step})
        }
    },[props.step])


    const updateAnswers=(value,category) =>{
        setAnswers({...answers,[category]:value})
    }
    const afficher=()=>{
        console.log(answers)

      }
    
  return (
    <div className="text-left">
            

        {
            props.list[props.step-1].items?.map((item,index) => {
                return (
                    // <div>{item.label}</div>
               <FormItem key={item.label} item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step]? props.pagesAnswers[props.step][item.value]:null}/>
             //  <FormItem key={item.label} item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step][item.value]}/>

                    )
            })
        }
        {afficher()}
    </div>
  )
}

export default Forms