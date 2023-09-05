import './Buttons.css'
import {Link}from 'react-router-dom'

const PrimaryButton = (props) => {
  return (
    <div className=' button primary-btn w-auto' >
       {/* <a href={props.href} onClick={props.onClick}> {props.titre} </a>  */}
       <Link to={props.to}  onClick={props.onClick}> {props.titre} </Link>
       </div>
  )
}

const SButton = (props) => {
  return (
    <div className=' button s-btn w-auto ai' >
       <a href={props.href}   onClick={props.onClick}> {props.titre} </a> 
       </div>
  )
}

export default PrimaryButton
export {SButton}
