import {Container} from './styles.js'


export function RedButton({title,onClick,icon : Icon,alt, ...rest}) {


  return(
    <Container  onClick = {onClick} title ={title}>
      {
        Icon ?
        <img src = {Icon} alt ={alt}/>
        :
        <></>
      }
     { title }
    </Container>
  )
}

