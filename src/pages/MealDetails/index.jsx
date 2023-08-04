import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { RedButton } from '../../components/RedButton'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import orderlogo from '../../assets/orderlogo.svg'
import { useAuth } from '../../hooks/auth'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { useParams } from 'react-router-dom'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function MealDetails() {
  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const [meal, setMeal] = useState();
  const [search, setSearch] = useState('');

  const mealUrl = meal ? `${api.defaults.baseURL}/files/${meal.image}` : '';

  async function handleEdit() {
    navigate(`/meals/${params.id}`)
  }

  function handleIncrements() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    async function fetchMeal() {

      const response = await api.get(`/meals/${params.id}`)
      setMeal(response.data)

    }
    fetchMeal()
  }, [])


  if (user.isadmin) {


    return (

      <Container>
        <HeaderAdmin setSearch={setSearch} />

        {meal &&
          <div className='MealDetails'>

            <Link to='/'><FiArrowLeft />Voltar</Link>
            <div className='DetailsData'>
              <div>
                <img alt={`imagem da refeição ${meal.title}`} className='mealPhoto' src={mealUrl} />
              </div>
              <div className='rightSide'>
                <h1>{meal.title}</h1>
                <h3>{meal.description}</h3>
                <div className='MealIngredientsSection'>
                  <div className='MealIngredients'>
                    {
                      meal.ingredients.map(ingredient => (

                        <li key={String(ingredient.id)}>
                          <p> {ingredient.name}</p>

                        </li>

                      ))
                    }
                  </div>
                </div>
                <div className='orderAndQtd'>
                  <></>
                  <div className='orderBtn'>
                    <RedButton onClick={() => handleEdit()} title='Editar Prato' alt='ClickToEdit' />

                  </div>
                </div>
              </div>
            </div>
          </div>
        }


        <Footer />
      </Container>



    )
  } else {
    return (

      <Container>
        <Header setSearch={setSearch} />

        {meal &&
          <div className='MealDetails'>

            <Link to='/'><FiArrowLeft />Voltar</Link>
            <div className='DetailsData'>
              <div>
                <img alt={`imagem da refeição ${meal.title}`} className='mealPhoto' src={mealUrl} />
              </div>
              <div className='rightSide'>
                <h1>{meal.title}</h1>
                <h3>{meal.description}</h3>
                <div className='MealIngredientsSection'>
                  <div className='MealIngredients'>

                    {
                      meal.ingredients.map(ingredient => (

                        <li key={String(ingredient.id)}>
                          <p> {ingredient.name}</p>

                        </li>

                      ))
                    }
                  </div>
                </div>
                <div className='orderAndQtd'>


                  <div className='qtdOfOrder'>
                    <img alt='sinal de menos' src={minus} onClick={handleDecrement} />
                    <label> {quantity < 10 ? `0${quantity}` : quantity}</label>
                    <img alt='sinal de mais' src={plus} onClick={handleIncrements} />
                  </div>



                  <div className='orderBtn'>

                    <RedButton alt='ClickToOrder' icon={orderlogo} title={`pedir - R$ ${meal.price}`} />


                  </div>
                </div>
              </div>
            </div>
          </div>


        }
        <Footer />
      </Container>

    )
  }

}

