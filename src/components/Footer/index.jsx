
import {Container} from './styles'
import hexagonalLogoGrey from '../../assets/hexagonalLogoGrey.svg'


export function Footer() {


  
    return(
      <Container>
        <footer>
          
          <div className ='footerLogoSide'>
            <img src = {hexagonalLogoGrey} alt = 'Logo foods explorer'></img> 
            <p>food explorer</p>
          </div>

          <div className = 'footerLicenceSide'>
            <label>© 2023 - Todos os direitos reservados.</label>
          </div>

        </footer>
      </Container>
    )
}