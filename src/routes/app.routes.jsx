import {Routes, Route} from 'react-router-dom'
import {EditMeal} from '../pages/EditMeal'
import {Home} from '../pages/Home'
import {MealDetails} from '../pages/MealDetails'
import {NewMeal} from '../pages/NewMeal'


export function AppRoutes(){
  return(
    <Routes>
     

      <Route path='/' element= {<Home/>}/>
      <Route path='/editmeal/:id' element= {<EditMeal/>}/>
      <Route path='/mealdetails/:id' element= {<MealDetails/>}/>
      <Route path='/newmeal' element= {<NewMeal/>}/>

    </Routes>
  )
}