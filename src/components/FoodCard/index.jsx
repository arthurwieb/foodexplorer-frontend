
import {Container} from './styles'
import {RedButton} from '../../components/RedButton'
import {Link} from 'react-router-dom'
import heart from '../../assets/heart.svg'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
export function FoodCard({meal}) {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const mealUrl = `${api.defaults.baseURL}files/${meal.image}`

  function handleIncrements(){
    setQuantity(quantity + 1);
  }

  function handleDecrement (){
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  async function handleDetails() {
    navigate(`/mealdetails/${meal.id}`)

  }

    return(
      <Container >
        <div className= 'card' >
          <div className = 'favorite' >
            <img src = {heart} alt ='favorite'></img>
          </div>

          <div className = 'mealphoto'>
            <img src = {mealUrl} alt= {`Foto da refeição ${meal.title}`}></img>
          </div>
          <a onClick = {handleDetails} className = 'mealName'>{meal.title}</a>
          <label className  = 'mealDesc desapear'>{meal.description}</label>
          <p className='mealPrice'>
          {`R$ ${meal.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`}
        </p>
          <div className = 'qtdOfOrder'>
            <img alt = 'sinal de menos' src = {minus} onClick = {handleDecrement}/>
            <label> {quantity < 10 ? `0${quantity}` : quantity} </label> 
            <img alt = 'sinal de mais' src = {plus} onClick = {handleIncrements}/> 
            <RedButton title = 'incluir'></RedButton>
          </div>
        </div>
      </Container>
    )
}