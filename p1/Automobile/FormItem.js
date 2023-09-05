import { Form } from "react-bootstrap"
import Forms from "./Forms"
import { useState } from "react"
const FormItem = ({item ,onChange , answer}) => {
  const [currentValue,setCurrentValue]=useState(answer || null );
  const [date, setDate] = useState(new Date());

    switch(item.type){
        case 'text':
            return(
                <>
                <Form.Label>{item.label} :</Form.Label>
                <Form.Control
                  type="text"
                  id={item.label}
                  onChange={(e)=> onChange(e.target.value,item.value)}
                  value={currentValue}
                  />
                </>
            )
            break;
        case 'password':
            return(
                <>
                <Form.Label>{item.label} :</Form.Label>
                <Form.Control  
                  type="password"
                  id="inputPassword5"
                  onChange={(e)=> onChange(e.target.value,item.value)}
                  value={currentValue}


                  />
                </>
            )
            break;
            case 'select':
                return(
                    <div className="mt-2">
                    <Form.Label> {item.label} :</Form.Label>
                    <Form.Select 
                                aria-label={item.label}       
                                 value={currentValue} onChange={(e)=> onChange(e.target.value,item.value)}>
                        {/* <option>{item.label}</option> */}
                        {/* <option>{item.options[0]}</option> */}
                        {
                        item.options.map((opt,index)=>{
                            return(    
                            <option value={opt}> {opt}</option>
                            )
                        })}
                        </Form.Select>
                   
                    </div>
                )
                break;
                case 'date':
                    return(
                    <>
                    <Form.Label>{item.label} :</Form.Label>
                    <Form.Control
                    type="date"
                    id={item.label}
                    placeholder="Due date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                //  onChange={(e)=> onChange(e.target.value,item.value)}
                 // value={currentValue}
                  /> </>
            )
            break;
            case 'email':
            return(
                <>
                <Form.Label>{item.label} :</Form.Label>
                <Form.Control
                  type="email"
                  id={item.label}
                  placeholder="name@example.com"
                  onChange={(e)=> onChange(e.target.value,item.value)}
                  value={currentValue}
                  />
                </>
            )
            break;

            
            case 'information':
                return(
                    <p>{item.label}</p>
                )

    }
    return(
        <>
        </>
    )
  
}

export default FormItem