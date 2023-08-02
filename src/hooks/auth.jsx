import {createContext, useContext, useState, useEffect} from 'react'
import {api} from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})
  async function signIn({email, password}) {
    try{
      const response = await api.post('/sessions', {email, password})
      
      const {user, token} = response.data
      localStorage.setItem('@foodsExplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodsExplorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({user, token})    

    }catch(error){
      alert(error.response.data.message)
    }

  }
  function signOut() {
    localStorage.removeItem('@foodsExplorer:user')
    localStorage.removeItem('@foodsExplorer:token')

    setData({})
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('@foodsExplorer:token')
    const user = localStorage.getItem('@foodsExplorer:user')


    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user:JSON.parse(user)
      })

    }
  },[])
  return(
    <AuthContext.Provider value ={{signIn, signOut,user: data.user}}>
      {children}
    </AuthContext.Provider>

  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}