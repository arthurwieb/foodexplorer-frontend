import {Container} from './styles.js'
import { IMaskInput } from 'react-imask';


export function Input({placeholder,onChange ,difColor, type,icon: Icon, ...rest}) {

  return(
    <Container difColor = {difColor}>
     {Icon && <Icon size={20}/>} 


      <IMaskInput type = {type} placeholder = {placeholder} {...rest} onChange = {onChange} ></IMaskInput>
    </Container>
  )
}

