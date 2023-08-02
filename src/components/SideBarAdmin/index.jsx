import {Container} from './styles'
import {Input} from '../Input'
import {Footer} from '../Footer'
import {TxtLink} from '../TxtLink'
import close from '../../assets/close.svg'
import {FiSearch} from 'react-icons/fi'
import { Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth';

export function SideBarAdmin({active, setSearch}) {
  const {signOut} = useAuth()

  const closeSideBar = () => {
    active(false)
  }

    return(
      <Container>
        <div className = 'sidebar'>
          <div className = 'sideBarContent'>
            <div className ='topMenu'>
            <img
              src = {close}
              alt='Fechar sideBar'
              className ='CloseSideBar'
              onClick = {closeSideBar}
              />
              <p>Menu</p>
            </div>

            <div className = 'searchBarInput'>
              <Input
               onChange = {(e)=> setSearch(e.target.value)} 
               placeholder = 'Busque por pratos ou ingredientes' icon = {FiSearch}></Input>
           </div>

           <div className ='sideBarOptions'>
            <Link to = '/newmeal'>Novo prato</Link>
            <Link onClick = {signOut} to = '/'>Sair</Link>
            </div> 
         </div>
         <Footer/>
        </div>
      </Container>
    )
}